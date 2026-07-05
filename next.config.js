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
