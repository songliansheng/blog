import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path'
import remarkToc from 'remark-toc'
import { remark } from 'remark'
import { read } from 'to-vfile'
import { serialize } from 'next-mdx-remote/serialize'
// import { promises as fs } from 'fs'
import fs from 'fs'

export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string; slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const filepath = path.join(
        process.cwd(),
        './content/',
        `${params.section}`,
        '/',
        `${params.slug}`
    )
    const file = fs.readFileSync(filepath, 'utf8')

    const file2 = await remark()
        .use(remarkToc)
        .process(await read(filepath))
    console.log(String(file2))
    // const markdown = await serialize(file)

    // return <div>{mdxSource}</div>

    return (
        <div className="flex">
            <div className="duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 z-50">
                <MDXRemote source={file2} />
            </div>
        </div>
    )
}
