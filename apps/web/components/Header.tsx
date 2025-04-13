// 'use client'
// 'use server'
// import cn from 'classnames'
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
// import { } from './'
import { auth } from "@/auth.config";
// import Headerr from './RootDiv'
import clsx from "clsx";
import { signIn, signOut } from "@/auth.config";
import { handleSignOut } from "../app/actions";
import Image from "next/image";
import Button from "./Button";
import { Menu } from "@headlessui/react";
import { codeBracketSquare } from "./Icons";
import ContactMeButton from "@/components/ContactMeButton";
import SignIn from "./SignInButton";
/*
 * Return a <header> element
 */
const NavItem = ({ name, url, isActive, children }: any) => {
  return (
    <Link
      href={url}
      className="p-2 py-1.5 rounded-full dark:hover:bg-[theme('colors.outer-space')] hover:bg-[theme('colors.silver')] font-bold"
    >
      {name}
    </Link>
  );
};

const SignOutButton = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        type="submit"
        className={clsx("text-sm !dark:bg-inherit font-bold !px-2")}
      >
        Sign Out
      </Button>
    </form>
  );
};
/*
 * Return a <header> element
 */
export const RootHeader = async ({ className, id }) => {
  /*
   * Return a <header> element
   */
  const session = await auth();
  const avatar = session?.user?.image;

  return (
    <header
      id={id}
      className={clsx(className, " flex  items-center justify-between ")}
    >
      <a className="flex items-center w-32" href="">
        {codeBracketSquare}
        <span className="mx-2">Liansheng</span>
      </a>

      <div id="group-in-header" className={clsx("flex items-center gap-x-8")}>
        <nav
          className={
            clsx("items-center hidden  gap-x-6 ", "lg:flex !important")

            // ' mx-auto max-w-[1408px] w-[calc(100%-160px)] duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center flex justify-between dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 '
          }
        >
          <NavItem name="Home" isActive="false" url="/" />
          <NavItem name="Projects" isActive="false" url="/projects" />

          <NavItem name="Notes" isActive="false" url="/notes" />
        </nav>
        <div className={clsx("flex")}>
          <ThemeSwitcher />
          {session?.user && <SignOutButton />}
        </div>

        {/* <SignIn /> */}
      </div>
    </header>
  );
};
export default function ArticleHeader({ title, author, date }) {
  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
    </div>
  );
}
