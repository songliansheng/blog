//TODO: Dive deep in to this
import NextAuth from "next-auth"
import { githubProvider, credentialsProvider } from './authProviders'
import { signIn } from './authCallbacks'
const handler = NextAuth({
    providers: [githubProvider, credentialsProvider],
    callbacks: { signIn },
})

export { handler as GET, handler as POST }