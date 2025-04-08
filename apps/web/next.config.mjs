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
    // transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
        // ppr: 'incremental',
        // turbo: turboConfig,
    },
    // MARK images.remotePatterns needs to be configured if src prop of next/image is an absolute external URL
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // webpack: webpackConfig,
}

const withMDX = nextMDX({
    // CAUTION: Plugins configured here won't be used by next-mdx-remote
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

// export default nextConfig

export default withMDX(nextConfig)
