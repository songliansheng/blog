import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import cn from 'classnames'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

function NavItem({ url, isActive, children }: any) {
    return (
        <div className="flex flex-auto sm:flex-1">
            <Link
                href={url}
                className="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize"
            >
                {children}
            </Link>
        </div>
    )
}
const Header = () => {
    return (
        <nav
            className={cn(
                'duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 z-50'
            )}
        >
            <div
                id="global-header"
                className="sticky top-4 flex w-full items-center justify-between py-6"
            >
                <div className="w-60  -space-x-2.5 xs:space-x-0 ">
                    🗐 Liansheng Song
                </div>
                <div className="w-full"></div>
                <div className="mx-2.5 gap-1.5 hidden lg:flex">
                    <NavItem isActive="false" url="/">
                        Home
                    </NavItem>
                    <NavItem isActive="false" url="/projects">
                        Projects
                    </NavItem>
                    <NavItem isActive="false" url="/posts">
                        Posts
                    </NavItem>
                    <NavItem isActive="true" url="/notes">
                        Notes
                    </NavItem>
                </div>
                <div className="flex items-center">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    )
}
export default Header
