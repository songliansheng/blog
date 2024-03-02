import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path'
// import fs from 'fs'
import { promises as fs } from 'fs'
import remarkToc from 'remark-toc'
import { remark } from 'remark'
import { read } from 'to-vfile'
import { unified } from 'unified'
import rehypeSlug from 'rehype-slug'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { serialize } from 'next-mdx-remote/serialize'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeToc from '@jsdevtools/rehype-toc'

export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string; slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
                rehypeSlug,
                rehypeAutolinkHeadings,
                [
                    rehypeToc,
                    {
                        cssClasses: {
                            position: 'beforeend',
                            toc: 'absolute right-24',
                            link: 'page-link',
                            customizeTOC: (toc) => {
                                return <div className="duration-300">{toc}</div>
                            },
                        },
                    },
                ],
            ],
        },
    }
    const filepath = path.join(
        process.cwd(),
        './content/',
        `${params.section}`,
        '/',
        `${params.slug}`
    )
    // const file = fs.readFileSync(filepath)

    const file = await fs.readFile(filepath, 'utf8')

    const { content } = await compileMDX({
        source: file,
        options: options,
    })

    return (
        
            
            <div className="duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 z-50">
                {content}
            </div>
        
    )
}
