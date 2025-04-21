import Header from "../components/Header";
// import Comments from 'components/CommentDemo'
// import { headers } from 'next/headers'  mr-[calc(theme('w-full') - 33rem)]
import { signIn } from "@/auth.config";
import { createServersideClient } from "@/lib/supabase-client";
import { ProjectCard } from "design-system/ui/Card";
import Card from "design-system/ui/Card";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { ArrowTopRightOnSquare, GithubIcon } from "design-system/ui/Icons";
import { ProjectItem } from "@/components/ProjectMeta";
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

export default async function HomePage() {
  const { projects, article } = await getData();
  // console.log('WTF' + projects[0].sourceurl)
  // console.log('WTF' + article[0].content)

  // const headersList = headers()
  return (
    <div className={clsx("gap-8 grid grid-cols-[1fr_3fr]")}>
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
          <h2 className={clsx("text-3xl")}>Posts</h2>
          <p>No items to display</p>
        </section>
        <section className={clsx("pl-8 mt-4")}>
          <h2 className={clsx("text-3xl pb-4")}>Projects</h2>
          <div className={clsx("grid grid-cols-3 gap-5")}>
            <Card
              className={clsx(
                "border-2 rounded-xl border-solid border-(--color-outer-space)"
              )}
            >
            { projects && <ProjectItem item={projects[0]} />}
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
