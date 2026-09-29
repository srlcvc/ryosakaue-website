import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex items-end md:items-center">
        <Image
          src="/images/sakaue-ryo-cellist-nagoya-1.jpg"
          alt="坂上諒 チェリスト 名古屋"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-warm-text/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 md:pb-0 w-full flex md:justify-end text-cream">
          <div>
            <p className="text-xs tracking-[0.3em] mb-3 text-cream/70">CELLIST</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-3 tracking-widest">坂上 諒</h1>
            <p className="text-sm tracking-[0.3em] mb-8 text-cream/70">RYO SAKAUE</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/lesson" className="btn-primary">チェロ教室</Link>
              <Link href="/concert" className="border border-cream text-cream px-6 py-3 text-sm tracking-wider hover:bg-cream hover:text-warm-text transition-colors">
                コンサート情報
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-sub">About</p>
          <h2 className="section-title">チェリスト<br />坂上 諒</h2>
          <p className="text-muted leading-relaxed mt-4">
            東京藝術大学別科チェロ専攻卒業後、イタリア サンタチェチーリア国立アカデミアに留学、Pavia Cello Academyを卒業。ベーテン音楽コンクール第1位、日本クラシック音楽コンクール第2位（最高位）など入賞多数。名古屋フィルハーモニー交響楽団等のオーケストラと協奏曲を共演。現在は名古屋を拠点にソロ、室内楽、オーケストラへの客演など幅広く活動している。
          </p>
          <Link href="/profile" className="btn-outline mt-8 inline-block">プロフィールを見る</Link>
        </div>
        <div className="relative h-80 md:h-96 hidden md:block">
          <Image
            src="/images/sakaue-ryo-cellist-nagoya-2.jpg"
            alt="坂上諒 チェリスト 名古屋"
            fill
            sizes="(max-width: 768px) 0px, 50vw"
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-brown">
                    <rect x="8" y="26" width="48" height="30" rx="1" />
                    <polygon points="4,26 32,8 60,26" />
                    <rect x="27" y="42" width="10" height="14" />
                    <rect x="12" y="32" width="10" height="8" />
                    <rect x="42" y="32" width="10" height="8" />
                  </svg>
                ),
                title: 'チェロ教室',
                desc: '名古屋・星ヶ丘駅徒歩2分。初心者から経験者まで、丁寧に個人レッスンを行います。',
                href: '/lesson',
                label: '詳しく見る',
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-brown">
                    <ellipse cx="20" cy="48" rx="10" ry="7" transform="rotate(-20 20 48)" fill="currentColor" stroke="none" />
                    <line x1="29" y1="43" x2="29" y2="12" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M29 12 C42 16 46 26 38 36" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                ),
                title: 'コンサート',
                desc: 'ソロリサイタル、室内楽、パーティ演奏など様々な形でチェロの音楽をお届けします。',
                href: '/concert',
                label: 'コンサート情報',
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-brown">
                    <circle cx="32" cy="32" r="24" />
                    <polygon points="26,22 26,42 46,32" fill="currentColor" stroke="none" />
                  </svg>
                ),
                title: 'Music',
                desc: 'YouTubeチャンネルで演奏動画を公開しています。クラシックからポップスまで。',
                href: '/music',
                label: '動画を見る',
              },
            ].map((item) => (
              <div key={item.title} className="border border-warm-border hover:shadow-md transition-shadow p-8 text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
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
        <p className="section-sub">News</p>
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
        <Link href="/blog" className="btn-outline mt-8 inline-block">ニュース一覧</Link>
      </section>

      {/* LINE CTA */}
      <section className="bg-olive/10 border-t border-b border-olive/20 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">公式LINEで予約・お問い合わせ</h2>
          <p className="text-muted mb-8">チケット予約のご相談はLINEからお気軽にどうぞ。</p>
          <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/line-tomodachi-button.png"
              alt="LINE友だち追加"
              width={200}
              height={60}
              className="mx-auto hover:opacity-90 transition-opacity w-36 md:w-48"
            />
          </a>
        </div>
      </section>
    </>
  );
}
