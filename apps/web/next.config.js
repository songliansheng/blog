/** @type {import('next').NextConfig} */
//const withTM = require('next-transpile-modules')(['lexical' ])
const nextConfig = {
    experimental: {
        appDir: true,
    },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        return config
    },
    transpilePackages: ['lexical-editor'],
    // poweredByHeader: false,
}

module.exports = nextConfig
// module.exports = withTM({
//     experimental: {
//         appDir: true,
//     },
// })
