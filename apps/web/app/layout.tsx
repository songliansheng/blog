import { GlobalHeader as Header } from "@/components/Header";
import Head from "@/components/head";
import "./globals.css";

import "@turborepo/design-system/globals.css";
import clsx from "clsx";
import Providers from "./providers";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { SideBar, SideBarPortal } from "@/components/SideBar";
// import {SideBar} from "@/components/SideBar2";
// import {SideBarPortal} from "@/components/SideBarPortal";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html
      /* TODO
       * What's the relationship between h-full in html and main's height ?
       */
      className={clsx(
        "h-full",
        "font-sans",
        "dark dark:bg-(--color-eerie-black) bg-(--color-off-white)"
      )}
      lang="en"
    >
      <Head />

      <body className={clsx("h-full ", "text-lg leading-10")}>
        <SessionProvider basePath={"/auth"} session={session}>
          <Providers>
            {/* <div id="root" className={clsx("h-full")}> */}
            <div id="root" className={clsx("")}>
              <Header
                id="global-nav"
                className={clsx(
                  "text-xl",
                  "lg:h-(--rootheader-height) lg:px-(--root-large-padding-horizontal) px-(--root-small-padding-horizontal)",
                  "sticky top-0 z-50",
                  "border-b-(length:--global-border-width) border-(--color-outer-space) dark:bg-(--color-eerie-black) bg-(--color-off-white) z-10"
                )}
              />
              <div
                className={clsx(
                  "flex lg:px-(--root-large-padding-horizontal) px-(--root-small-padding-horizontal)"
                )}
              >
                <SideBar
                  className={clsx(
                    "hidden lg:flex justify-start shrink-0 items-start flex-col",
                    "w-28 gap-9 pt-6",
                    "border-r-2 border-(--color-outer-space)",
                    "sticky top-[var(--rootheader-height)] h-[calc(100vh-var(--rootheader-height))] overflow-y-auto","z-50"
                  )}
                />
                <SideBarPortal
                  className={clsx(
                    "flex lg:hidden justify-between items-center"
                  )}
                />

                {children}
              </div>
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
