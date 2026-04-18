/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/studio",
        destination: "https://rekha-portfolio.sanity.studio",
        permanent: false,
      },
      {
        source: "/studio/:path*",
        destination: "https://rekha-portfolio.sanity.studio/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
