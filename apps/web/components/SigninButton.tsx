'use client'
import { signIn } from 'next-auth/react'

export function SignIn() {
    return (
        // MARK The callbackUrl specifies to which URL the user will be redirected after signing in
        <button
            className=""
            onClick={() =>
                // signIn(undefined, { callbackUrl: 'http://localhost:3000/foo' })
                signIn()
            }
        >
            Sign in
        </button>
    )
}
