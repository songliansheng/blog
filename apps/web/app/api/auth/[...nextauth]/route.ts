import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { redirect } from 'next/navigation'
import { getClient } from '@/app/ApolloClient-RSC'
import { gql } from '@apollo/client'

const login = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            
        }
    }
`
export const authOptions: AuthOptions = {
    pages: { signIn: '/login' },
    session: {
        strategy: 'jwt',
    },
    // Configure one or more authentication providers
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID!,
        //     clientSecret: process.env.GITHUB_SECRET!,
        // }),
        CredentialsProvider({
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                // console.log("authro begin", req)
                //  console.log('credentials logging', JSON.stringify(credentials))
                console.log('credentials logging', credentials)
                const user = {
                    id: '1',
                    username: 'J Smith',
                    email: 'jsmith@example.com',
                }
                // if (user) {
                if (credentials?.password == 'songliansheng') {
                    // Any object returned will be saved in `user` property of the JWT
                    // console.log('Login success', user)
                    return user
                    // redirect('/about')
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    callbacks: {
        // async jwt({ token, user }) {
        //     if (user) {
        //         token.id = user.id
        //     }
        //     return token
        // },
        // async session({ session, token }) {
        //     if (token) {
        //         session.id = token.id
        //     }
        //     return session
        // },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
