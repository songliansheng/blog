'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import Editor from '@/components/Lexical/LexicalEditor'
import { ContentEditable } from '@/components/Lexical/ContentEditableWrapper'
import { commentIcon, pencilSquareIcon, lightIcon } from '@/components/Icons'
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useLexicalComposerContext } from '@/components/Lexical/LexicalComposerWrapper'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot, $insertNodes, $getSelection } from 'lexical'
import { renderToString } from 'react-dom/server'
import Toc from '@/components/Toc'
import Comments from '@/components/Comments/Comments'
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    TRANSFORMERS,
} from '@lexical/markdown'
import clsx from 'clsx'

export default function ContentWrapper({
    mdx,
    article,
    headings,
    comments,

    className,
}: {
    mdx
    article
    headings
    comments

    className
}) {
    useEffect(() => {
        setParser(new DOMParser())
    }, [])
    const [isEditable, setIsEditable] = useState<boolean>(false)
    let [parser, setParser] = useState<DOMParser>()
    const [editor] = useLexicalComposerContext()
    const [editorState, setEditorState] = useState()
    const clearContent = () => {
        editor.setRootElement(null)
    }
    const prepareEditForMdx = (mdx) => {
        editor.update(() => {
            $convertFromMarkdownString(mdx, TRANSFORMERS)
        })
    }
    const prepareEdit = (content) => {
        const htmlElementString = renderToString(content)
        console.log('wtf', htmlElementString)
        const dom = parser?.parseFromString(htmlElementString, 'text/html')
        var defaultDom
        editor.update(() => {
            const lexicalNodes = $generateNodesFromDOM(
                editor,
                dom ? dom : defaultDom
            )
            const root = $getRoot()
            root.clear()
            root.select() //Is this line of code unnecessary?
            $insertNodes(lexicalNodes) // Use $getSelection().insertNodes(nodes) in headless mode
        })
    }

    return (
        <div
            id="content-wrapper"
            className={clsx(
                // 'flex relative justify-between',
                !isEditable && 'flex justify-between',
                className
            )}
        >
            {' '}
            {/* <Editor className="hidden" /> */}
            {/* {isEditable && <Editor />} */}
            {!isEditable && (
                <>
                    <article className="pr-12 lg:w-[calc(100vw-19.5rem)] max-w-[900px]">
                        {article}
                        <div className="flex justify-end">
                            <Button
                                className="flex px-sm items-center"
                                onClick={() => {
                                    document
                                        .getElementById('lexical')
                                        ?.classList.remove('hidden')

                                    document
                                        .getElementsByTagName('main')[0]
                                        .classList.replace(
                                            'max-w-7xl',
                                            'max-w-[60rem]'
                                        )
                                    document
                                        .getElementById('global-header')
                                        ?.classList.replace(
                                            'max-w-7xl',
                                            'max-w-[60rem]'
                                        )

                                    setIsEditable(true)
                                    prepareEditForMdx(mdx)
                                }}
                            >
                                {pencilSquareIcon}
                                <span>Edit</span>
                            </Button>
                            <Button
                                className="flex px-sm items-center"
                                onClick={() => {
                                    setIsEditable(true)
                                }}
                            >
                                {commentIcon}
                                <span>Reply</span>
                            </Button>
                        </div>
                        <section id="comments" className="py-5">
                            <h2 className="text-3xl mb-6">Comments</h2>
                            <div
                                id="editor-wrapper"
                                className="relative mb-6"
                            ></div>
                            <Comments comments={comments} />
                        </section>
                    </article>
                    <div
                        id="toc-wrapper"
                        className="sticky top-[5.5rem] h-[calc(100vh-9rem)] hidden  lg:block mr-2 pl-4 w-[19.5rem] shadow-inner shrink-0 shadow-black/30 dark:shadow-white/10 "
                    >
                        <Toc headings={headings} title="On THIS PAGE" />
                    </div>
                </>
            )}
            {isEditable && (
                <>
                    <Editor className=" mx-auto dark:bg-white/[0.01]" />
                    {/* <ContentEditable
                        id="content-editable"
                        className="py-3 px-12 max-w-[950px] dark:bg-white/5"
                        placeholder={
                            <div className="absolute top-2 left-4 right-4 pointer-events-none">
                                Add a comment
                            </div>
                        }
                        aria-placeholder="Enter a comment here"
                    /> */}
                    <div className="flex justify-end">
                        <Button
                            className="flex px-sm  items-center"
                            onClick={() => {
                                document
                                    .getElementById('root')
                                    ?.classList.remove('max-w-[950px]')
                                document
                                    .getElementsByTagName('main')[0]
                                    .classList.replace(
                                        'max-w-[60rem]',
                                        'max-w-7xl'
                                    )
                                document
                                    .getElementById('global-header')
                                    ?.classList.replace(
                                        'max-w-[60rem]',
                                        'max-w-7xl'
                                    )
                                setIsEditable(false)
                            }}
                        >
                            {commentIcon}Cancel
                        </Button>
                        <Button
                            className="flex px-sm  items-center"
                            onClick={() => {
                                setIsEditable(true)
                            }}
                        >
                            {commentIcon}Submit
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}
