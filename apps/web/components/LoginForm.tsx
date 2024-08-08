import { Field, Formik, useFormik, Form } from 'formik'
import { Button } from './Button'
import {Button as ClientSideButton} from '@/components/Button/ButtonWrapper'
import { Input } from './Input'
import { signIn, providerMap, Providers, GithubProvider2 } from '@/auth'
import { handleSignIn } from '@/app/actions'
import { handleSignIn3 } from 'app/actions'
import { signInSchema } from 'lib/zod'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import { signIn as signInCallback } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
import { z } from 'zod'

export function SignInButton() {
    return (
        
        /* MARK The callbackUrl specifies to which URL the user will be redirected after signing in */
        <ClientSideButton
            className=""
            onClick={() =>
                // signIn(undefined, { callbackUrl: 'http://localhost:3000/foo' })
                signInCallback()
            }
        >
            SignIn with Github
        </ClientSideButton>
    )
}
export async function LoginForm() {
    return (
        <>
            <form action={handleSignIn}>
                <div>
                    <Input
                        label="email"
                        placeholder="Email"
                        type="email"
                        name="email"
                    />
                </div>

                <div>
                    <Input
                        label="password"
                        placeholder="Password"
                        type="password"
                        name="password"
                    />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </>
    )
}

export async function SignInPage1() {
    return (
        <div className="flex flex-col gap-2">
            {Object.values(providerMap).map((provider) => (
                <form
                    action={async () => {
                        'use server'
                        try {
                            await signIn(provider.id)
                        } catch (error) {
                            // Signin can fail for a number of reasons, such as the user
                            // not existing, or the user not having the correct role.
                            // In some cases, you may want to redirect to a custom error
                            if (error instanceof AuthError) {
                                return redirect('/notes/english_pronunciation')
                            }

                            // Otherwise if a redirects happens NextJS can handle it
                            // so you can just re-thrown the error and let NextJS handle it.
                            // Docs:
                            // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                            throw error
                            //  return redirect('/notes/english_pronunciation')
                        }
                    }}
                >
                    <button type="submit">
                        <span>Sign in with {provider.name}</span>
                    </button>
                </form>
            ))}
        </div>
    )
}
export async function SignInPage4() {
    // console.log(providerMap)
    console.log(GithubProvider2.id, GithubProvider2.name)
    return (
        <div className="flex flex-col gap-2">
            {Providers.map((provider) => (
                <form
                    action={async () => {
                        'use server'
                        try {
                            await signIn(
                                typeof provider === 'function'
                                    ? provider().id
                                    : provider.id
                            )
                        } catch (error) {
                            // Signin can fail for a number of reasons, such as the user
                            // not existing, or the user not having the correct role.
                            // In some cases, you may want to redirect to a custom error
                            if (error instanceof AuthError) {
                                return redirect('/notes/english_pronunciation')
                            }

                            // Otherwise if a redirects happens NextJS can handle it
                            // so you can just re-thrown the error and let NextJS handle it.
                            // Docs:
                            // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                            throw error
                            //  return redirect('/notes/english_pronunciation')
                        }
                    }}
                >
                    <button type="submit">
                        <span>
                            Sign in with
                            {typeof provider === 'function'
                                ? provider().name
                                : provider.name}
                        </span>
                    </button>
                </form>
            ))}
        </div>
    )
}

export default async function SignInPage() {
    console.log(GithubProvider2.id, GithubProvider2.name)
    return (
        <div className="flex flex-col gap-2">
            <form
                action={async () => {
                    'use server'
                    try {
                        await signIn(GithubProvider2.id)
                    } catch (error) {
                        // Signin can fail for a number of reasons, such as the user
                        // not existing, or the user not having the correct role.
                        // In some cases, you may want to redirect to a custom error
                        if (error instanceof AuthError) {
                            return redirect('/notes/english_pronunciation')
                        }

                        // Otherwise if a redirects happens NextJS can handle it
                        // so you can just re-thrown the error and let NextJS handle it.
                        // Docs:
                        // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                        throw error
                        //  return redirect('/notes/english_pronunciation')
                    }
                }}
            >
                <button type="submit">
                    <span>
                        Sign in with
                        {GithubProvider2.name}
                    </span>
                </button>
            </form>
        </div>
    )
}
