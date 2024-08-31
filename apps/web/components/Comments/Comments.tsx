'use client'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot, $insertNodes, $getSelection } from 'lexical'
import { renderToString } from 'react-dom/server'
import { useRef } from 'react'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import React, { useState, useEffect } from 'react'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { commentIcon, lightIcon } from '../Icons'
import { Button } from '../Button'
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    TRANSFORMERS,
} from '@lexical/markdown'
// import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
const CommentItem = ({
    prepareEdit,
    comment,
}: {
    prepareEdit
    comment: JSX.Element
}) => {
    let [isTargeted, setIsTargeted] = useState<Boolean>(false)

    return (
        <div className="flex flex-col">
            <div id="comment-contemt">
                {isTargeted ? <ContentEditable id="comment123" /> : comment}
            </div>

            {isTargeted ? null : (
                <div id="comment-actions">
                    <div className="flex justify-end">
                        <Button
                            className="flex px-sm items-center"
                            onClick={() => {
                                setIsTargeted(true)
                                prepareEdit({ comment })
                            }}
                        >
                            {commentIcon}Edit
                        </Button>
                        <Button
                            className="flex px-sm items-center"
                            onClick={() => {
                                setIsTargeted(true)
                                prepareEdit({ comment })
                            }}
                        >
                            {commentIcon}Reply
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default function Comments({ comments }: { comments }): JSX.Element {
    let [parser, setParser] = useState<DOMParser>()
    const [editor] = useLexicalComposerContext()
    const [editorState, setEditorState] = useState()
    const clearContent = () => {
        editor.setRootElement(null)
    }

    const prepareEdit = ({ comment }) => {
        // this.isEditing = true
        // const contentEditableElement = document.getElementById(key)
        const htmlElementString = renderToString(comment)
        const dom = parser?.parseFromString(htmlElementString, 'text/html')
        var defaultDom

        // editor.setRootElement(contentEditableElement)
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
    const cancelEditing = () => {}
    const handleSubmit = () => {
        editor.update(() => {
            const markdown = $convertToMarkdownString(TRANSFORMERS)
        })
    }

    useEffect(() => {
        setParser(new DOMParser())
    }, [])
    const ConmentItems = comments.map((comment, index) => {
        return (
            <CommentItem
                prepareEdit={prepareEdit}
                key={index}
                comment={comment.content}
            />
        )
    })

    return (
        <>
            <div className="flex flex-col gap-4" id="comments">
                {ConmentItems}
            </div>
        </>
    )
}
