import nextMDX from '@next/mdx'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    transpilePackages: [],
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
    },
    webpack: (config, options) => {
        config.module.rules.push({})
        return config
    },
}

const withMDX = nextMDX({
    // extension: /\.mdx?$/,
    /* Waring ! */
    /* Plugins configured here won't be used by next-mdx-remote
     */
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

// export default nextConfig

export default withMDX(nextConfig)
