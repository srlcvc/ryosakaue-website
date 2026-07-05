import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: '名古屋を拠点に活動するチェリスト坂上諒のプロフィール。ソロリサイタル、室内楽、オーケストラのエキストラとして幅広く演奏活動を展開。',
};

export default function ProfilePage() {
  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Profile</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">プロフィール</h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div className="relative h-[480px] md:h-[560px]">
          <Image
            src="/images/sakaue-ryo-cellist-nagoya-2.jpg"
            alt="坂上諒 チェリスト 名古屋 愛知県"
            fill
            className="object-cover object-top"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl mb-1 tracking-widest">坂上 諒</h2>
          <p className="text-muted text-sm mb-6 tracking-widest">Ryo Sakaue, Cello</p>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <p>
              名古屋を拠点に活動するチェリスト。これまでにソロリサイタルを名古屋市内の各ホールで多数開催し、確かな技術と豊かな音楽性で聴衆を魅了している。
            </p>
            <p>
              室内楽ではピアノトリオ、弦楽四重奏、弦楽八重奏など様々な編成で活動。オーケストラのエキストラとしても県内外のオーケストラに参加している。
            </p>
            <p>
              ライブゲスト、パーティ演奏など幅広いジャンルで演奏活動を行うほか、名古屋・星ヶ丘の自宅スタジオにてチェロレッスンを行い、次世代の音楽家育成にも力を注いでいる。
            </p>
          </div>

          <div className="mt-8 border-t border-warm-border pt-8 space-y-3 text-sm">
            <div className="flex gap-4">
              <span className="text-muted w-20 shrink-0">活動拠点</span>
              <span className="text-warm-text">名古屋市（愛知県）</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted w-20 shrink-0">演奏活動</span>
              <span className="text-warm-text">ソロリサイタル、室内楽、オーケストラ、ライブゲスト、パーティ演奏</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted w-20 shrink-0">指導</span>
              <span className="text-warm-text">チェロ個人レッスン（星ヶ丘・名古屋市千種区）</span>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="https://www.youtube.com/@ryosakauecello7257" target="_blank" rel="noopener noreferrer"
               className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
              YouTube →
            </a>
            <a href="https://www.instagram.com/ryosakau/" target="_blank" rel="noopener noreferrer"
               className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
              Instagram →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative h-64">
                <Image
                  src={`/images/sakaue-ryo-cellist-nagoya-${n}.jpg`}
                  alt={`坂上諒 チェリスト 名古屋 ${n}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
