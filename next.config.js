/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'habibi.bartolomej.dev',
        port: '',
        pathname: '/api/assets/**',
      },
    ],
  },
}

module.exports = nextConfig 