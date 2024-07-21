// CONFIG authjs configuration file- two
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { Provider } from 'next-auth/providers'
export const GithubProvider2 =GithubProvider({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
    })
const Callbacks = {
    // MARK: For authorization to work, authorized()、auth in middleware.ts are needed
    authorized({ request, auth }) {
        const { pathname } = request.nextUrl
        // if (pathname === '/middleware-example') return !!auth
        return false
    },
    // signIn({ user, account, profile, email, credentials }) {
    //     return true
    // },
    // redirect({ url, baseUrl }) {

    //     return baseUrl
    // },
    // session({ session, user, token }) {
    //     return session
    // },
    // jwt({ token, user, account, profile, isNewUser }) {
    //     return token
    // },
}
export const Providers: Provider[] = [
    // MARK Callback URL need to be configured in github OAuth app
    GithubProvider({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: 'email', type: 'email', placeholder: 'Email' },
            password: {
                label: 'password',
                type: 'password',
                placeholder: 'Password',
            },
        },
        authorize: async (credentials) => {
            const user = {
                id: '1',
                name: 'J Smith',
                email: 'jsmith@example.com',
            }

            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
            }
        },
    }),
]

export const providerMap = Providers.map((provider) => {
    if (typeof provider === 'function') {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

export const edgeCompatibleConfig = { providers: Providers }

// export const {
//     handlers,
//     signIn,
//     signOut,
//     auth,
// } = NextAuth({
//     providers: Providers,
//     callbacks: Callbacks,
//    secret: process.env.AUTH_SECRET || "any random string"
// })

export const { handlers, signIn, signOut, auth } = NextAuth({
    // ALERT Only Edge runtime compatible database(adapter) can use "database" session
    session: { strategy: 'jwt' },
    callbacks: Callbacks,
    ...edgeCompatibleConfig,
    secret: process.env.AUTH_SECRET || 'any random string',
    pages: {
        // MARK signIn is the page to jump to when calling the signin(from 'next-auth/react') function
        // signIn:'/login',
        signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    },
})
