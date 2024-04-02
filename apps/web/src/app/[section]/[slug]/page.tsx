// 'use client'
import path from 'path'
import compileMdx from './compileMdx'
import Toc from 'components/Toc'
// import fs from 'fs'
import Breadcrumbs from 'components/Breadcrumb'
import { promises as fs } from 'fs'

export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string; slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const filepath = path.join(
        process.cwd(),
        './src/content/',
        `${params.section}`,
        '/',
        `${params.slug}.mdx`
    )
    // const file = fs.readFileSync(filepath)

    const mdx = await fs.readFile(filepath, 'utf8')
    const { content, headings } = await compileMdx({ mdx })
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
                {/* <Toc headings={headings} /> */}
            </div>
        </div>
    )
}
