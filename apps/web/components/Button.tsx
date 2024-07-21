'use client'
import { signOut } from '@/auth'
import { signIn } from 'next-auth/react'
// ALERT If a function in a file is used by a client compponent ,then all other functions in the file will be treated as client components
// ALERT So if a button has been used by a client component ,
export function Button({
    className,
    buttonName,
    type,
    onClick,
}: {
    className?: string
    buttonName: string
    type?: string
    onClick?: () => void
}): JSX.Element {
    return (
        <button className={className} onClick={onClick}>
            {buttonName}
        </button>
    )
}
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

