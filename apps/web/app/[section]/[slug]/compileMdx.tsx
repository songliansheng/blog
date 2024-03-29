// 'use client'
import { compileMDX } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import { toc } from 'mdast-util-toc'
import { MdxComponents } from '@/components/MDX/MDXComponents'
// import toc from 'plugins/getTocFromMdast'
import remarkHeadings from '@vcarl/remark-headings'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import Breadcrumbs from '@/components/Breadcrumb'
import * as remarkHeaderId from 'remark-heading-id'
import remarkHeadingId from '../../../plugins/remark-heading-id'
import remarkToc from '../../../plugins/remarkToc'
import rehypeToc from 'remark-toc'
import { compile } from '@mdx-js/mdx'
import { transform } from '@babel/core'
import { ReactElement } from 'react'

//The order of Plugins matters
const REMARK_PLUGINS = [remarkHeadingId, remarkHeadings]
const REHYPE_PLUGINS = []
const mdxOptions = {
    remarkPlugins: REMARK_PLUGINS,
    rehypePlugins: REHYPE_PLUGINS,
}
const Rehype_Toc_Plug = [
    rehypeToc,
    {
        cssClasses: {
            position: 'beforeend',
            toc: 'sticky float-right top-10 right-24 w-80',
            link: 'page-link',
            customizeTOC: (toc) => {
                return <div className="duration-300">{toc}</div>
            },
        },
    },
]

export async function NativeCompile({ mdx }: { mdx: string }) {
    const content = await compile(mdx, mdxOptions)
    // var compiledJsx = new Function(content.value as string)

    console.log(content.data.headings)
    return { content }
}
export async function CompileToc({ mdx }: { mdx: string }) {
    const content = await compile(mdx, mdxOptions)
    // content.data.headings

    console.log(content)
    return { content }
}

export default async function compileMdx({ mdx }: { mdx: string }) {
    const { content } = await compileMDX({
        source: mdx,
        options: {
            mdxOptions,
        },
        components: MdxComponents,
    })
    // const {
    //     data: { headings },
    // } = await compile(mdx, mdxOptions)
    const Vfile = await compile(mdx, mdxOptions)
    console.log(Vfile)
    return { content, headings:Vfile.data.headings }
}
