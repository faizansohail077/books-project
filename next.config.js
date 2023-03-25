/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://https://simple-books-api.glitch.me/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
