import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'よくある質問',
  description: '坂上諒チェロ教室へのよくある質問。レッスン内容・料金・楽器・アクセスについて。',
};

const faqs = [
  {
    q: '全くの初心者ですが大丈夫ですか？',
    a: 'はい、大歓迎です。楽器を触ったことがない方でも、楽器の構え方・弓の使い方・楽譜の読み方から丁寧にお教えします。',
  },
  {
    q: '子供でもレッスンを受けられますか？',
    a: 'お子様（概ね6歳以上）からレッスンを受け付けています。年齢や習熟度に合わせて進め方を調整しますので、ご安心ください。',
  },
  {
    q: '大人になってから始めるのは遅いですか？',
    a: '全く遅くありません。大人の方でも十分に上達できます。社会人や主婦の方も多く通われています。',
  },
  {
    q: '楽器を持っていませんが、どうすれば良いですか？',
    a: '楽器のレンタルについてご相談ください。また、購入を検討される方には楽器選びのアドバイスも行っています。',
  },
  {
    q: 'レッスンの頻度はどのくらいが良いですか？',
    a: '週1回（月4回）が理想的ですが、お忙しい方は月2〜3回からでも始められます。まずはご自身のペースで無理なく続けることが大切です。',
  },
  {
    q: '体験レッスンはありますか？',
    a: 'はい、体験レッスン（60分・3,000円）を随時受け付けています。お気軽にお問い合わせください。',
  },
  {
    q: 'どこにありますか？',
    a: '地下鉄東山線・星ヶ丘駅から徒歩2分の場所にあります。詳しい住所はお問い合わせ後にお伝えします。',
  },
  {
    q: '駐車場はありますか？',
    a: '教室専用の駐車場はございませんが、近隣にコインパーキングがあります。公共交通機関でお越しいただくことをおすすめします。',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">FAQ</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">よくある質問</h1>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-warm-border p-6">
              <h3 className="font-sans font-bold text-warm-text mb-3 flex gap-3">
                <span className="text-brown shrink-0">Q.</span>
                {faq.q}
              </h3>
              <p className="text-sm text-muted leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted mb-6">その他のご質問はお気軽にどうぞ。</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">お問い合わせ</Link>
            <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer" className="btn-outline">
              LINEで質問する
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
