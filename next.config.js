/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
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
