import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: '坂上諒 コンサート・演奏会情報',
  description: 'チェリスト坂上諒のコンサート・演奏会情報。名古屋・愛知県を中心にチェロリサイタル・室内楽を開催。チケット予約はLINEまたはフォームから。',
};

const upcoming = [
  {
    isoDate: '2026-10-11',
    date: '2026年10月11日（日）',
    title: '坂上諒 チェロリサイタル',
    venue: 'HITOMIホール（名古屋）',
    time: '開演 14:15（開場 13:45）',
    ticket: '全自由席 3,000円',
    program: 'バッハ：無伴奏チェロ組曲、他',
    pianist: 'ピアノ：佐々木杏子',
    pdf: '/files/blog/recital-2026-10.pdf',
  },
  {
    isoDate: '2027-02-13',
    date: '2027年2月13日（土）',
    title: '坂上諒 チェロリサイタル',
    venue: 'スタジオ・フィオリーレ',
    time: '開演 14:15（開場 13:45）',
    ticket: '全自由席 3,000円',
    program: 'ブルッフ：コル・ニドライ、ヴィラ＝ロボス：黒鳥の歌、ピアソラ：ル・グラン・タンゴ、ベートーヴェン：魔笛の主題による7つの変奏曲、ベートーヴェン：チェロソナタ第3番 イ長調、他',
    pianist: 'ピアノ：佐々木杏子',
    pdf: '/files/blog/recital-2027-02.pdf',
  },
  {
    isoDate: '2027-10-10',
    date: '2027年10月10日（日）',
    title: '坂上諒・水野貴文 デュオリサイタル',
    venue: 'HITOMIホール（名古屋）',
    time: '開演 14:00（開場 13:30）',
    ticket: '全自由席 3,000円',
    program: '決まり次第お知らせします',
    pianist: 'ピアノ：水野貴文',
    pdf: '',
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
        {upcoming.map((c) => {
          const isPast = new Date(c.isoDate) < new Date();
          return (
            <div key={c.isoDate} className="border border-warm-border p-8 mb-8">
              <p className="text-sm text-brown font-bold mb-2">{c.date}</p>
              <h3 className="font-serif text-2xl mb-4">{c.title}</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted mb-6">
                <div><dt className="inline font-bold text-warm-text">会場：</dt><dd className="inline">{c.venue}</dd></div>
                <div><dt className="inline font-bold text-warm-text">開演：</dt><dd className="inline">{c.time}</dd></div>
                <div><dt className="inline font-bold text-warm-text">料金：</dt><dd className="inline">{c.ticket}</dd></div>
                <div><dt className="inline font-bold text-warm-text">プログラム：</dt><dd className="inline">{c.program}</dd></div>
                {c.pianist && <div><dt className="inline font-bold text-warm-text">共演：</dt><dd className="inline">{c.pianist}</dd></div>}
              </dl>
              {c.pdf && (
                <div className="mb-4">
                  <a href={c.pdf} target="_blank" rel="noopener noreferrer" className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
                    チラシをPDFで見る →
                  </a>
                </div>
              )}
              {!isPast && (
                <div>
                  <Link href="/contact#reservation" className="btn-primary inline-block mb-4">
                    チケット予約フォームへ
                  </Link>
                  <p className="text-sm text-muted">
                    公式LINEからもご予約いただけます。&nbsp;
                    <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer" className="text-brown border-b border-brown hover:text-brown-dark transition-colors">
                      LINEで予約する →
                    </a>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Reservation CTA */}
      <section className="bg-olive/10 border-t border-b border-olive/20 py-16 text-center">
        <h2 className="section-title mb-4">チケット予約・お問い合わせ</h2>
        <p className="text-muted mb-8">
          チケットのご予約は予約フォームからどうぞ。<br />
          公式LINEからもご予約いただけます。
        </p>
        <Link href="/contact#reservation" className="btn-primary inline-block mb-6">
          チケット予約フォームへ
        </Link>
        <div>
          <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer" className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
            LINEで予約する →
          </a>
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
            description: '2026年10月11日（日）、HITOMIホールにてチェロリサイタルを開催します。ピアノ：佐々木杏子。バッハ：無伴奏チェロ組曲ほか。',
            startDate: '2026-10-11T14:15:00+09:00',
            endDate: '2026-10-11T16:45:00+09:00',
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            image: 'https://www.ryosakaue.com/images/blog/名古屋-愛知-チェロリサイタル-HITOMIホール-2026-10.jpg',
            url: 'https://www.ryosakaue.com/concert',
            location: {
              '@type': 'Place',
              name: 'HITOMIホール',
              address: { '@type': 'PostalAddress', addressLocality: '名古屋市', addressRegion: '愛知県', addressCountry: 'JP' },
            },
            offers: {
              '@type': 'Offer',
              price: '3000',
              priceCurrency: 'JPY',
              availability: 'https://schema.org/InStock',
              url: 'https://www.ryosakaue.com/contact',
              validFrom: '2026-05-04',
            },
            performer: { '@type': 'Person', name: '坂上諒' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: '坂上諒 チェロリサイタル',
            description: '2027年2月13日（土）、スタジオ・フィオリーレにてチェロリサイタルを開催します。ピアノ：佐々木杏子。ブルッフ：コル・ニドライ、ピアソラ：ル・グラン・タンゴ、ベートーヴェン：チェロソナタ第3番ほか。',
            startDate: '2027-02-13T14:15:00+09:00',
            endDate: '2027-02-13T16:45:00+09:00',
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            image: 'https://www.ryosakaue.com/images/blog/名古屋-愛知-チェロリサイタル-フィオリーレ-2027-02.jpg',
            url: 'https://www.ryosakaue.com/concert',
            location: {
              '@type': 'Place',
              name: 'スタジオ・フィオリーレ',
              address: { '@type': 'PostalAddress', streetAddress: '鳥居西通1-51 アンジュパティオ中村公園801号', addressLocality: '名古屋市中村区', addressRegion: '愛知県', postalCode: '453-0054', addressCountry: 'JP' },
            },
            offers: {
              '@type': 'Offer',
              price: '3000',
              priceCurrency: 'JPY',
              availability: 'https://schema.org/InStock',
              url: 'https://www.ryosakaue.com/contact',
            },
            performer: { '@type': 'Person', name: '坂上諒' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: '坂上諒・水野貴文 デュオリサイタル',
            description: '2027年10月10日（日）、HITOMIホールにて坂上諒（チェロ）・水野貴文（ピアノ）によるデュオリサイタルを開催します。',
            startDate: '2027-10-10T14:00:00+09:00',
            endDate: '2027-10-10T16:30:00+09:00',
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            url: 'https://www.ryosakaue.com/concert',
            location: {
              '@type': 'Place',
              name: 'HITOMIホール',
              address: { '@type': 'PostalAddress', streetAddress: '葵三丁目21番19号 メニコンANNEX 5F', addressLocality: '名古屋市中区', addressRegion: '愛知県', addressCountry: 'JP' },
            },
            offers: {
              '@type': 'Offer',
              price: '3000',
              priceCurrency: 'JPY',
              availability: 'https://schema.org/InStock',
              url: 'https://www.ryosakaue.com/contact',
            },
            performer: [
              { '@type': 'Person', name: '坂上諒' },
              { '@type': 'Person', name: '水野貴文' },
            ],
          }),
        }}
      />
    </>
  );
}
