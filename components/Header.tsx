'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/',         label: 'ホーム' },
  { href: '/lesson',   label: 'チェロ教室' },
  { href: '/profile',  label: 'プロフィール' },
  { href: '/music',    label: 'Music' },
  { href: '/concert',  label: 'コンサート' },
  { href: '/blog',     label: 'ニュース' },
  { href: '/faq',      label: 'よくある質問' },
  { href: '/contact',  label: 'お問い合わせ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-warm-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="hover:text-brown transition-colors flex flex-col leading-tight">
          <span className="font-serif text-xl text-warm-text tracking-widest">坂上 諒</span>
          <span className="text-xs font-sans tracking-widest text-muted">SAKAUE CELLO SCHOOL</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm text-warm-text hover:text-brown transition-colors font-sans">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="メニュー">
          <span className={`block w-6 h-0.5 bg-warm-text transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-warm-text transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-warm-text transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-warm-border px-4 pb-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-warm-text hover:text-brown font-sans border-b border-warm-border last:border-0">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
