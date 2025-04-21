import { auth } from "@/auth.config";
import Redirect from "@/components/Redirect";
import { ProjectItem } from "@/components/ProjectMeta";
import clsx from "clsx";
import { createServersideClient } from "@/lib/supabase-client";
async function getData() {
  const supabaseClient = await createServersideClient();
  const { data: projects } = await supabaseClient
    .from("projects")
    .select("title,description,sourceUrl,demoUrl")
    .eq("id", "1");
  const { data: article } = await supabaseClient
    .from("notes")
    .select("content")
    .eq("id", "2");

  return { projects, article };
}
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ menu: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const item = {
    url: "https://github.com/songliansheng/blog",
    title: "Blog",
    description:
      "A personal blog created using Nextjs、Reactjs , obviously , this is the site you are visiting .",
  };
  const { menu } = await params;
  const session = await auth();
  const { projects, article } = await getData();

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
            {menu == "projects" && projects && (
              <ProjectItem item={projects[0]} />
            )}
          </div>
        </section>
      </div>
      <div className={clsx("gap-8 grid grid-cols-[1fr_3fr]")}></div>
    </main>
  );
}
