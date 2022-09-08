/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  images: {
    domains: ['i.ytimg.com', 'yt3.ggpht.com'],
  },
}

module.exports = nextConfig
