import { RootHeader as Header } from "../components/Header";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import "./global.css";
import clsx from "clsx";
import Providers from "./providers";
import { MDXProvider } from "@mdx-js/react";
import ContactMeButton from "@/components/ContactMeButton";
import { auth } from "@/auth.config";
import { SessionProvider } from "next-auth/react";
// import  SessionProvider  from '@/app/SessionProvider'
// import SignIn from '@/components/SignInButton'
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
        "dark dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]"
      )}
      lang="en"
    >
      {/* session={session} */}
      <body className={clsx("h-full ", "text-lg leading-10")}>
        <SessionProvider basePath={"/auth"} session={session}>
          <Providers>
            <div id="root" className="h-full">
              <div className={clsx(``, "")}>
                <Header
                  id="global-header"
                  // className="dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')] max-w-7xl mx-auto text-xl"
                  className={clsx(
                    `dark:bg-[theme('colors.licorice')] bg-[theme('colors.off-white')]`,
                    "text-xl ",
                    "py-2 pl-12 pr-[25rem]",
                    "sticky top-0 z-50 ",
                    "border-b-2 border-[theme(colors.outer-space)]"
                  )}
                />

                <main
                  className={clsx(
                    " pl-12 pr-[25rem]",
                    " basis-auto flex-shrink-0 relative"
                  )}
                >
                  {children}
                </main>
              </div>

              <ContactMe
                className={clsx(
                  "fixed bottom-2 right-4 max-h-screen overflow-y-scroll"
                )}
              />
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
