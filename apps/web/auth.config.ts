// import { Provider } from "@auth/core/providers"
import NextAuth from "next-auth"

import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
const Callbacks = {}
const providers = [GitHub]
export default { providers: [GitHub] } satisfies NextAuthConfig;

export {providers, Callbacks}