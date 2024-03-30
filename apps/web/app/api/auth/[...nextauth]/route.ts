// TODO
import NextAuth from 'next-auth'
import { callbacks } from './authCallbacks'
import { credentialsProvider,githubProvider } from './authProviders'
const providers = [credentialsProvider, githubProvider]
const authOptions = { providers, callbacks }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
