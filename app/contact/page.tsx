import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '坂上諒チェロ教室へのお問い合わせ・チケット予約フォーム。LINEでも受け付けています。',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">お問い合わせ</h1>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">

        {/* Contact form */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl mb-2">お問い合わせフォーム</h2>
          <p className="text-sm text-muted mb-8">レッスン・その他のご質問はこちらからどうぞ。</p>
          <form action="https://formspree.io/f/mojorjnv" method="POST" className="space-y-5">
            <input type="hidden" name="_subject" value="【お問い合わせ】ryosakaue.com" />
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">
                お名前 <span className="text-brown text-xs">必須</span>
              </label>
              <input type="text" name="name" required
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">
                メールアドレス <span className="text-brown text-xs">必須</span>
              </label>
              <input type="email" name="email" required
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">件名</label>
              <input type="text" name="subject"
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">
                メッセージ <span className="text-brown text-xs">必須</span>
              </label>
              <textarea name="message" required rows={5}
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full text-center">送信する</button>
          </form>
          <p className="text-xs text-muted mt-4">
            返信メールが迷惑フォルダに振り分けられる場合がございます。<br />
            あらかじめ <span className="text-warm-text">ryosakauevc@gmail.com</span> を受信できる設定の上、送信ください。
          </p>
        </div>

        {/* Concert reservation form */}
        <div id="reservation">
          <h2 className="font-serif text-2xl mb-2">演奏会チケット予約フォーム</h2>
          <p className="text-sm text-muted mb-2">フォームからご予約ください。</p>
          <p className="text-sm text-muted mb-8">
            公式LINEからもチケット予約を承っています。&nbsp;
            <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer" className="text-brown border-b border-brown hover:text-brown-dark transition-colors">
              LINEで予約する →
            </a>
          </p>
          <form action="https://formspree.io/f/mojorjnv" method="POST" className="space-y-5">
            <input type="hidden" name="_subject" value="【チケット予約】ryosakaue.com" />
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">
                お名前 <span className="text-brown text-xs">必須</span>
              </label>
              <input type="text" name="name" required
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">
                メールアドレス <span className="text-brown text-xs">必須</span>
              </label>
              <input type="email" name="email" required
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">
                公演名 <span className="text-brown text-xs">必須</span>
              </label>
              <input type="text" name="concert" required placeholder="例）坂上諒 チェロリサイタル（2026年10月11日）"
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">
                チケット枚数 <span className="text-brown text-xs">必須</span>
              </label>
              <input type="number" name="tickets" required min={1} placeholder="例）2"
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">電話番号（任意）</label>
              <input type="tel" name="phone"
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-warm-text mb-1">メッセージ（任意）</label>
              <textarea name="message" rows={3}
                className="w-full border border-warm-border px-4 py-3 text-sm focus:outline-none focus:border-brown bg-white resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full text-center">予約を申し込む</button>
          </form>
          <p className="text-xs text-muted mt-4">
            ご予約確認メールをお送りします。数日以内にご連絡がない場合はお手数ですがご連絡ください。
          </p>
          <p className="text-xs text-muted mt-2">
            返信メールが迷惑フォルダに振り分けられる場合がございます。<br />
            あらかじめ <span className="text-warm-text">ryosakauevc@gmail.com</span> を受信できる設定の上、フォームをご送信ください。
          </p>
        </div>

        {/* LINE info */}
        <div className="border-t border-warm-border pt-10 mt-4 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-sm text-warm-text font-bold mb-1">公式LINE</p>
            <p className="text-sm text-muted">演奏会情報を配信しています。チケット予約もLINEから承ります。</p>
          </div>
          <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Image
              src="/images/line-tomodachi-button.png"
              alt="LINE友だち追加"
              width={160}
              height={48}
              className="hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </section>
    </>
  );
}
