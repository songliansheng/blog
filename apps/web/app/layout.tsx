import { RootHeader as Header } from '../components/Header'

import { signIn, signOut } from 'auth'
// import Providers from './providers'
import './globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
    }) {
        /* TODO bg-inherit in body is needed ? */
        return (
            <html
                className=" dark dark:bg-[theme(colors.primary-bg-dark)] light:bg-white"
                lang="en"
            >
                <body className=" text-lg">
                    <div id="root" className="">
                        <div
                            id="header-wrapper"
                            className="max-w-8xl text-xl sticky pt-4 pb-8 -top-4 z-50 px-4 sm:px-6 bg-white dark:bg-[theme(colors.primary-bg-dark)]"
                        >
                            <Header />
                        </div>
                        <div
                            id="main-wrapper"
                            className="mx-auto max-w-8xl px-4 sm:px-6 bg-white dark:bg-[theme(colors.primary-bg-dark)]"
                        >
                            {children}
                        </div>
                    </div>
                </body>
            </html>
        )
    }
