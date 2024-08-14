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
            <html className="dark" lang="en">
                <body className=" text-lg">
                    <div id="root" className=" ">
                        <div
                            id="header-wrapper"
                            className="max-w-8xl sticky -top-6 z-50 px-4 sm:px-6 dark:bg-[theme(colors.primary-bg-dark)]"
                        >
                            <Header />
                        </div>
                        <div
                            id="main-wrapper"
                            className="max-w-8xl mx-auto px-4 sm:px-6 mt-3 dark:bg-[theme(colors.primary-bg-dark)]"
                        >
                            {children}
                        </div>
                    </div>
                </body>
            </html>
        )
    }
