import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { auth } from "@/auth.config";
// import { LoginForm } from '@/components/LoginForm'
import LoginForm from "@/components/LoginForm";
import Redirect from "@/components/Redirect";
import Stopwatch from "@/components/Demo/Stopwatch";

// import { redirect } from 'next/navigation'

// import { promises as fs } from 'fs'
import fs from "fs";
import path from "path";
import clsx from "clsx";
import  Card  from "design-system/ui/Card";
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ menu: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { menu } = await params;
  const session = await auth();

  // return <>You have to login</>
  if (menu === "test")
    return (
      <>
        <Redirect message="You have loged in" link="/" />
      </>
    );
  // if (session) {
  //     const dir = path.join(process.cwd(), './content/', `${params.section}`)
  //     const filenames = fs.readdirSync(dir)

  //     const listItems = filenames.map((filename) => <li>{filename}</li>)

  //     return (
  //         <div
  //             id="section"
  //             className="max-w-7xl mx-auto"
  //         >
  //             <ul>{listItems}</ul>
  //         </div>
  //     )
  // } else {
  //     // redirect('/login')
  //     return <>You have to login</>
  // }
  return (
    <main className="max-w-7xl mx-auto">
      <div className={clsx("gap-8 grid grid-cols-[1fr_3fr]")}></div>
      <section className={clsx("pr-4")}>
        <h3>Latest</h3>
        <p>No items to display</p>
      </section>
      <div
        className={clsx(
          "border-l-2 border-solid border-(--color-outer-space) min-h-screen"
        )}
      >
        <section className={clsx("pl-8 mt-4")}>
          <header>
            <p>Open source projects I've made </p>
          </header>
          <div className={clsx("grid grid-cols-3 gap-5")}>
            <Card
              className={clsx(
                "border-2 rounded-xl border-solid border-(--color-outer-space)"
              )}
            >
              <ProjectItem item={projects[0]} />
            </Card>
          </div>
        </section>
      </div>
      <div className={clsx("gap-8 grid grid-cols-[1fr_3fr]")}></div>
    </main>
  );
}
