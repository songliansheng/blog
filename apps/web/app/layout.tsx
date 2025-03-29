import { RootHeader as Header } from '../components/Header'
import Footer from '@/components/Footer'
import ContactMe from '@/components/ContactMe'
import './globals.css'
import clsx from 'clsx'
import Providers from './providers'
import ContactMeButton from '@/components/ContactMeButton'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            /* TODO
             * What's the relationship between h-full in html and main's height ?
             */
            className={clsx(
                'h-full',
                "dark dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]"
            )}
            lang="en"
        >
            <body className={clsx('h-full ', 'text-lg leading-10')}>
                <Providers>
                    <div id="root" className="h-full">
                        <div className={clsx(`w-[calc(100vw-25rem)]`, 'pl-8')}>
                            <Header
                                id="global-header"
                                // className="dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')] max-w-7xl mx-auto text-xl"
                                className={clsx(
                                    `dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]`,
                                    'max-w-7xl text-xl ',
                                    'py-4 pl-4',
                                    'sticky top-0 z-50 ',
                                    // 'border-b-2 border-[theme(colors.outer-space)]'
                                )}
                            />

                            <main
                                className={clsx(
                                    ' max-w-7xl basis-auto flex-shrink-0 relative'
                                )}
                            >
                                {children}
                            </main>
                        </div>

                        <ContactMe className={clsx('fixed bottom-2 right-4')} />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
