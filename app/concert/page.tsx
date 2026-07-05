import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'コンサート情報',
  description: 'チェリスト坂上諒のコンサート・演奏会情報。名古屋を中心に活動中。チケット予約はLINEまたはフォームから。',
};

const upcoming = [
  {
    date: '2026年10月11日（日）',
    title: '坂上諒 チェロリサイタル',
    venue: 'HITOMIホール（名古屋）',
    time: '開演 14:00（開場 13:30）',
    ticket: '全自由席 3,000円',
    program: 'バッハ：無伴奏チェロ組曲、他',
    pianist: 'ピアノ：佐々木杏子',
    available: true,
  },
];

export default function ConcertPage() {
  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Concert</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">コンサート情報</h1>
      </section>

      {/* Upcoming concerts */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <p className="section-sub">Upcoming</p>
        <h2 className="section-title mb-12">今後のコンサート</h2>
        {upcoming.map((c) => (
          <div key={c.title} className="border border-warm-border p-8 mb-8">
            <p className="text-sm text-brown font-bold mb-2">{c.date}</p>
            <h3 className="font-serif text-2xl mb-4">{c.title}</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted mb-6">
              <div><dt className="inline font-bold text-warm-text">会場：</dt><dd className="inline">{c.venue}</dd></div>
              <div><dt className="inline font-bold text-warm-text">開演：</dt><dd className="inline">{c.time}</dd></div>
              <div><dt className="inline font-bold text-warm-text">料金：</dt><dd className="inline">{c.ticket}</dd></div>
              <div><dt className="inline font-bold text-warm-text">プログラム：</dt><dd className="inline">{c.program}</dd></div>
              <div><dt className="inline font-bold text-warm-text">共演：</dt><dd className="inline">{c.pianist}</dd></div>
            </dl>
            {c.available && (
              <div className="flex flex-wrap gap-4">
                <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/line-tomodachi-button.png"
                    alt="LINEでチケット予約"
                    width={160}
                    height={48}
                    className="hover:opacity-90 transition-opacity"
                  />
                </a>
                <Link href="/contact#reservation" className="btn-outline">
                  予約フォームへ
                </Link>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* LINE CTA */}
      <section className="bg-olive/10 border-t border-b border-olive/20 py-16 text-center">
        <h2 className="section-title mb-4">チケット予約・お問い合わせ</h2>
        <p className="text-muted mb-6">
          チケットのご予約は公式LINEからが便利です。<br />
          LINEをお使いでない方はフォームからどうぞ。
        </p>
        <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/line-tomodachi-button.png"
            alt="LINE友だち追加でチケット予約"
            width={200}
            height={60}
            className="mx-auto hover:opacity-90 transition-opacity"
          />
        </a>
        <div className="mt-6">
          <Link href="/contact#reservation" className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
            フォームから予約する →
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: '坂上諒 チェロリサイタル',
            startDate: '2026-10-11T14:00',
            location: {
              '@type': 'Place',
              name: 'HITOMIホール',
              address: { '@type': 'PostalAddress', addressLocality: '名古屋市', addressRegion: '愛知県' },
            },
            offers: {
              '@type': 'Offer',
              price: '3000',
              priceCurrency: 'JPY',
              availability: 'https://schema.org/InStock',
            },
            performer: { '@type': 'Person', name: '坂上諒' },
          }),
        }}
      />
    </>
  );
}
