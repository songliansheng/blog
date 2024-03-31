// 'use client'
import path from 'path'
import compileMdx from './compileMdx'
import { NativeCompile } from './compileMdx'
import { CompileToc } from './compileMdx'
import Toc from '@/components/Toc'
// import fs from 'fs'
import Breadcrumbs from '@/components/Breadcrumb'
import { MdxComponents } from '@/components/MDX/MDXComponents'
import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs'

const options = {
    mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
}

function stringifyNodeOnServer(key: unknown, val: any) {
    if (val != null && val.$$typeof === Symbol.for('react.element')) {
        // Remove fake MDX props.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { mdxType, originalType, parentName, ...cleanProps } = val.props
        return [
            '$r',
            typeof val.type === 'string' ? val.type : mdxType,
            val.key,
            cleanProps,
        ]
    } else {
        return val
    }
}

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
        `${params.slug}.mdx`
    )
    // const file = fs.readFileSync(filepath)

    const mdx = await fs.readFile(filepath, 'utf8')
    const { content,headings } = await compileMdx({ mdx })
    return (
        <div
            id="content"
            className="max-w-7xl mx-auto px-4 md:px-8 sm:px-6 lg:pr-[19.5rem]"
        >
            <div id="content-breadcrumbs" className="sticky top-14">
                <Breadcrumbs />
            </div>
            {content}

            <div className="hidden xl:block overflow-y-auto bottom-0 fixed top-24 pl-8 right-[max(0px,calc(50%-45rem))] w-[19.5rem]">
                <Toc headings={headings} />
            </div>
        </div>
    )
   
}
