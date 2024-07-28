import Header from '../components/Header'
import Headerr from '@/components/RootDiv'
import { signIn, signOut } from 'auth'
import Providers from './providers'
import './globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="dark" id="para" lang="en">
            <body className="bg-inherit text-lg">
                
                    <div id="globaldiv" className=" ">
                        <Header />
                        {children}
                    </div>
               
            </body>
        </html>
    )
}
