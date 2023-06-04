'use client'
import './globals.css'
import { Providers } from './providers'
import { SessionProvider } from 'next-auth/react'
import Header from './Header'
import { useSession, signIn, signOut } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import { ApolloWrapper } from './ApolloClient-SSR'

import Link from 'next/link'

const loadContent = async () => {
    const value =
        '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'

    return value
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const session = await getSession()
    // console.log('Login beginnnnn', session)
    // console.log('Login beginnnnn', JSON.stringify(session))
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="">
                <ApolloWrapper>
                    {/* <SessionProvider
                        session={session}
                        basePath="/app/api/auth"
                    > */}
                    {/* <Providers> */}
                    <div className="root-container">
                        <div
                            id="headerwrapper"
                            className="relative px-4 sm:px-6 md:px-8"
                        >
                            <Header />
                        </div>
                        <div id="main" className="flex relative px-8">
                            {children}
                        </div>
                    </div>

                    {/* </SessionProvider> */}
                    {/* </Providers> */}
                </ApolloWrapper>
            </body>
        </html>
    )
}
