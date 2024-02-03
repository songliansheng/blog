import ThemeSwitcher from "./components/ThemeSwitcher"
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark' id="para" lang="en">

      <body>
        <ThemeSwitcher />{children}</body>
    </html>
  )
}
