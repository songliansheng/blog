// TODO complete this configure file
import NextAuth from 'next-auth'
import { callbacks } from './authCallbacks'
import { credentialsProvider, githubProvider } from './authProviders'
const authOptions = {
    providers: [credentialsProvider, githubProvider],
    callbacks,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
