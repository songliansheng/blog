import nextMDX from '@next/mdx'

/**
 * @type {import('next').NextConfig}
 */
const webpackConfig = (config, options) => {
    config.module.rules.push({})
    return config
}
// CAUTION: Turbo config below will break @next/mdx
const turboConfig = {
    rules: {
        // Option format
        '*.md': [
            {
                loader: '@mdx-js/loader',
                options: {
                    format: 'md',
                },
            },
        ],
        // Option-less format
        '*.mdx': ['@mdx-js/loader'],
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
}
const nextConfig = {
    transpilePackages: [],
    // swcMinify:true,
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
        // turbo: turboConfig,
    },
    // webpack: webpackConfig,
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
