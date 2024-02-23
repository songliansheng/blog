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
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
