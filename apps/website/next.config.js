/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')
const withWorkspaces = require('@saas-ui/next-workspaces')

const nextConfig = {
  optimizeFonts: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: false,
  },
}

const config = withContentlayer(nextConfig)

module.exports = withWorkspaces({
  basePath: '../../', // The root folder of your monorepo relative to your Next.js app.
  workspaces: ['packages'],
})(nextConfig)
