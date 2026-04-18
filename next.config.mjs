/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  async rewrites() {
    return [
      // Serve studio index.html for /studio and /studio/
      {
        source: "/studio",
        destination: "/studio/index.html",
      },
      {
        source: "/studio/",
        destination: "/studio/index.html",
      },
      // Proxy /static/* to /studio/static/* (studio asset paths)
      {
        source: "/static/:path*",
        destination: "/studio/static/:path*",
      },
    ];
  },
};

export default nextConfig;
