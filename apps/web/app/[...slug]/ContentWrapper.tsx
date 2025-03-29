'use client'
import { useState, useEffect } from 'react'
import Button from '@/components/Button'
import Editor from '@/components/Lexical/LexicalEditor'
import { ContentEditable } from '@/components/Lexical/ContentEditableWrapper'
import { commentIcon, pencilSquareIcon, lightIcon } from '@/components/Icons'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
// import { useLexicalComposerContext } from '@/components/Lexical/LexicalComposerWrapper'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot, $insertNodes, $getSelection, LexicalEditor } from 'lexical'
import { renderToString } from 'react-dom/server'
import Toc from '@/components/Toc'
import Comments from '@/components/Comments/Comments'
import Card from '@/components/Card'
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
} from '@lexical/markdown'
import { isEditableContext } from '../providers'
import clsx from 'clsx'
import { TRANSFORMERS } from '@/components/Lexical/MarkDown/Transformers'
import { useContext } from 'react'
const isEditableCtx = useContext(isEditableContext)
export function TableOfContent(headings) {
    return (
        <>
            {' '}
            <Card className={clsx('border-[theme(colors.outer-space)]')}>
                <Toc
                    headings={headings}
                    title="On THIS PAGE"
                    className="px-4"
                ></Toc>
            </Card>
        </>
    )
}
export function Article(article) {
    const prepareEditForMdx = (mdxString) => {
        document.getElementById('lexical')?.classList.remove('hidden')

        document
            .getElementsByTagName('main')[0]
            .classList.replace('max-w-7xl', 'max-w-[60rem]')
        document
            .getElementById('global-header')
            ?.classList.replace('max-w-7xl', 'max-w-[60rem]')
        isEditableCtx.setIsEditable(true)
        sessionStorage.setItem('isEditable', 'true')
        if (editor) {
            editor.update(() => {
                $convertFromMarkdownString(mdxString, TRANSFORMERS)
            })
        }
    }
    
        return !isEditableCtx.isEditable && (
            <>
                <article className="px-4 max-w-[900px]">
                    {article}
                    <div className="flex justify-end">
                        <Button
                            className="flex px-sm items-center"
                            onClick={() => prepareEditForMdx(mdx)}
                        >
                            {pencilSquareIcon}
                            <span>Edit</span>
                        </Button>
                        <Button
                            className="flex px-sm items-center"
                            onClick={() => {
                                isEditableCtx.setIsEditable(true)
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
            </>
        )
    
}
export function Editor() {
    return (
        <>
            <Editor className=" mx-auto dark:bg-white/[0.01]" />
            <div className="flex justify-end">
                <Button
                    className="flex px-sm items-center"
                    onClick={() => {
                        document
                            .getElementById('root')
                            ?.classList.remove('max-w-[950px]')
                        document
                            .getElementsByTagName('main')[0]
                            .classList.replace('max-w-[60rem]', 'max-w-7xl')
                        document
                            .getElementById('global-header')
                            ?.classList.replace('max-w-[60rem]', 'max-w-7xl')
                        isEditableCtx.setIsEditable(false)
                    }}
                >
                    {commentIcon}
                    <span>Cancel</span>
                </Button>
                <Button
                    className="flex px-sm items-center"
                    onClick={() => {
                        isEditableCtx.setIsEditable(true)
                    }}
                >
                    {commentIcon}
                    <span>Submit</span>
                </Button>
            </div>
        </>
    )
}
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
    const [isEditable, setIsEditable] = useState<boolean | null>(null)
    const [lexicalEditor, setLexicalEditor] = useState<LexicalEditor>()
    let [parser, setParser] = useState<DOMParser>()
    const [editor] = useLexicalComposerContext()
    const [editorState, setEditorState] = useState()
    useEffect(() => {
        setParser(new DOMParser())
        setLexicalEditor(editor)
        if (editor) {
            editor.update(() => {
                $convertFromMarkdownString(mdx, TRANSFORMERS)
            })
        }
        if (sessionStorage.getItem('isEditable')) {
            // sessionStorage.setItem('isEditable', 'false')
            setIsEditable(sessionStorage.getItem('isEditable') === 'true')
            // setIsEditable(true)
        }
    }, [])

    useEffect(() => {
        //  if (sessionStorage.getItem('isEditable')) {
        //      // sessionStorage.setItem('isEditable', 'false')
        //      setIsEditable(sessionStorage.getItem('isEditable') === 'true')
        //      // setIsEditable(true)
        //  }
        // sessionStorage.setItem(
        //     'isEditable',
        //     isEditable === true ? 'true' : 'false'
        // )
    }, [isEditable])

    const clearContent = () => {
        editor.setRootElement(null)
    }

    /* TODO
     * onClick={prepareEditForMdx} doesn't work
     */
    const prepareEditForMdx = (mdxString) => {
        document.getElementById('lexical')?.classList.remove('hidden')

        document
            .getElementsByTagName('main')[0]
            .classList.replace('max-w-7xl', 'max-w-[60rem]')
        document
            .getElementById('global-header')
            ?.classList.replace('max-w-7xl', 'max-w-[60rem]')
        setIsEditable(true)
        sessionStorage.setItem('isEditable', 'true')
        if (editor) {
            editor.update(() => {
                $convertFromMarkdownString(mdxString, TRANSFORMERS)
            })
        }
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
                'grid grid-cols-[1fr,3fr] gap-4',
                className
            )}
        >
            {!isEditable && (
                <>
                    <Card
                        className={clsx('border-[theme(colors.outer-space)]')}
                    >
                        <Toc
                            headings={headings}
                            title="On THIS PAGE"
                            className="px-4"
                        />
                    </Card>
                    {/* <div
                        id="toc-wrapper"
                        className="sticky top-[5.5rem] h-[calc(100vh-9rem)] hidden  lg:block mr-2 pl-4 w-[19.5rem] shadow-inner shrink-0 shadow-black/30 dark:shadow-white/10 "
                    ></div> */}
                    {/* <article className="pr-12 lg:w-[calc(100vw-19.5rem)] max-w-[900px]"> */}
                    <article className="px-4 max-w-[900px]">
                        {article}
                        <div className="flex justify-end">
                            <Button
                                className="flex px-sm items-center"
                                onClick={() => prepareEditForMdx(mdx)}
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
                </>
            )}
            {isEditable && (
                <>
                    <Editor className=" mx-auto dark:bg-white/[0.01]" />

                    <div className="flex justify-end">
                        <Button
                            className="flex px-sm items-center"
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
                            {commentIcon}
                            <span>Cancel</span>
                        </Button>
                        <Button
                            className="flex px-sm items-center"
                            onClick={() => {
                                setIsEditable(true)
                            }}
                        >
                            {commentIcon}
                            <span>Submit</span>
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}
