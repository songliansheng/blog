import NextAuth, { NextAuthResult } from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";

// const prisma = new PrismaClient();
const nextAuth = NextAuth(authConfig);
const signIn: NextAuthResult["signIn"] = nextAuth.signIn;
const auth: NextAuthResult["auth"] = nextAuth.auth;
export  { auth, signIn};
export const { handlers, signOut } = NextAuth({
  
  session: { strategy: "jwt" },
  ...authConfig,
});
