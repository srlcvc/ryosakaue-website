import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '名古屋・星ヶ丘のチェロ教室',
  description:
    '名古屋市・星ヶ丘駅徒歩2分のチェロ教室。坂上諒（チェリスト）が初心者から経験者まで丁寧に個人レッスン。愛知県でチェロを習いたい方はお気軽にご相談ください。',
};

const features = [
  { title: '初心者歓迎', desc: '楽器を触ったことがない方も歓迎しています。お一人おひとりのペースに合わせてレッスンします。' },
  { title: '全年齢対応', desc: 'お子様から大人まで幅広く対応。それぞれのペースで無理なく上達できます。' },
  { title: '駅近・通いやすい', desc: '地下鉄東山線・星ヶ丘駅から徒歩2分。名古屋市内どこからでもアクセス便利。' },
  { title: 'プロ奏者が指導', desc: '現役チェリストが演奏活動で培った技術と表現力を丁寧に伝えます。' },
];

const beginnerFees = [
  { label: '30分', price: '3,500円' },
  { label: '45分', price: '5,300円' },
  { label: '60分', price: '7,000円' },
];

const advancedFees = [
  { label: '30分', price: '4,500円' },
  { label: '45分', price: '6,000円' },
  { label: '60分', price: '8,000円' },
];

export default function LessonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Cello Lesson</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">チェロ教室</h1>
        <p className="mt-4 text-cream/80">名古屋・星ヶ丘｜初心者から丁寧に</p>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="section-title text-center mb-12">教室の特徴</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="border border-warm-border p-6">
              <h3 className="font-sans font-bold text-brown mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-sub text-center">About Lesson</p>
          <h2 className="section-title text-center mb-8">レッスンについて</h2>
          <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-4">
            <p>
              チェロは弦楽器の中でも特に豊かな音域と表現力を持つ楽器です。「大人になってから始めるのは遅い？」というご心配は無用です。始めるのに遅すぎることはありません。
            </p>
            <p>
              レッスンでは基礎的な構え方・弓の使い方から、スケール練習、曲の演奏まで段階的に学びます。趣味で楽しみたい方も、将来アンサンブルや発表会に出たい方も、それぞれの目標に合わせてカリキュラムを組みます。
            </p>
            <p>
              お持ちの楽器をお持ちください。楽器をお持ちでない方は<Link href="/rental" className="text-brown underline underline-offset-2">楽器レンタル</Link>もご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="section-title text-center mb-4">料金</h2>
        <p className="text-center text-sm text-muted mb-12">入会金：無料</p>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-sans font-bold text-brown mb-1 text-center">初心者コース</h3>
            <p className="text-xs text-muted text-center mb-4">鈴木鎮一チェロ指導曲集3巻程度まで</p>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-warm-border">
                {beginnerFees.map((item) => (
                  <tr key={item.label}>
                    <td className="py-3 text-warm-text">{item.label}</td>
                    <td className="py-3 text-right font-bold text-brown">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-sans font-bold text-brown mb-1 text-center">中・上級者コース</h3>
            <p className="text-xs text-muted text-center mb-4">&nbsp;</p>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-warm-border">
                {advancedFees.map((item) => (
                  <tr key={item.label}>
                    <td className="py-3 text-warm-text">{item.label}</td>
                    <td className="py-3 text-right font-bold text-brown">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-6 text-xs text-muted space-y-1">
          <p>※ 未就学児のお子様は30分レッスンのみとなっております。</p>
          <p>※ 楽譜や発表会などの費用は別料金となっております。</p>
          <p>※ キャンセルは前日までにご連絡いただければ無料です。当日のキャンセルは1,000円のキャンセル料がかかります。</p>
        </div>
      </section>

      {/* Access */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-sub">Access</p>
          <h2 className="section-title mb-6">アクセス</h2>
          <p className="text-lg font-bold text-brown">地下鉄東山線・星ヶ丘駅から徒歩2分</p>
          <p className="text-sm text-muted mt-4">※ 詳しい住所はお問い合わせ後にお伝えします。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-olive/10 py-16 text-center">
        <h2 className="section-title mb-4">まずは体験レッスンへ</h2>
        <p className="text-muted mb-8">体験レッスン（30分・無料）はいつでも受け付けています。お気軽にお問い合わせください。</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary">お問い合わせ・申込み</Link>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MusicLesson',
            name: '坂上諒チェロ教室',
            description: '名古屋市・星ヶ丘駅徒歩2分のチェロ個人レッスン',
            provider: {
              '@type': 'Person',
              name: '坂上諒',
              jobTitle: 'チェリスト',
            },
            location: {
              '@type': 'Place',
              name: '星ヶ丘（名古屋市千種区）',
              address: {
                '@type': 'PostalAddress',
                addressLocality: '名古屋市千種区',
                addressRegion: '愛知県',
                addressCountry: 'JP',
              },
            },
          }),
        }}
      />
    </>
  );
}
