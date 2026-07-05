import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-warm-text text-cream mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-serif text-xl tracking-widest mb-2">坂上 諒</p>
        </div>

        <div>
          <p className="text-sm font-bold mb-3 text-cream/80 tracking-wider">MENU</p>
          <ul className="space-y-2 text-sm text-cream/70">
            {[
              ['/', 'ホーム'],
              ['/lesson', 'チェロ教室'],
              ['/profile', 'プロフィール'],
              ['/concert', 'コンサート'],
              ['/blog', 'ニュース'],
              ['/contact', 'お問い合わせ'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-cream transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold mb-3 text-cream/80 tracking-wider">CONTACT</p>
          <p className="text-sm text-cream/70 mb-4">ryosakauevc@gmail.com</p>
          <div className="flex gap-4">
            <a href="https://lin.ee/5uD2RP5H" target="_blank" rel="noopener noreferrer"
               className="text-sm text-cream/70 hover:text-cream transition-colors">LINE</a>
            <a href="https://www.youtube.com/@ryosakauecello7257" target="_blank" rel="noopener noreferrer"
               className="text-sm text-cream/70 hover:text-cream transition-colors">YouTube</a>
            <a href="https://www.instagram.com/ryosakau/" target="_blank" rel="noopener noreferrer"
               className="text-sm text-cream/70 hover:text-cream transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center py-4 text-xs text-cream/40">
        © {new Date().getFullYear()} 坂上諒 All rights reserved.
      </div>
    </footer>
  );
}
