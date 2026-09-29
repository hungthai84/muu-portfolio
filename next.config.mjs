/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themezaa.com',
      },
    ],
  },
};

export default nextConfig;
