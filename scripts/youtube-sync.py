#!/usr/bin/env python3
"""
月1回実行：YouTubeチャンネルの新着動画をmusicページに自動追加してデプロイする
"""

import subprocess
import urllib.request
import xml.etree.ElementTree as ET
import re
import os
import sys
import logging
import unicodedata

CHANNEL_ID = "UC326P1q7wsgU7obg8Kjbu6A"
WEBSITE_DIR = "/Users/ryosakaue/Documents/演奏会制作/ウェブサイト"
MUSIC_PAGE = os.path.join(WEBSITE_DIR, "app/music/page.tsx")
THUMBNAILS_DIR = os.path.join(WEBSITE_DIR, "public/images/youtube")
LOG_FILE = os.path.join(WEBSITE_DIR, "scripts/youtube-sync.log")

logging.basicConfig(
    filename=LOG_FILE,
    level=logging.INFO,
    format="%(asctime)s %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

def log(msg):
    logging.info(msg)
    print(msg)


# ---- 英語→日本語 タイトル変換 ----

COMPOSERS = {
    'Bach': 'バッハ',
    'Beethoven': 'ベートーヴェン',
    'Boccherini': 'ボッケリーニ',
    'Brahms': 'ブラームス',
    'Chopin': 'ショパン',
    'Debussy': 'ドビュッシー',
    'Dvorak': 'ドヴォルザーク',
    'Elgar': 'エルガー',
    'Grieg': 'グリーグ',
    'Handel': 'ヘンデル',
    'Haydn': 'ハイドン',
    'Ligeti': 'リゲティ',
    'Liszt': 'リスト',
    'Mendelssohn': 'メンデルスゾーン',
    'Mozart': 'モーツァルト',
    'Paradis': 'パラディス',
    'Prokofiev': 'プロコフィエフ',
    'Rachmaninov': 'ラフマニノフ',
    'Rachmaninoff': 'ラフマニノフ',
    'Ravel': 'ラヴェル',
    'Rossini': 'ロッシーニ',
    'Schubert': 'シューベルト',
    'Schumann': 'シューマン',
    'Shostakovich': 'ショスタコーヴィチ',
    'Strauss': 'シュトラウス',
    'Stravinsky': 'ストラヴィンスキー',
    'Tchaikovsky': 'チャイコフスキー',
    'Vivaldi': 'ヴィヴァルディ',
}

KEY_MAP = {
    'in C Major': 'ハ長調', 'in D Major': 'ニ長調',
    'in E flat Major': '変ホ長調', 'in Eb Major': '変ホ長調',
    'in F Major': 'ヘ長調', 'in G Major': 'ト長調', 'in A Major': 'イ長調',
    'in B flat Major': '変ロ長調', 'in Bb Major': '変ロ長調',
    'in C minor': 'ハ短調', 'in C Minor': 'ハ短調',
    'in D minor': 'ニ短調', 'in D Minor': 'ニ短調',
    'in E minor': 'ホ短調', 'in E Minor': 'ホ短調',
    'in G minor': 'ト短調', 'in G Minor': 'ト短調',
    'in A minor': 'イ短調', 'in A Minor': 'イ短調',
    'in B minor': 'ロ短調', 'in B Minor': 'ロ短調',
}

MOV_MAP = {
    'Prelude': 'プレリュード',
    'Allemande': 'アルマンド',
    'Courante': 'クーラント',
    'Sarabande': 'サラバンド',
    'Minuet': 'メヌエット',
    'Gigue': 'ジーグ',
    'Bourree': 'ブーレ',
    'Bourrée': 'ブーレ',
    'Gavotte': 'ガヴォット',
    'Largo': 'ラルゴ',
    'Andante': 'アンダンテ',
}


def translate_title(title: str) -> str:
    t = title.strip()

    # 末尾の「坂上諒 / Ryo Sakaue」を除去
    t = re.sub(r'\s+(坂上諒|Ryo Sakaue)$', '', t)

    # 作曲家名を変換（先頭の「Composer: 」形式）
    for en, jp in COMPOSERS.items():
        t = re.sub(r'^' + re.escape(en) + r':\s*', jp + '：', t)

    # バッハ無伴奏チェロ組曲（番号を保持）
    def suite_replace(m):
        return f'無伴奏チェロ組曲 第{m.group(1)}番'
    t = re.sub(
        r'Cello\s+[Ss]uite\s+No\.(\d+)(?:\s+in\s+\w+\s+(?:Major|Minor))?(?:\s+BWV\d+)?',
        suite_replace, t
    )

    # 作品種別
    t = re.sub(r'Sonata\s+for\s+Solo\s+Cello', '無伴奏チェロソナタ', t)
    t = re.sub(r'Sonata\s+for\s+Cello(?:\s+and\s+Piano)?', 'チェロソナタ', t)
    t = re.sub(r'Cello\s+Sonata', 'チェロソナタ', t)
    t = re.sub(r'Cello\s+Concerto', 'チェロ協奏曲', t)
    t = re.sub(r'Concerto\s+for\s+Cello', 'チェロ協奏曲', t)
    t = re.sub(r'Double\s+Concerto', '二重協奏曲', t)

    # 調性
    for en, jp in KEY_MAP.items():
        t = t.replace(en, jp)

    # 楽章名
    for en, jp in MOV_MAP.items():
        t = t.replace(en, jp)

    # 残ったコンマを除去してスペース整理
    t = re.sub(r',\s*', ' ', t)
    t = re.sub(r'\s{2,}', ' ', t).strip()

    return t


# ---- メイン処理 ----

def fetch_rss_videos():
    url = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        content = resp.read()

    root = ET.fromstring(content)
    yt_ns = "http://www.youtube.com/xml/schemas/2015"
    media_ns = "http://search.yahoo.com/mrss/"

    videos = []
    for entry in root.findall("{http://www.w3.org/2005/Atom}entry"):
        vid = entry.find(f"{{{yt_ns}}}videoId")
        title_el = entry.find(f"{{{media_ns}}}group/{{{media_ns}}}title")
        if vid is not None and title_el is not None:
            videos.append({"id": vid.text.strip(), "title": title_el.text.strip()})
    return videos


def get_existing_ids():
    with open(MUSIC_PAGE, "r", encoding="utf-8") as f:
        content = f.read()
    return set(re.findall(r"id:\s*'([A-Za-z0-9_-]+)'", content))


def download_thumbnail(video_id):
    os.makedirs(THUMBNAILS_DIR, exist_ok=True)
    url = f"https://img.youtube.com/vi/{video_id}/hqdefault.jpg"
    path = os.path.join(THUMBNAILS_DIR, f"{video_id}.jpg")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        with open(path, "wb") as f:
            f.write(resp.read())


def sort_key(title: str) -> str:
    """50音順ソートキー：濁点・半濁点をベース文字の直後に並べる"""
    result = []
    for ch in title:
        code = ord(ch)
        # 全角カタカナ範囲（ァ-ン）
        if 0x30A0 <= code <= 0x30FF:
            base = unicodedata.normalize('NFD', ch)
            result.append(base)
        else:
            result.append(ch)
    return ''.join(result)


def add_video_to_page(video_id, title):
    with open(MUSIC_PAGE, "r", encoding="utf-8") as f:
        content = f.read()

    # classic配列内の既存エントリをすべて抽出
    classic_match = re.search(r"const classic = \[(.*?)\];", content, re.DOTALL)
    if not classic_match:
        log("classic配列が見つかりません")
        return

    entries = re.findall(r"\{ id: '([^']+)', title: '([^']+)' \}", classic_match.group(1))

    # 新しいエントリを追加してタイトルで50音ソート
    entries.append((video_id, title))
    entries.sort(key=lambda e: sort_key(e[1]))

    # 配列を再構築
    lines = "\n".join(f"  {{ id: '{vid}', title: '{t}' }}," for vid, t in entries)
    new_classic = f"const classic = [\n{lines}\n];"

    content = re.sub(r"const classic = \[.*?\];", new_classic, content, flags=re.DOTALL)

    with open(MUSIC_PAGE, "w", encoding="utf-8") as f:
        f.write(content)


def deploy():
    vercel = subprocess.run(
        ["vercel", "--prod"],
        cwd=WEBSITE_DIR,
        capture_output=True,
        text=True,
        timeout=300,
    )
    if vercel.returncode == 0:
        log("デプロイ成功")
    else:
        log(f"デプロイ失敗:\n{vercel.stderr}")
        sys.exit(1)


def main():
    log("===== YouTube同期開始 =====")

    try:
        rss_videos = fetch_rss_videos()
    except Exception as e:
        log(f"RSSフェッチ失敗: {e}")
        sys.exit(1)

    log(f"RSS取得: {len(rss_videos)}本")

    existing_ids = get_existing_ids()
    new_videos = [v for v in rss_videos if v["id"] not in existing_ids]

    if not new_videos:
        log("新着動画なし。終了します。")
        return

    log(f"新着動画: {len(new_videos)}本")

    for v in new_videos:
        jp_title = translate_title(v["title"])
        log(f"  追加: {v['title']} → {jp_title} ({v['id']})")
        download_thumbnail(v["id"])
        add_video_to_page(v["id"], jp_title)

    deploy()
    log(f"===== 完了: {len(new_videos)}本追加 =====")


if __name__ == "__main__":
    main()
