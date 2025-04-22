import clsx from "clsx";
import English_pronunciation from "@/content/notes/english_pronunciation.mdx";
import { compile, evaluate, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import Toc from "@/components/Toc";
import remarkHeadingId from "@/mdxPlugins/remark-heading-id";
import { remarkToc } from "@/mdxPlugins/remark-toc";
import remarkRehype from "remark-rehype";

// import remarkToc from "remark-toc";
import remarkHeadings from "@vcarl/remark-headings";
import fs from "node:fs/promises";
import path from "node:path";
export default async function Page({
  params,
}: {
  params: Promise<{ menu: string; slug: string }>;
}) {
  const { menu, slug } = await params;
  // const { default: Post } = await import(`@/content/${menu}/${slug}.mdx`);
  const filePath = path.join(process.cwd(), "content", menu, `${slug}.mdx`);

  /* CAUTION
   *await compile(await fs.readFile('/home/songliansheng/english_pronunciation.mdx')) doesn't work
  * Use 
  * await compile(
      await fs.readFile("/home/songliansheng/english_pronunciation.mdx"),
      {
        outputFormat: "function-body",
      }
    )
    *instead
   */
  const {
    data: { headings },
  } = await compile(
    (
      await fs.readFile(filePath)
    ).toString(),
    {
      outputFormat: "function-body",
      remarkPlugins: [remarkHeadingId, remarkHeadings],
      rehypePlugins: [],
    }
  );
  const data = String(
    await compile((await fs.readFile(filePath)).toString(), {
      outputFormat: "function-body",
      remarkPlugins: [remarkToc],
    })
  );

  const { default: Content } = await evaluate(
    (
      await fs.readFile(filePath)
    ).toString(),
    {
      ...runtime,
      development: true,
      format: "mdx",
      remarkPlugins: [remarkToc, remarkHeadingId],
    }
  );
  console.log(filePath);
  return (
    <>
      <div
        className={clsx(
          "dark:bg-(--color-licorice) sticky top-[3.85rem] h-[calc(100vh-3.85rem)] overflow-y-auto"
        )}
      >
        <h2 className="text-xl py-6 sticky top-0 font-serif bg-inherit">
          On This Page
        </h2>
        <Toc headings={headings} />
      </div>
      <div
        id="scrollArea"
        className={clsx("pt-4 pl-8 border-l-2 border-(--color-outer-space)")}
      >
        <English_pronunciation />
      </div>
    </>
  );
}
