// 'use client'
// 'use server'
import cn from 'classnames'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
// import { } from './'
import { auth } from '@/auth'
import { SignIn } from './Button'
import { signIn, signOut } from '@/auth'
import { handleSignOut } from '../app/actions'
import Image from 'next/image'
import { Avatar } from '@/components/Avatar'

const NavItem = ({ name, url, isActive, children }: any) => {
    return (
        <div className="flex flex-auto sm:flex-1">
            <Link
                href={url}
                className="active:scale-95 transition-transform text-center py-1.5 px-1.5 sm:px-4 rounded-full capitalize"
            >
                {name}
            </Link>
        </div>
    )
}
const SignOut = async () => {
    return (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    )
}
const Header = async () => {
    const session = await auth()
    const avatar = session?.user?.image

    return (
        <div className="sticky top-0 z-50">
            <nav
                className={cn(
                    ' mx-auto max-w-[1408px] w-[calc(100%-160px)] duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center flex justify-between dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 '
                )}
            >
                <div
                    id="global-header"
                    className=" flex w-full items-center justify-between py-6 text-xl"
                >
                    <div className="w-72 -space-x-2.5 shrink-0">
                        🗐 Liansheng Song
                    </div>
                    <div className="w-full"></div>
                    <div className="mx-2.5 gap-1.5 hidden lg:flex">
                        <NavItem name="Home" isActive="false" url="/" />
                        <NavItem
                            name="Projects"
                            isActive="false"
                            url="/projects"
                        />
                        <NavItem name="Posts" isActive="false" url="/posts" />
                        <NavItem name="Notes" isActive="false" url="/notes" />
                        <NavItem name="Sign in" isActive="false" url="/login" />
                    </div>
                    <div className="flex items-center">
                        <ThemeSwitcher />
                    </div>
                    {/* <SignIn /> */}
                    <Avatar imgSrc={session?.user?.image} />
                    {session && <SignOut />}
                </div>
            </nav>
            {/* < LoginForm /> */}
        </div>
    )
}
export default Header
