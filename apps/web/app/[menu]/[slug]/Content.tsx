'use client'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useContext, useEffect, useState } from 'react'
import { $convertFromMarkdownString } from '@lexical/markdown'
// import { TRANSFORMERS } from "@/components/Lexical/Transformers"
import { TRANSFORMERS } from '@/lib/components/Lexical/MarkDown/Transformers'
import Toc from '@/lib/components/Toc'
import { isEditableContext } from '@/app/providers'
import Editor from '@/lib/components/Lexical/LexicalEditor'
import clsx from 'clsx'
import Card from '@/lib/components/Card'
import Button from '@/lib/components/Button'
import { commentIcon, pencilSquareIcon } from '@/lib/components/Icons'
// const isEditable = useContext(isEditableContext)

export default function Content({ article, headings, mdxString }) {
    // const isEditable = useState(null)
    const [isEditable, setIsEditable] = useState<boolean | null>(null)
    useEffect(() => {
        editor.update(() => {
            $convertFromMarkdownString(mdxString, TRANSFORMERS)
        })
    }, [])
    useEffect(() => {
        if (isEditable == null && sessionStorage.getItem('isEditable')) {
            setIsEditable(sessionStorage.getItem('isEditable') === 'true')
        }
        if (isEditable !== null) {
            sessionStorage.setItem('isEditable', isEditable.toString())
        }
    }, [isEditable])
    const [editor] = useLexicalComposerContext()
    return (
        <div
            id="content"
            className={clsx({ 'grid grid-cols-[1fr,3fr]': !isEditable })}
        >
            {/* h-[calc(100vh-8rem)] */}
            {!isEditable && (
                <div
                    className={clsx(
                        'sticky  top-[77.6px] overflow-y-scroll rounded-xl',
                        // 'border-l-2 border-[theme(colors.outer-space)]',
                        // 'dark:bg-[theme(colors.dark-licorice)]',
                        'max-h-[calc(100vh-6.75rem)]'
                        // 'rounded-xl dark:border-none border-2 border-[theme(colors.outer-space)]'
                    )}
                >
                    <h2 className="text-xl py-2 sticky top-0 font-serif px-4 bg-inherit">
                        On This Page
                    </h2>
                    <Toc className={clsx('px-4 ')} headings={headings} />
                </div>
            )}
            <article
                className={clsx(
                    'pl-8',
                    'border-l-2 border-r-2 border-[theme(colors.outer-space)]'
                    // 'border-l-2 border-r-2 border-[theme(colors.outer-space)]'
                )}
            >
                <Editor className={clsx({ hidden: !isEditable })} />
                {!isEditable && article}
                <div className="flex justify-end">
                    <Button
                        className="flex px-sm items-center"
                        onClick={() => setIsEditable(!isEditable)}
                    >
                        {pencilSquareIcon}
                        <span>Edit</span>
                    </Button>
                    <Button
                        className="flex px-sm items-center"
                        onClick={() => setIsEditable(!isEditable)}
                    >
                        {commentIcon}
                        <span>Cancel</span>
                    </Button>
                </div>
            </article>
        </div>
    )
}
