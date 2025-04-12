import clsx from "clsx";
import English_pronunciation from "@/content/notes/english_pronunciation.mdx";
import { compile, evaluate, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import Toc from "./Toc";
import fs from "node:fs/promises";
export default async function Page({
  params,
}: {
  params: Promise<{ menu: string; slug: string }>;
}) {
  const { menu, slug } = await params;
  const { default: Post } = await import(`@/content/${menu}/${slug}.mdx`);
  const Compiled = String(
    await compile(
      { path: "/home/songliansheng/english_pronunciation.mdx" },
      {
        outputFormat: "function-body",
        /* …otherOptions */
      }
    )
  );
  const code = String(
    await compile(
      await fs.readFile("/home/songliansheng/english_pronunciation.mdx"),
      {
        outputFormat: "function-body",
      }
    )
  );
  const { default: Content } = await evaluate(
    await fs.readFile("/home/songliansheng/english_pronunciation.mdx"),
    { ...runtime, development: true, format: "mdx" }
  );

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
  //     const code = String(await compile('# hi', {
  //   outputFormat: 'function-body',
  //   /* …otherOptions */
  // }))
  // const {default: Content} = await evaluate(path:'@/content/notes/english_pronunciation.mdx', {...runtime, baseUrl: import.meta.url})
  // const {default: Content} = await run(Compiled, { ...runtime })
  // console.log('Logs from [slug] -> page.jsx'+Content)
  // console.log(wtf)
  return (
    <div className={clsx("grid grid-cols-[1fr,3fr]")}>
      <div>
        <h2 className="text-xl py-2 sticky top-0 font-serif px-4 bg-inherit">
          On This Page
        </h2>
        {/* {String(Compiled)} */}
      </div>
      <div>
        {/* <Toc mdx={code}/> */}
        <Content />
        {/* <Compiled/> */}
      </div>

      {/* <English_pronunciation /> */}
    </div>
  );
}
