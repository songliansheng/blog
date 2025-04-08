// import { Provider } from "@auth/core/providers"
import NextAuth from "next-auth"
import GitHub from 'next-auth/providers/github'
const Callbacks = {}
const providers = [GitHub]
export const { auth, signIn, signOut } = NextAuth({
    providers: providers,
    callbacks: Callbacks,
})
export {providers, Callbacks}