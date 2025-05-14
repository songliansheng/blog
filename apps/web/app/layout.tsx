import { RootHeader as Header } from "@/components/Header";
import Head from "@/components/head";
import { ContactMe } from "@/components/ContactMe";
import "./globals.css";
import "@repo/design-system/globals.css";
// import "@repo/design-system/styles.css";
import clsx from "clsx";
import { EmailIcon } from "@repo/design-system/ui/Icons";
import Providers from "./providers";
import { GithubIcon } from "@repo/design-system/ui/Icons";
import { auth } from "@/auth.config";
import { SessionProvider } from "next-auth/react";
import SideBar from "@/components/SideBar";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // const session = 'fuck'
  // console.log(session?.user)
  // if (session?.user) {
  //     // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
  //     // filter out sensitive data before passing to client.
  //     session.user = {
  //         name: session.user.name,
  //         email: session.user.email,
  //         image: session.user.image,
  //     }
  // }
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
                // className="dark:bg-(--color-licorice) bg-(--color-off-white) max-w-7xl mx-auto text-xl"
                className={clsx(
                  "text-xl ",
                  "h-(--rootheader-height) px-(--root-padding-horizontal)",
                  "sticky top-0 z-50 ",
                  "border-b-(length:--global-border-width) border-(--color-outer-space)"
                )}
              />
              <div className={clsx("flex px-(--root-padding-horizontal)")}>
                <SideBar
                  className={clsx(
                    "flex flex-col items-start justify-start  shrink-0",
                    "w-28 gap-8 pt-6"
                  )}
                />

                {children}
              </div>

              {/* <ContactMe
                className={clsx(
                  "fixed bottom-2 right-4 max-h-screen overflow-y-scroll"
                )}
              /> */}
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
