// CONFIG authjs configuration file- four

// ALERT middleware.js|ts must export a single function, either as a default export or named middleware
export { auth as middleware } from './auth'
import { NextResponse, NextRequest } from 'next/server'

// MARK This function can be marked `async` if using `await` inside
export function Middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/notes', request.url))
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
