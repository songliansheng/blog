import './globals.css'
// import Footer from '../components/Footer'
import Link from 'next/link'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
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
            <body className={inter.className}>
                <div className="root-container">
                    <div className="div-layer-I">
                        <header className="relative">
                            <div className="px-4 sm:px-6 md:px-8">
                                <div className="sticky -top-4 flex items-center justify-between py-6">
                                    <div className="">Songliansheng</div>
                                    <nav className="sticky">
                                        <ul className="flex gap-x-8 items-center">
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Projects</Link>
                                            </li>
                                            <li>
                                                <Link href="posts">Posts</Link>
                                            </li>
                                            <li>
                                                <Link href="#">About</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* <div>Banner</div> */}
                        </header>
                    </div>

                    <div className="div-layer-I relative px-8">
                        {children}
                        {/* <div className="pr-[30rem]">{children}</div> */}
                        {/* <div className="hidden lg:block absolute w-[30rem] top-1 right-0">
                            hello world
                        </div> */}
                    </div>

                    {/* <Footer /> */}
                </div>
            </body>
        </html>
    )
}
