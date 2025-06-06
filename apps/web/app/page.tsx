import { createServersideClient } from "@/lib/supabase-client";
import { ProjectItem } from "@/components/ProjectMeta";
import clsx from "clsx";
import NoContent from "@/components/NoContent";
import Card from "@turborepo/design-system/ui/Card";

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
  return (
    <main
      className={clsx(
        "w-full",
        "flex justify-between items-start"
        // " pl-12 pr-[25rem]",
        // " basis-auto shrink-0 relative",
        // "grid grid-cols-[1fr_3fr] ",
        // `min-h-[calc(100vh-var(--rootheader-height))]`
      )}
    >
      <div
        className={clsx(
          "border-x-(length:--global-border-width) border-(--color-outer-space)",
          "w-full max-w-[50rem] min-h-[calc(100vh-var(--rootheader-height))]"
        )}
        id="content"
      >
        <section className={clsx("")}>
          <h2 className={clsx("font-serif", "text-3xl p-4")}>Posts</h2>
          <div className={clsx("px-7 mb-4")}>
            <NoContent
              className={clsx(
                "py-4 rounded-xl ",
                "bg-(--color-silver) dark:bg-(--color-carbon)"
              )}
            />
          </div>

          <div
            className={clsx("bg-(--color-outer-space) w-full h-[1px]")}
          ></div>
        </section>
        <section className={clsx(" mt-4 ")}>
          <h2 className={clsx("font-serif", "text-3xl p-4")}>Projects</h2>
          <div className={clsx("grid grid-cols-2", "px-7 gap-5")}>
            {projects && (
              <ProjectItem
                sourceUrl={projects[0]?.sourceUrl}
                demoUrl={projects[0]?.demoUrl}
                title={projects[0]?.title}
                description={projects[0]?.description}
              />
            )}
          </div>
          <div
            className={clsx("bg-(--color-outer-space) w-full h-[1px] mt-4")}
          ></div>
        </section>
      </div>

      <Card
        className={clsx(
          "w-[23.5rem] m-5",
          " "
          // "border-2 border-(--color-outer-space)"
        )}
      >
        <section
          className={clsx(
            "pr-4 rounded-xl",
            "bg-(--color-silver) dark:bg-(--color-carbon)"
          )}
        >
          <h3 className={clsx("font-serif", "text-3xl p-4")}>Latest</h3>
          <p className={clsx("px-4")}>No items to display</p>
        </section>
      </Card>
    </main>
  );
}
