import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '坂上諒 演奏動画 | チェリスト・チェロ',
  description: 'チェリスト坂上諒の演奏動画一覧。バッハ：無伴奏チェロ組曲、グリーグ・ショスタコーヴィチのチェロソナタ、ドビュッシー、もののけ姫など。YouTubeチャンネルにて公開中。',
  openGraph: {
    title: '坂上諒 演奏動画 | チェリスト・チェロ',
    description: 'チェリスト坂上諒の演奏動画。バッハ無伴奏、グリーグ・ショスタコーヴィチのチェロソナタなどクラシックからポップスまで。',
    images: [
      {
        url: 'https://img.youtube.com/vi/oZ8cc51sufE/hqdefault.jpg',
        width: 480,
        height: 360,
        alt: '坂上諒 チェロ バッハ無伴奏チェロ組曲',
      },
    ],
  },
};

const classic = [
  { id: 'NBikLNyzD1A', title: 'グリーグ：チェロソナタ イ短調 Op.36' },
  { id: 'i8MEBoKDvSo', title: 'ショスタコーヴィチ：チェロソナタ ニ短調' },
  { id: 'eE_uboaOy4Q', title: 'ストラヴィンスキー：イタリア組曲' },
  { id: '1IMfhJBDjG4', title: 'チャイコフスキー：ノクターン Op.19-4' },
  { id: 'GL30prQWP0c', title: 'チャイコフスキー：メロディー Op.42-3' },
  { id: 'DT94JO8rCbQ', title: 'ドビュッシー：チェロソナタ ニ短調' },
  { id: 'oZ8cc51sufE', title: 'バッハ：無伴奏チェロ組曲 第1番（プレリュード・サラバンド・メヌエット）' },
  { id: 'xOflf3jl-r8', title: 'バッハ：無伴奏チェロ組曲 第1番 プレリュード' },
  { id: '_p6QSpUyuT8', title: 'バッハ：無伴奏チェロ組曲 第1番 クーラント' },
  { id: 'Lqg6T7l5IKQ', title: 'バッハ：無伴奏チェロ組曲 第1番 サラバンド' },
  { id: 'EnUscDdIvbI', title: 'バッハ：無伴奏チェロ組曲 第1番 メヌエット' },
  { id: 'K7J0Yjswd8A', title: 'バッハ：無伴奏チェロ組曲 第3番 ハ長調' },
  { id: 'jX_TmSlHXlQ', title: 'バッハ：無伴奏チェロ組曲 第5番' },
  { id: 'eEc938qHVOU', title: 'バッハ：無伴奏チェロ組曲 第6番 プレリュード' },
  { id: 'O6qQlwajJbE', title: 'バッハ：無伴奏チェロ組曲 第6番 クーラント' },
  { id: 'R-CIGq9_wJU', title: 'バッハ：無伴奏チェロ組曲 第6番 サラバンド' },
  { id: 'rwvpcgE-Zho', title: 'バッハ：無伴奏チェロ組曲 第6番 ジーグ' },
  { id: 'pQoJbolLcj8', title: 'パラディス：シチリアーノ' },
  { id: '5Hkuensl3_o', title: 'ベートーヴェン：魔笛の主題による7つの変奏曲' },
  { id: 'cgK4TGcXu2o', title: 'ボッケリーニ：チェロソナタ イ長調 G.4' },
  { id: 'BvhokI4Cr8Q', title: 'メンデルスゾーン：協奏的変奏曲' },
  { id: 'v0uQMqR6KQo', title: 'ラフマニノフ：チェロソナタ ト短調' },
  { id: '1QB8U5YA4Qs', title: 'リゲティ：無伴奏チェロソナタ' },
  { id: '6kV1WCKOucM', title: 'リゲティ：無伴奏チェロソナタ 第2楽章' },
  { id: 'f8AJ0E5mMxs', title: 'ロッシーニ：涙（主題と変奏）' },
];

const film = [
  { id: '_XrCpt52e44', title: 'もののけ姫：アシタカせっ記' },
  { id: 'gITqgDgZ_KE', title: 'パイレーツ・オブ・カリビアン：彼こそが海賊' },
  { id: 'Hs2Tlr3qf8o', title: 'ニュー・シネマ・パラダイス：愛のテーマ' },
  { id: 'GbaxpSI8Arc', title: 'ミッション：ガブリエルのオーボエ' },
  { id: 'Kj78FxrJTXo', title: '塔の上のラプンツェル：輝く未来' },
];

const popular = [
  { id: 'dekl0VeE3yQ', title: 'King Gnu：白日' },
  { id: 'mAtWPRZEf3Y', title: 'YOASOBI：群青' },
  { id: 'm9C5vaE_hAE', title: '宇多田ヒカル：One Last Kiss' },
  { id: '8tpqg1GzRX8', title: 'Ed Sheeran：Shape of You' },
];

function VideoCard({ id, title }: { id: string; title: string }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/youtube/${id}.jpg`}
          alt={`坂上諒 チェロ ${title}`}
          className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-brown/80 transition-colors">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-xs text-warm-text mt-2 leading-snug">{title}</p>
    </a>
  );
}

function Section({ label, title, videos }: { label: string; title: string; videos: { id: string; title: string }[] }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <p className="section-sub">{label}</p>
      <h2 className="section-title mb-10">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {videos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </div>
    </section>
  );
}

const allVideos = [...classic, ...film, ...popular];

export default function MusicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '坂上諒 演奏動画一覧',
            description: 'チェリスト坂上諒のYouTube演奏動画。クラシック・映画音楽・ポピュラー。',
            url: 'https://www.ryosakaue.com/music',
            itemListElement: allVideos.map((v, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: `坂上諒 チェロ ${v.title}`,
              url: `https://www.youtube.com/watch?v=${v.id}`,
              image: `https://www.ryosakaue.com/images/youtube/${v.id}.jpg`,
            })),
          }),
        }}
      />

      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Music</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">Music</h1>
        <p className="mt-4 text-cream/80">演奏動画・YouTube</p>
      </section>

      <Section label="Classical" title="クラシック" videos={classic} />

      <div className="bg-white">
        <Section label="Film Music" title="映画音楽" videos={film} />
      </div>

      <Section label="Popular" title="ポピュラー" videos={popular} />

      <section className="bg-olive/10 border-t border-b border-olive/20 py-16 text-center">
        <h2 className="section-title mb-4">YouTubeチャンネル</h2>
        <p className="text-muted mb-8">その他の動画はチャンネルからご覧いただけます。チャンネル登録もよろしくお願いします。</p>
        <a
          href="https://www.youtube.com/@ryosakauecello7257"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          YouTubeチャンネルを開く
        </a>
      </section>
    </>
  );
}
