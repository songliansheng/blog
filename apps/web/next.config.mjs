/** @type {import('next').NextConfig} */
import remarkToc from 'remark-toc'
// const withMDX = require('@next/mdx')()
import createMDX from '@next/mdx'
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
    },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        return config
    },
    transpilePackages: ['lexical-editor'],
    // poweredByHeader: false,
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    // remarkPlugins: [remarkToc],
    // rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
