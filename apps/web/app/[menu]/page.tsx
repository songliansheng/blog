import { auth } from "@/auth";
import Redirect from "@/components/Redirect";
import { ProjectItem } from "@/components/ProjectMeta";
import clsx from "clsx";
import { createServersideClient } from "@/lib/supabase-client";

async function getData() {
  const supabaseClient = await createServersideClient();
  const { data: items } = await supabaseClient
    .from("projects")
    .select("title,description,sourceUrl,demoUrl");
  const { data: article } = await supabaseClient
    .from("notes")
    .select("content")
    .eq("id", "2");

  return { items, article };
}
const itemsExample = [
  {
    url: "https://github.com/songliansheng/blog",
    title: "Blog",
    description:
      "A personal blog created using Nextjs、Reactjs , obviously , this is the site you are visiting .",
  },
];

export default async function Page({
  params,
  // searchParams,
}: {
  params: Promise<{ menu: string }>;
  // searchParams: { [key: string]: string | string[] | undefined };
  }) {
  // const routes = ['posts', 'projects']
   const { menu } = await params;
  // if (!routes.includes(menu)) {
  //   return (
  //     <NotFound />
  //   )
  // }
 
  const session = await auth();
  let description = "";
  let { items, article } = await getData();
  const Items1 = items!.map((item, index) => (
    menu === "projects" ? (
      <ProjectItem
        sourceUrl={item.sourceUrl}
        demoUrl={item.sourceUrl}
        title={item.title}
        description={item.description}
        key={index}
      />
    ) : (
      <li key={index}>{item.title}</li>
    )
    
  ));
  
  const descriptionOfProjects = "Open source projects I have made";
  const descriptionOfNotes = "Notes I have take during coding";

  if (menu === "projects") {
    description = descriptionOfProjects;
  }
  if (menu === "notes") {
    description = descriptionOfNotes;
  }
  description =
    menu === "projects" ? descriptionOfProjects : descriptionOfNotes;
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
    <>
      <section className={clsx("pr-4")}>
        <h3>Latest</h3>
        <p>No items to display</p>
      </section>
      <section
        className={clsx(
          "pl-8 border-l-2 border-(--color-outer-space) pt-(--layout-padding-vertical)"
        )}
      >
        <header>
          <p className={clsx("pb-12 text-xl")}>{description}</p>
        </header>
        <div
          className={clsx(
            "relative ",
            "border-2 border-(--color-outer-space)"
          )}
        >
          
          <div className={clsx("grid grid-cols-2 gap-5 relative")}>
            {items && <>{Items1}</>}
          </div>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return [{ menu: "posts" }, { menu: "projects" }];
}
