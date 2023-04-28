import '../globals.css'
// import Footer from '../components/Footer'
import Link from 'next/link'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="pr-[30rem]">{children}</div>
}
