//TODO: Dive deep in this
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

const Callbacks = {
    // authorized({ request, auth }) {
    //     const { pathname } = request.nextUrl
    //     if (pathname === '/middleware-example') return !!auth
    //     return true
    // },
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
const Providers = [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
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
    providers: Providers,
    callbacks: Callbacks,
    secret: process.env.AUTH_SECRET || 'any random string',
    pages: {
        // signIn:'/login',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    },
})
