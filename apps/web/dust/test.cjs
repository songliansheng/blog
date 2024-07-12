const { pathToRegexp, match, parse, compile } = require('path-to-regexp')
const regexp = pathToRegexp('/api/:path')
console.log(regexp)