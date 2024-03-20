import ThemeSwitcher from './components/ThemeSwitcher'
import Header from './components/Header'
import './globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="dark" id="para" lang="en">
            <body className="bg-inherit text-lg">
                {/* <div className="w-full h-28 bg-green-600"></div> */}
                <Header />
                {children}
            </body>
        </html>
    )
}
