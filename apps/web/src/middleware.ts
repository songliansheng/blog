//TODO: Dive deep in this

//NOTE: middleware.js|ts must export a single function, either as a default export or named middleware
export { auth as middleware } from './auth'
import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function Middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: '/about/:path*',
}
