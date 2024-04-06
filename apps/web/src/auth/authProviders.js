//TODO: Dive deep in this
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
const githubProvider = GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
})
const credentialsProvider = CredentialsProvider({
    async authorize(credentials, req) {},
})

export { githubProvider, credentialsProvider }
