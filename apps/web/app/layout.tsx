import { RootHeader as Header } from "@/components/Header";
import Head from "@/components/head";
import "./globals.css";
import "@repo/design-system/globals.css";
import clsx from "clsx";
import Providers from "./providers";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import SideBar from "@/components/SideBar";
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
            <div id="root" className="h-full">
              <Header
                id="global-header"
                className={clsx(
                  "text-xl ",
                  "h-(--rootheader-height) px-(--root-padding-horizontal)",
                  "sticky top-0 z-50 ",
                  "border-b-(length:--global-border-width) border-(--color-outer-space) dark:bg-(--color-eerie-black) bg-(--color-off-white) z-10"
                )}
              />
              <div className={clsx("flex px-(--root-padding-horizontal)")}>
                <SideBar
                  className={clsx(
                    "flex flex-col items-start justify-start  shrink-0",
                    "w-28 gap-9 pt-6"
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
