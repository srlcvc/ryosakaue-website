import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '楽器レンタル',
  description: '坂上チェロ教室では自宅練習用チェロのレンタルを行っています。分数チェロ各種あり。月額2,000円・預かり金30,000円。',
};

export default function RentalPage() {
  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Instrument Rental</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">楽器レンタル</h1>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 space-y-16">

        {/* レッスン時の無料貸出 */}
        <div className="border border-warm-border p-8">
          <h2 className="font-serif text-2xl mb-4">レッスン時の楽器貸出</h2>
          <p className="text-muted leading-relaxed">
            レッスン中は教室のチェロを無料でお貸しします。楽器をお持ちでない状態でも、まずは体験レッスンにお越しください。
          </p>
        </div>

        {/* 自宅練習用レンタル */}
        <div>
          <h2 className="font-serif text-2xl mb-2">自宅練習用レンタル</h2>
          <p className="text-sm text-muted mb-8">自宅での練習を希望される方に、チェロをお貸しします。</p>

          {/* 対応サイズ */}
          <div className="mb-10">
            <h3 className="font-sans font-bold text-brown mb-4">対応サイズ</h3>
            <div className="space-y-2">
              {['1/8', '1/4', '1/2', '3/4', '4/4'].map((size) => (
                <div key={size} className="border-b border-warm-border py-3">
                  <span className="font-bold text-warm-text">{size}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">※ 台数に限りがあります。在庫状況はお問い合わせください。</p>
          </div>

          {/* 料金 */}
          <div className="mb-10">
            <h3 className="font-sans font-bold text-brown mb-4">料金</h3>
            <table className="w-full text-sm max-w-sm">
              <tbody className="divide-y divide-warm-border">
                <tr>
                  <td className="py-4 text-warm-text">月額レンタル料</td>
                  <td className="py-4 text-right font-bold text-brown">2,000円</td>
                </tr>
                <tr>
                  <td className="py-4 text-warm-text">預かり金（初回のみ）</td>
                  <td className="py-4 text-right font-bold text-brown">30,000円</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 返却について */}
          <div>
            <h3 className="font-sans font-bold text-brown mb-4">返却について</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-brown">•</span>
                <span>返却時に弦を新しいものに張り替えた費用を預かり金から差し引いてご返金します。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brown">•</span>
                <span>返却の際は弓の毛替えをお願いしています（費用はご負担いただきます）。</span>
              </li>
            </ul>
          </div>
        </div>

        {/* お問い合わせ */}
        <div className="bg-olive/10 border border-olive/30 p-8 text-center">
          <h2 className="font-serif text-2xl mb-3">ご相談・お申し込み</h2>
          <p className="text-sm text-muted mb-6">在庫状況のご確認やご不明な点はお気軽にお問い合わせください。</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">お問い合わせフォーム</Link>
            <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer" className="btn-outline">
              LINEで相談する
            </a>
          </div>
        </div>

      </section>
    </>
  );
}
