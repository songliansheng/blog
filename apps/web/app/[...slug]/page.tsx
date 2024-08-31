import path from 'path'
import compileMdx from './compileMdx'
import Toc from '@/components/Toc'
// import fs from 'fs'
//   { content }
import Editor from '@/components/Lexical/LexicalEditor'
import Breadcrumbs from 'components/Breadcrumb'
import { commentIcon, pencilSquareIcon, lightIcon } from '@/components/Icons'
import { promises as fs } from 'fs'
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
// import dynamic from 'next/dynamic'
import { ContentEditable } from '@/components/Lexical/ContentEditableWrapper'
import Comments from '@/components/Comments/Comments'
import { useContext } from 'react'
import { Suspense } from 'react'
import ContentWrapper from './ContentWrapper'
import { Button } from '@/components/Button'
import ActionMenu from './ActionsMenu'

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
import clsx from 'clsx'
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
    if (!article) return { Article: null }
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
        article,
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

    const { article, Article, headings, comments1, comments, commentsTest } =
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
        <>
            <Breadcrumbs id='breadcrumbs'
                className={clsx(
                    ' top-10 pb-8 dark:bg-[theme(colors.primary-bg-dark)]'
                )}
            />

            {Article && (
                <ContentWrapper
                    article={Article}
                    headings={headings}
                    comments={commentsTest}
                    className=""
                    mdx={article![0].content}
                />
            )}
            {!Article && <p>Content load failed !</p>}
        </>
    )
}
