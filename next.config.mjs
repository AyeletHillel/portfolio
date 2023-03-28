const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  target: 'serverless',
  webpack: (config) => {
    // Add your webpack configuration here
    return config
  },
}

module.exports = nextConfig
