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
            <body className={clsx(/* Basic body style */ 'text-lg leading-10')}>
                <div id="root" className="">
                    <Header
                        id="global-header"
                        // className="dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')] max-w-7xl mx-auto text-xl"
                        className={clsx(
                            `dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]`,
                            'max-w-7xl mx-auto text-xl ',
                            'pt-4 pb-8',
                            'sticky top-0 z-50'
                        )}
                    />
                    <main
                        className={clsx(
                            'max-w-7xl mx-auto',
                            'min-h-[calc(100vh-13.25rem)] mb-12'
                        )}
                    >
                        {children}
                    </main>
                    <Footer
                        className={clsx(
                            'max-w-7xl mx-auto py-4 dark:bg-[theme(colors.test)]'
                        )}
                    />
                </div>
            </body>
        </html>
    )
}
