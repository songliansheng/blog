import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path'
import compileMdx from './extractTocFromMdx'
import Breadcrumbs from '@/components/Breadcrumb'
// import fs from 'fs'
import { promises as fs } from 'fs'
import { fromMarkdown } from 'mdast-util-from-markdown'
import remarkToc from 'remark-toc'
import { remark } from 'remark'
import { read } from 'to-vfile'
import { unified } from 'unified'
import { Fragment, createElement, useEffect, useState } from 'react'
import rehypeSlug from 'rehype-slug'
import * as prod from 'react/jsx-runtime'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { toHtml as hastToHtml } from 'hast-util-to-html'
import { toc as buildTocFromMdast } from 'mdast-util-toc'
import { serialize } from 'next-mdx-remote/serialize'
import { compileMDX } from 'next-mdx-remote/rsc'
import { sanitize } from 'hast-util-sanitize'
import rehypeToc from '@jsdevtools/rehype-toc'
import { toHast as mdastToHast } from 'mdast-util-to-hast'
import rehypeStringify from 'rehype-stringify'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import remarkStringify from 'remark-stringify'
import rehypeReact from 'rehype-react'
import { toMarkdown as mdastToMarkdown } from 'mdast-util-to-markdown'
import Link from 'next/link'

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
            rehypePlugins: [],
        },
    }
    const filepath = path.join(
        process.cwd(),
        './content/',
        `${params.section}`,
        '/',
        `${params.slug}.mdx`
    )
    // const file = fs.readFileSync(filepath)

    const mdx = await fs.readFile(filepath, 'utf8')

    const {content,toc} = await compileMdx(mdx)
    return (
        <div className="relative flex items-start pr-80 w-[calc(100%-160px)] max-w-7xl m-auto duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4">
            <div>
                <div className="sticky top-14 bg-[#1c1b22]">
                    <Breadcrumbs />
                    {/* <Link href="/+${params.slug}">${params.slug}</Link> */}
                </div>
                {content}
                {/* <MDXRemote source={mdx} /> */}
            </div>

            <div className="sticky top-24">{toc}</div>
        </div>
    )
}
