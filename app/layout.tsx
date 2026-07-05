import type { Metadata } from 'next';
import { Cormorant_Garamond, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
});

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto',
});

export const metadata: Metadata = {
  title: {
    default: '名古屋のチェロ教室 | 坂上諒チェロ教室（星ヶ丘）',
    template: '%s | 坂上諒チェロ教室',
  },
  description:
    '名古屋市・星ヶ丘駅徒歩2分のチェロ教室。坂上諒（チェリスト）によるチェロレッスン。初心者から経験者まで丁寧に指導。愛知県のチェロ教室・チェロ先生をお探しの方はお気軽にどうぞ。',
  keywords: ['名古屋', 'チェロ教室', 'チェロレッスン', '愛知県', 'チェロ先生', '星ヶ丘', '坂上諒', 'チェリスト'],
  openGraph: {
    siteName: '坂上諒チェロ教室',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${noto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicTeacher',
              name: '坂上諒チェロ教室',
              description: '名古屋市星ヶ丘のチェロ教室。初心者から丁寧に指導。',
              address: {
                '@type': 'PostalAddress',
                addressLocality: '名古屋市千種区',
                addressRegion: '愛知県',
                addressCountry: 'JP',
              },
              geo: {
                '@type': 'GeoCoordinates',
                description: '星ヶ丘駅徒歩2分',
              },
              url: 'https://www.ryosakaue.com',
              email: 'ryosakauevc@gmail.com',
              sameAs: [
                'https://lin.ee/5uD2RP5H',
                'https://www.youtube.com/@ryosakauecello7257',
                'https://www.instagram.com/ryosakau/',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
