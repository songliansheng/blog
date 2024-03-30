import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
const credentialsProvider = CredentialsProvider({
    async authorize(credentials, req) {
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

        if (user) {
            return user
        } else {
            return null
        }
    },
})
const githubProvider = GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
})

export { credentialsProvider, githubProvider }
