/* CONFIG
 * authjs configuration file- four
 */
import { edgeCompatibleConfig } from './auth'
import NextAuth from 'next-auth'
import { NextResponse, NextRequest } from 'next/server'
// ALERT middleware.js|ts must export a single function, either as a default export or named middleware
// MARK middleware function can be marked `async` if using `await` inside
// MARK Middleware is the easiest way to protect a set of pages
// MARK You should not rely on middleware exclusively for authorization.
// MARK ...Always ensure that the session is verified as close to your data fetching as possible
// ALERT Only Edge runtime compatible config can be used in middware !
const { auth } = NextAuth(edgeCompatibleConfig)
export { auth as middleware }
// export { auth as middleware } from './auth'

// MARK Exports a config object is optional
export const config = {
    matcher: [
        // {
            // source: '/api/:path*',
            // FIXME regexp doesn't work here
            // regexp: '^/api/(.*)',
            // locale: false,
            // has: [],
            // missing: [],
        // },
    ],
}
