'use client'
import '../globals.css'
import { Providers } from '../components/providers'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import { useSession, signIn, signOut } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import { ApolloWrapper } from '../ApolloClient-SSR'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="">
                <ApolloWrapper>
                   
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
                        <Footer />
                    </div>
                </ApolloWrapper>
            </body>
        </html>
    )
}
