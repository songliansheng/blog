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
import rehypeToc from 'remark-toc'
import { compile } from '@mdx-js/mdx'
import { transform } from '@babel/core'

const REMARK_PLUGINS = [remarkHeadings]
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
    const { transform } = require('@babel/core')
    const jsCode = await transform(content, {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
        presets: ['@babel/preset-react'],
    }).code
    let fakeExports = {}
    const fakeRequire = (name: string) => {
        if (name === 'react/jsx-runtime') {
            return require('react/jsx-runtime')
        } else {
            // For each fake MDX import, give back the string component name.
            // It will get serialized later.
            return name
        }
    }
    const evalJSCode = new Function('require', 'exports', jsCode)
    
    console.log(evalJSCode(fakeRequire, fakeExports))
    return content
}

export default async function compileMdx({ mdx }: { mdx: string }) {
    const content  = await compileMDX({
        source: mdx,
        options: {
            mdxOptions,
        },
        components: MdxComponents,
    })
    console.log(content)
    return { content }
}
