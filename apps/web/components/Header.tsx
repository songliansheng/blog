// 'use client'
// 'use server'
import cn from 'classnames'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
// import { } from './'
import { auth } from '@/auth'
import Headerr from './RootDiv'
import { SignIn } from './Button'
import { signIn, signOut } from '@/auth'
import { handleSignOut } from '../app/actions'
import Image from 'next/image'
import { Avatar } from '@/components/Avatar'
import { Menu } from '@headlessui/react'
import { MyDropdown } from './MyDropdown'


const NavItem = ({ name, url, isActive, children }: any) => {
    return (
        <Link
            href={url}
        >
            {name}
        </Link>
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
        <div
            id="global-header"
            className=" flex bg-opacity-100 max-w-7xl items-center justify-between py-6 text-xl mx-auto"
        >
            <div className="w-72 -space-x-2.5 shrink-0 bg-inherit/100">
                🗐 Liansheng Song
            </div>
            <div id="group-in-header" className="flex items-center gap-x-8">
                <nav
                    className={
                        cn()

                        // ' mx-auto max-w-[1408px] w-[calc(100%-160px)] duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center flex justify-between dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 '
                    }
                >
                    <div className="items-center hidden lg:flex gap-x-6 ">
                        <NavItem name="Home" isActive="false" url="/" />
                        <NavItem
                            name="Projects"
                            isActive="false"
                            url="/projects"
                        />
                        <NavItem name="Posts" isActive="false" url="/posts" />
                        <NavItem name="Notes" isActive="false" url="/notes" />
                    </div>

                    {/* <SignIn /> */}

                    {/* {session && (
                        <>
                            <Avatar imgSrc={session?.user?.image} />
                            <SignOut />
                        </>
                    )} */}
                    {/* {!session && (
                        <NavItem name="Sign in" isActive="false" url="/login" />
                    )} */}
                </nav>
                <ThemeSwitcher />
                {session ? (
                    <Headerr avatarSrc={avatar} />
                ) : null}
            </div>
        </div>
    )
}
export default Header
