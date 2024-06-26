import Header from '../components/Header'
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
