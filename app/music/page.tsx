import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music',
  description: 'チェリスト坂上諒の演奏動画。バッハ、クラシック、ポップスまで幅広く。YouTubeチャンネル「Ryo Sakaue Cello」にて公開中。',
};

export default function MusicPage() {
  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Music</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">Music</h1>
        <p className="mt-4 text-cream/80">演奏動画・YouTube</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <p className="section-sub">YouTube Channel</p>
        <h2 className="section-title mb-4">Ryo Sakaue Cello</h2>
        <p className="text-muted mb-8">
          クラシックの名曲からポップスまで、様々な演奏動画をYouTubeで公開しています。チャンネル登録もよろしくお願いします。
        </p>
        <a
          href="https://www.youtube.com/@ryosakauecello7257"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          YouTubeチャンネルを開く
        </a>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="section-sub text-center">Videos</p>
          <h2 className="section-title text-center mb-12">演奏動画</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'バッハ 無伴奏チェロ組曲 第1番', desc: 'プレリュード、サラバンド、メヌエット' },
              { title: 'パラディスのシチリアーノ', desc: 'コンサートより' },
              { title: 'ラプンツェル「輝く未来」', desc: 'ディズニー映画より' },
            ].map((v) => (
              <a
                key={v.title}
                href="https://www.youtube.com/@ryosakauecello7257"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-warm-border p-6 hover:shadow-md transition-shadow block text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brown/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brown" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-sm text-warm-text mb-1">{v.title}</h3>
                <p className="text-xs text-muted">{v.desc}</p>
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-muted mt-8">
            その他の動画はYouTubeチャンネルからご覧いただけます。
          </p>
        </div>
      </section>
    </>
  );
}
