import '@/app/globals.css'
// import Footer from '../components/Footer'
import Link from 'next/link'

export default function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="w-full bg-white">{children}</div>
            <div className="hidden md:flex w-[500px]"></div>
        </>
    )
}
