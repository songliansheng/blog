import { Field, Formik, useFormik, Form } from 'formik'
import { Input } from "@repo/design-system/ui/Input";
import { signIn, providersMetadata as providers } from '@/auth.config'
import { handleSignIn } from '@/app/actions'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import Button from "@repo/design-system/ui/Button";
interface Provider {
    id: string
    name: string
}
const SignInButton = ({ provider }:{provider:{id:string,name:string}|Function}) => {
    return (
        <div>
            <form
                action={async () => {
                    'use server'
                    try {
                        await signIn(
                            typeof provider === 'function'
                                ? provider().id
                                : provider.id,
                            { redirectTo: '/notes/english_pronunciation' }
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
                <Button type="submit">
                    <span>
                       
                        {typeof provider === 'function'
                            ? provider().name
                            : provider.name}
                    </span>
                </Button>
                {/* <button type="submit">
                    <span>
                        Sign in with
                        {typeof provider === 'function'
                            ? provider().name
                            : provider.name}
                    </span>
                </button> */}
            </form>
        </div>
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

export default async function SignInPage4() {
    // console.log(providerMap)
    console.log('Logs from LoginForm.tsx: Provider name->')
    // console.log(GithubProvider2.id, GithubProvider2.name)
    return (
        <div className="flex flex-col gap-2">
            <span>Sign in with: </span>
            {providers.map((provider) => (
                <SignInButton provider={provider} />
            ))}
        </div>
    )
}
