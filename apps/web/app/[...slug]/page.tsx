import path from 'path'
import compileMdx from './compileMdx'
import Toc from '@/components/Toc'
// import fs from 'fs'
//   { content }
import Editor from '@/components/Lexical/LexicalEditor'
import Breadcrumbs from 'components/Breadcrumb'
import { promises as fs } from 'fs'
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
// import dynamic from 'next/dynamic'
import { ContentEditable } from '@/components/Lexical/ContentEditableWrapper'
import Comments from '@/components/Comments/Comments'
import { useContext } from 'react'
import { Suspense } from 'react'
// import { CommentInputBox } from '@/components/Comments/Comments'
/*  TODO Use <Suspense>
 * Auto attach must be set disabled , Figure out why?
 */
/* ALERT Use dynamic import and set ssr to false , or runtime error will happen!
 */
// const Comments2 = dynamic(() => import('components/Comments'), { ssr: false })
// const Comments2 = dynamic(() => import('components/Comments'))

import { auth } from '@/auth'
import { SupbaseClientContext } from '@/components/providers'
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
    params: { slug: string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const session = await auth()

    const { Article, headings, comments1, comments, commentsTest } =
        await prepareData()
    // const filepath = path.join(
    //     process.cwd(),
    //     './content/',
    //     `${params.slug}`,
    //     '/',
    //     `${params.slug}.mdx`
    // )

    // const mdx = await fs.readFile(filepath, 'utf8')

    /* MARK For the placeholder in ContentEditable(in editor) to be positioned properly, the editor must be non-static
     *
     * For a element to be sticky , its hight must be set
     *
     * Use overflow-y-auto to enable scrolling effects
     *
     * Children(header、content) of a sticky、scrollable patent element Div1 are scrolling together ,how to handle this ?
     */

    return (
        <main className=" flex flex-row max-w-7xl mx-auto lg:justify-between justify-center">
            <Suspense fallback={<div>Main is loading</div>}>
                <article className="pr-12 lg:w-[calc(100vw-19.5rem)] max-w-[888px]">
                    <div
                        id="breadcrumbs"
                        className=" top-10 pb-8 dark:bg-[theme(colors.primary-bg-dark)]"
                    >
                        <Breadcrumbs />
                    </div>
                    {Article}
                    <section id="comments" className="py-5">
                        <h2 className="text-3xl mb-6">Comments</h2>
                        <div id="editor-wrapper" className="relative mb-6">
                            <Editor />
                            {/* <CommentInputBox /> */}
                        </div>
                        <Comments comments={commentsTest} />
                    </section>
                </article>

                <div
                    id="toc-wrapper"
                    className="sticky top-[5.5rem] h-[calc(100vh-9rem)] hidden  lg:block mr-2 pl-4 w-[19.5rem] shadow-inner shrink-0 shadow-black/30 dark:shadow-white/10 "
                >
                    <Toc headings={headings} title="On THIS PAGE" />
                </div>
            </Suspense>
        </main>
    )
}