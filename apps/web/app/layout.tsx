import Header from '../components/Header'
import Headerr from '@/components/RootDiv'
import { signIn, signOut } from 'auth'
// import Providers from './providers'
import './globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="dark" id="para" lang="en">
            <body className="bg-inherit text-lg">
                <div id="root" className=" ">
                    <div
                        id="rootLayout-header"
                        className="max-w-8xl sticky -top-6 z-50 px-4 sm:px-6 "
                    >
                        <Header />
                    </div>
                    <div
                        id="rootLayout-main"
                        className="max-w-8xl mx-auto px-4 sm:px-6 mt-3"
                    >
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
