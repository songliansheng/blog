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
import { ContentEditable } from '@/components/Lexical/ContentEditableWrapper'
import Comments from '@/components/Comments'
import { useContext } from 'react'
import { CommentInputBox } from '@/components/Comments'

/* ALERT Use dynamic import and set ssr to false , or runtime error will happen!
 */
// const Comments2 = dynamic(() => import('components/Comments'), { ssr: false })
// const Comments2 = dynamic(() => import('components/Comments'))

import { auth } from '@/auth'
import { SupbaseClientContext } from '@/app/providers'
const prepareData = async () => {
    const supabase = createSupabaseClient()
    const { data: article } = await supabase
        .from('notes')
        .select('content')
        .eq('id', '2')
    const { data: comments } = await supabase
        .from('comments')
        .select('content')
        .eq('id', '1')
    const { data: comments1 } = await supabase
        .from('comments')
        .select('content')
    // const comments2 = comments1?.map(async (comment) => await comment + 'sss')
    const { content: Article, headings } = await compileMdx({
        mdxString: article![0].content,
    })
    const { content: commentElements } = await compileMdx({
        mdxString: comments![0].content,
    })
    /* TODO Figure out  how to use promise below
     * How to handle 'comments1' is possibly 'null'
     */
    const compiledComments = comments1!.map(
        async (comment) =>
            await compileMdx({
                mdxString: comment.content,
            })
    )
    const commentsTest = await Promise.all(compiledComments)

    // const mapped_payments2 = await Promise.all(
    //     comments1.map(async (comment) => {
    //          await compileMdx({
    //              mdxString: comment.content,
    //          })
    //     })
    // )
    // const comments22= await comments1.map( (comment) => {
    //      comment + 'sss'
    //  })
    // console.log('wtf', commentsTest)
    return {
        Article,
        headings,
        commentElements,
        comments1,
        comments,
        commentsTest,
    }
}
export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string; slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const session = await auth()

    const { Article, headings, comments1, comments, commentsTest } =
        await prepareData()
    const filepath = path.join(
        process.cwd(),
        './content/',
        `${params.section}`,
        '/',
        `${params.slug}.mdx`
    )

    const mdx = await fs.readFile(filepath, 'utf8')

    /* ALERT For a element to be sticky , its hight must be set ! */
    /* MARK For the placeholder in ContentEditable(in editor) to be positioned properly, the editor must be non-static
     */
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

                <div id="editor-wrapper" className="relative">
                    <Editor />
                </div>
                <div id="comments">
                    {/* <div id="comment666" contentEditable={true}></div> */}

                    <Comments comments={commentsTest} />
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
