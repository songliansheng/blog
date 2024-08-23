import { RootHeader as Header } from '../components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import clsx from 'clsx'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
    }) {
        return (
            <html
                className=" dark dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]"
                lang="en"
            >
                <body className={clsx(/* Basic body style */'text-lg leading-10')}>
                    <div id="root" className=" relative">
                        <div
                            id="header-wrapper"
                            className={clsx(
                                `dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]`,
                                'max-w-8xl text-xl sticky pt-4 pb-8 top-0 z-50 px-4 sm:px-6'
                            )}
                        >
                            <Header />
                        </div>
                        <div
                            id="main-wrapper"
                            className="min-h-[calc(100vh-13.25rem)] mx-auto max-w-8xl px-4 sm:px-6 mb-12 "
                        >
                            {children}
                        </div>
                        <div
                            id="footer-wrapper"
                            className="py-4 dark:bg-[theme(colors.test)]"
                        >
                            <Footer />
                        </div>
                    </div>
                </body>
            </html>
        )
    }
