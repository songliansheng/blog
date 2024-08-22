import { RootHeader as Header } from '../components/Header'
import Footer from '@/components/Footer'
import { signIn, signOut } from 'auth'
// import Providers from './providers'
import './globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
    }) {
        /* bg-[theme(colors.primary-bg-dark)] */
        /* TODO bg-inherit in body is needed ? */
        return (
            <html
                className=" dark dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]"
                lang="en"
            >
                <body className=" text-lg">
                    <div id="root" className=" relative">
                        <div
                            id="header-wrapper"
                            className="dark:bg-[theme('colors.licorice')] max-w-8xl text-xl sticky pt-4 pb-8 -top-4 z-50 px-4 sm:px-6  "
                        >
                            <Header />
                        </div>
                        <div
                            id="main-wrapper"
                            className="min-h-[calc(100vh-5rem)] mx-auto max-w-8xl px-4 sm:px-6 mb-12 "
                        >
                            {children}
                        </div>
                        <div
                            id="footer-wrapper"
                            className="py-4 dark:bg-[theme(colors.primary-bg-dark)]"
                        >
                            <Footer />
                        </div>
                    </div>
                </body>
            </html>
        )
    }
