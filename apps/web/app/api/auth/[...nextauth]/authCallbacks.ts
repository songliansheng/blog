// TODO authorized isn't a callback in nextauth.js
const callbacks = {
    async signIn({ user, account, profile, email, credentials }) {
        return true
    },
}
export {callbacks}