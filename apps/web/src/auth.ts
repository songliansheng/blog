//TODO: Dive deep in this
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

const Callbacks = {
    authorized({ request, auth }) {
        const { pathname } = request.nextUrl
        if (pathname === '/middleware-example') return !!auth
        return true
    },
    signIn({ user, account, profile, email, credentials }) {
        return true
    },
    redirect({ url, baseUrl }) {
        return baseUrl
    },
    session({ session, user, token }) {
        return session
    },
    jwt({ token, user, account, profile, isNewUser }) {
        return token
    },
}
const Providers = [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
        name: 'Credentials',
        async authorize(credentials, req) {
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
const handler = NextAuth({
    providers: Providers,
    callbacks: Callbacks,
})

const handler2 = NextAuth

export const {
    handlers: { GET, POST },
    auth,
} = handler
