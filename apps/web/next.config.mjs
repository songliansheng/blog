import nextMDX from '@next/mdx'
import path from 'node:path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import remarkToc from 'remark-toc'
/**
 * @type {import('next').NextConfig}
 */
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const webpackConfig = (config, options) => {
    config.module.rules.push({})
    return config
}
// CAUTION: Turbo config below will break @next/mdx
const turboConfig = {
    rules: {
        // '*.md': [

        //     options: {
        //         loader: '@mdx-js/loader',
        //         format: 'md',
        //     },
        // ],

        '*.mdx': {
            loader: '@mdx-js/loader',
            options: {
                format: 'mdx',
            },
        },
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
}
const nextConfig = {
    turbopack: {
        resolveExtensions: [
            '.mdx',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.mjs',
            '.json',
        ],
    },

    // reactStrictMode: true,

    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
    turbopack: {
        
        resolveExtensions: [
            '.mdx',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.mjs',
            '.json',
        ],
    },
    experimental: {
        mdxRs: false,

        // ppr: 'incremental',
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
if (process.env.NODE_ENV === 'development') {
    nextConfig.outputFileTracingRoot = path.join(__dirname, '../../')
}

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    // CAUTION: Plugins configured here won't be used by next-mdx-remote
    options: {
        remarkPlugins: [[remarkToc]],
        rehypePlugins: [],
    },
})

// export default nextConfig

export default withMDX(nextConfig)
