/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')
const withWorkspaces = require('@saas-ui/next-workspaces')
const withPlugins = require('next-compose-plugins');

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

module.exports = withPlugins([
  // contentlayer plugin
  // [withContentlayer],

  // workspaces plugin
  [withWorkspaces, {
    basePath: '../../', // The root folder of your monorepo relative to your Next.js app.
    workspaces: ['packages'],
  }],

  

], nextConfig);
