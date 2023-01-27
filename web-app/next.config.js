/** @type {import('next').NextConfig} */
//const withTM = require('next-transpile-modules')(['lexical' ])
const nextConfig = {
    experimental: {
        appDir: true,
    },
    transpilePackages: ['lexical'],
}

module.exports = nextConfig
// module.exports = withTM({
//     experimental: {
//         appDir: true,
//     },
// })
