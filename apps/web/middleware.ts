import { providers } from './auth.config'
import NextAuth from 'next-auth'
import { Callbacks } from './auth.config'
import { auth } from './auth'
import { NextResponse, NextRequest } from 'next/server'

// export { auth as middleware } from 'auth.config'
// const { auth } = NextAuth(edgeCompatibleConfig)
// export { auth as middleware }
// export default auth((req) => {
//     // if (!req.auth && req.nextUrl.pathname !== '/login') {

//     //     const newUrl = new URL('/login', req.nextUrl.origin)
//     //     return Response.redirect(newUrl)
//     // }
//     console.log('This is middleware ' + JSON.stringify(req.auth))
// })
// const { auth: middleware } = NextAuth({
//     callbacks: Callbacks,
//     ...providers,
// })
export default auth
//     ((request) => {
//     console.log('This is middleware ' + JSON.stringify(request.auth))
//  })
//  export default middleware((request) => {
//    console.log('This is middleware ' + JSON.stringify(request.auth))
// })
/* CONFIG
 * Middleware is the easiest way to protect a set of pages
 * You should not rely on middleware exclusively for authorization.
 * middleware function can be marked `async` if using `await` inside
 * Always ensure that the session is verified as close to your data fetching as possible
 */
/* ALERT
 * middleware.js|ts must export a single function, either as a default export or named middleware
 * Only Edge runtime compatible config can be used in middware !
 *
 */
// MARK Exports a config object is optional
/* export const config = {
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
} */

// Or like this if you need to do something here.
// export default auth((req) => {
//   console.log(req.auth) //  { session: { user: { ... } } }
// })

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
