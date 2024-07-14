// 'use client'
import path from 'path'
import compileMdx from './compileMdx'
import Toc from '@/components/Toc'
// import fs from 'fs'
//   { content }
import Breadcrumbs from 'components/Breadcrumb'
import { promises as fs } from 'fs'
import { createClient as createSupabaseClient } from 'lib/serverside-supabase-client';
import dynamic from 'next/dynamic'
import Comments from 'components/Comments'
// ALERT Use dynamic import and set ssr to false , or runtime error will happen!
const Comments2 = dynamic(() => import('components/Comments'), { ssr: false })
// const Comments2 = dynamic(() => import('components/Comments'))

import {auth} from '@/auth'

export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string; slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
    }) {
    const session = await auth()
    // const ContentEditableRef = useRef(null);
    const supabase = createSupabaseClient();
    const { data: article } = await supabase.from("notes").select('content').eq('id', '2');
    const { data: comments } = await supabase.from("comments").select('content').eq('id', '1');
    const soruce = JSON.stringify(article![0].content)
    // const soruce = JSON.stringify(data)
    // console.log(comments![0].content)
    const filepath = path.join(
        process.cwd(),
        './content/',
        `${params.section}`,
        '/',
        `${params.slug}.mdx`
    )
    // const file = fs.readFileSync(filepath)

    const mdx = await fs.readFile(filepath, 'utf8')
    const { content: Article, headings } = await compileMdx({ mdx: article![0].content })
    const { content: commentElements } = await compileMdx({ mdx: comments![0].content })

    return (
        <div
            id="content"
            className="max-w-7xl mx-auto px-4 md:px-8 sm:px-6 lg:pr-[19.5rem]"
        >
            <div id="content-breadcrumbs" className="sticky top-14">
                <Breadcrumbs />
            </div>
            {/* {session && Article} */}
            {Article}
            {/* {JSON.stringify(data)} */}
            <Comments2 comments={commentElements} />
            <div className="hidden xl:block overflow-y-auto bottom-0 fixed top-24 pl-8 right-[max(0px,calc(50%-45rem))] w-[19.5rem]">
                <Toc headings={headings} />
            </div>
        </div>
    )
}
