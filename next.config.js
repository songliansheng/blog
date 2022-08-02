/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  swcMinify: true,
  runtime: 'nodejs',
    serverComponents: true,
};

const withTM = require('next-transpile-modules')(['lexical-editor']); 

module.exports = withTM({ nextConfig });
// module.exports = {nextConfig , webpackConfig}
