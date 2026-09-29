/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/%E8%A4%87%E8%A3%BD-%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B',
        destination: '/contact',
        permanent: true,
      },
      // Wix旧URL → 現行URL
      {
        source: '/%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%88',
        destination: '/concert',
        permanent: true,
      },
      {
        source: '/%E3%83%AC%E3%83%83%E3%82%B9%E3%83%B3',
        destination: '/lesson',
        permanent: true,
      },
      {
        source: '/post/%E3%83%81%E3%82%A7%E3%83%AD%E3%82%92%E5%BC%BE%E3%81%8F%E3%81%AE%E3%81%AB%E5%BF%85%E8%A6%81%E3%81%AA%E9%81%93%E5%85%B7',
        destination: '/post/cello-beginners-must-buy',
        permanent: true,
      },
      {
        source: '/post/%E3%83%81%E3%82%A7%E3%83%AD%E3%81%AE%E5%BC%A6%E3%81%AE%E7%A8%AE%E9%A1%9E',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/%E9%81%8E%E5%8E%BB%E3%81%AE%E6%BC%94%E5%A5%8F%E4%BC%9A%E6%83%85%E5%A0%B1',
        destination: '/concert',
        permanent: true,
      },
      {
        source: '/%E9%8C%B2%E9%9F%B3',
        destination: '/music',
        permanent: true,
      },
      {
        source: '/%E3%83%AA%E3%83%B3%E3%82%AF',
        destination: '/',
        permanent: true,
      },
      {
        source: '/%E6%95%99%E5%AE%A4%E6%83%85%E5%A0%B1',
        destination: '/lesson',
        permanent: true,
      },
      // 講師プロフィール → /profile
      {
        source: '/%E8%AC%9B%E5%B8%AB%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB',
        destination: '/profile',
        permanent: true,
      },
      // チェロのエンドピンで床がきずつきませんか → /post/cello-endpin
      {
        source: '/%E3%83%81%E3%82%A7%E3%83%AD%E3%81%AE%E3%82%A8%E3%83%B3%E3%83%89%E3%83%94%E3%83%B3%E3%81%A7%E5%BA%8A%E3%81%8C%E3%81%8D%E3%81%9A%E3%81%A4%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B',
        destination: '/post/cello-endpin',
        permanent: true,
      },
      // リリオ ミニ・コンサート → /post/lirio-mini-concert-2021
      {
        source: '/post/%E3%83%AA%E3%83%AA%E3%82%AA-%E3%83%9F%E3%83%8B%E3%83%BB%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%88',
        destination: '/post/lirio-mini-concert-2021',
        permanent: true,
      },
      // 動画公開系の旧記事 → /music
      {
        source: '/post/%E9%AD%94%E5%A5%B3%E3%81%AE%E5%AE%85%E6%80%A5%E4%BE%BF%E3%82%88%E3%82%8A%E6%B5%B7%E3%81%AE%E8%A6%8B%E3%81%88%E3%82%8B%E8%A1%97%E3%82%92%E3%83%81%E3%82%A7%E3%83%AD%E3%81%A0%E3%81%91%E3%81%A7%E6%BC%94%E5%A5%8F%E3%81%97%E3%81%9F%E5%8B%95%E7%94%BB%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F',
        destination: '/music',
        permanent: true,
      },
      {
        source: '/post/yoasobi%E3%81%AE%E5%84%AA%E3%81%97%E3%81%84%E5%BD%97%E6%98%9F%E3%82%92%E3%83%81%E3%82%A7%E3%83%AD%E3%81%A0%E3%81%91%E3%81%A7%E6%BC%94%E5%A5%8F%E3%81%97%E3%81%9F%E5%8B%95%E7%94%BB%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F',
        destination: '/music',
        permanent: true,
      },
      // その他の旧記事 → /blog
      {
        source: '/post/%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E9%9F%B3%E6%A5%BD%E8%AC%9B%E5%BA%A7-1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/%E3%83%A9%E3%82%A4%E3%83%96%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/%E7%B5%B5%E6%89%8B%E7%B4%99de%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF-%E5%A4%8F%E3%81%AE%E9%A6%99%E3%82%8A%E3%81%AB%E9%AD%85%E3%81%9B%E3%82%89%E3%82%8C%E3%81%A6',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/files/:path*.pdf',
        headers: [
          { key: 'Content-Disposition', value: 'inline' },
          { key: 'Content-Type', value: 'application/pdf' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
