import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex items-center">
        <Image
          src="/images/sakaue-ryo-cellist-nagoya-1.jpg"
          alt="チェリスト坂上諒 名古屋"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-warm-text/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-cream">
          <p className="text-sm tracking-[0.3em] mb-4 text-cream/80">NAGOYA CELLIST</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-4 tracking-widest">坂上 諒</h1>
          <p className="text-lg md:text-xl mb-8 text-cream/90">チェリスト｜名古屋・星ヶ丘</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/lesson" className="btn-primary">チェロ教室</Link>
            <Link href="/concert" className="border border-cream text-cream px-6 py-3 text-sm tracking-wider hover:bg-cream hover:text-warm-text transition-colors">
              コンサート情報
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-sub">About</p>
          <h2 className="section-title">チェロの音色で、<br />心に届く音楽を</h2>
          <p className="text-muted leading-relaxed mt-4">
            名古屋を拠点に活動するチェリスト、坂上諒です。ソロリサイタル、室内楽、オーケストラのエキストラなど幅広く演奏活動を行うとともに、星ヶ丘駅から徒歩2分の自宅スタジオでチェロレッスンを行っています。
          </p>
          <Link href="/profile" className="btn-outline mt-8 inline-block">プロフィールを見る</Link>
        </div>
        <div className="relative h-80 md:h-96">
          <Image
            src="/images/sakaue-ryo-cellist-nagoya-2.jpg"
            alt="坂上諒 チェリスト 名古屋"
            fill
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <p className="section-sub text-center">Services</p>
          <h2 className="section-title text-center mb-12">活動内容</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎻',
                title: 'チェロ教室',
                desc: '名古屋・星ヶ丘駅徒歩2分。初心者から経験者まで、丁寧に個人レッスンを行います。',
                href: '/lesson',
                label: '詳しく見る',
              },
              {
                icon: '🎼',
                title: 'コンサート',
                desc: 'ソロリサイタル、室内楽、パーティ演奏など様々な形でチェロの音楽をお届けします。',
                href: '/concert',
                label: 'コンサート情報',
              },
              {
                icon: '🎬',
                title: 'Music',
                desc: 'YouTubeチャンネルで演奏動画を公開しています。クラシックからポップスまで。',
                href: '/music',
                label: '動画を見る',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 border border-warm-border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{item.desc}</p>
                <Link href={item.href} className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
                  {item.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest blog */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <p className="section-sub">Blog</p>
        <h2 className="section-title mb-12">最新情報</h2>
        <div className="divide-y divide-warm-border">
          {recentPosts.map((post) => (
            <article key={post.slug} className="py-6 flex gap-6 items-start">
              <div className="text-xs text-muted whitespace-nowrap pt-1">{formatDate(post.date)}</div>
              <div>
                <span className="text-xs text-brown border border-brown px-2 py-0.5 mr-3">{post.category}</span>
                <Link href={`/post/${encodeURIComponent(post.slug)}`}
                  className="font-sans text-warm-text hover:text-brown transition-colors">
                  {post.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <Link href="/blog" className="btn-outline mt-8 inline-block">ブログ一覧</Link>
      </section>

      {/* LINE CTA */}
      <section className="bg-olive/10 border-t border-b border-olive/20 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">公式LINEで予約・お問い合わせ</h2>
          <p className="text-muted mb-8">チケット予約・レッスンのご相談はLINEからもお気軽にどうぞ。</p>
          <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/line-tomodachi-button.png"
              alt="LINE友だち追加"
              width={200}
              height={60}
              className="mx-auto hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </section>
    </>
  );
}
