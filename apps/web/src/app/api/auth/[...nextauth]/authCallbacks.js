//TODO: Dive deep in this
async function signIn({ user, account, profile, email, credentials }) {
    return true
}
async function redirect({ url, baseUrl }) {
    return baseUrl
}
async function session({ session, user, token }) {
    return session
}
async function jwt({ token, user, account, profile, isNewUser }) {
    return token
}
export { signIn }
