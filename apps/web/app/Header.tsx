import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
const Header = () =>{
    return (
        <div
            id="global-header"
            className="sticky top-4 flex items-center justify-between py-6"
        >
            <div className="">🗐 Liansheng Song</div>
            <NavigationMenu.Root className="sticky hidden lg:flex">
                <NavigationMenu.List className="flex items-center gap-x-8">
                    <NavigationMenu.Item>
                        <Link href="/">Home</Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <Link href="/projects">Projects</Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <Link href="/posts">Posts</Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <Link href="about">About</Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <Link href="login">Login</Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
    )
}
export default Header