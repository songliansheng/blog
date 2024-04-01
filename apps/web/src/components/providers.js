'use client'
import { SessionProvider } from 'next-auth/react'
import { getSession } from "next-auth/react"
 const session = await getSession()

export function Providers({ children }) {
   
    return (
        <SessionProvider session={session} basePath="/app/api/auth">
            {/* <LexicalComposer initialConfig={initialConfig}> */}
            {children}
            {/* </LexicalComposer> */}
        </SessionProvider>
    )
}