import path from 'path'
import compileMdx from './compileMdx'
import Toc from '@/components/Toc'
// import fs from 'fs'
//   { content }
import Editor from '@/components/Lexical/LexicalEditor'
import Breadcrumbs from 'components/Breadcrumb'
import { promises as fs } from 'fs'
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
import dynamic from 'next/dynamic'
import Comments2 from '@/components/Comments'
import { useContext } from 'react'
// ALERT Use dynamic import and set ssr to false , or runtime error will happen!
// const Comments2 = dynamic(() => import('components/Comments'), { ssr: false })
// const Comments2 = dynamic(() => import('components/Comments'))

import { auth } from '@/auth'
import { SupbaseClientContext } from '@/app/providers'

export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string; slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const session = await auth()
    // const ContentEditableRef = useRef(null);
    const supabase = createSupabaseClient()
    const { data: article } = await supabase
        .from('notes')
        .select('content')
        .eq('id', '2')
    const { data: comments } = await supabase
        .from('comments')
        .select('content')
        .eq('id', '1')
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
    const { content: Article, headings } = await compileMdx({
        mdx: article![0].content,
    })
    const { content: commentElements } = await compileMdx({
        mdx: comments![0].content,
    })
    // ALERT For a element to be sticky , its hight must be set !
    return (
        <div id="slug" className=" flex flex-row max-w-7xl mx-auto">
            <div id="slug-main" className=" px-4">
                <div
                    id="slug-breadcrumbs"
                    className="sticky top-14 backdrop-blur-xl "
                >
                    <Breadcrumbs />
                </div>
                {Article}
                <div id="comments">
                    <Editor />
                    <Comments2 comments={[commentElements]} />
                </div>
            </div>

            <div
                id="slug-toc-wrapper"
                className="h-[calc(100vh-121px)] hidden sticky xl:block pr-4 top-24 pl-8  w-[19.5rem]"
            >
                <Toc headings={headings} />
            </div>
        </div>
    )
}
