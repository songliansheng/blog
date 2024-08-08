'use client'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot, $insertNodes, $getSelection } from 'lexical'
import { renderToString } from 'react-dom/server'
import { useRef } from 'react'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import React, { useState, useEffect } from 'react'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { commentIcon, lightIcon } from './Icons'
import { Button } from './Button'
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    TRANSFORMERS,
} from '@lexical/markdown'
// import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
export function CommentInputBox({ onFocusOps }): JSX.Element {
    const [editor] = useLexicalComposerContext()
    const commentInputBox = document.getElementById('default-comment-box')
    const ActionsMenu = () => {
        return (
            <div className="flex">
                <Button>{commentIcon}Reply</Button>
            </div>
        )
    }
    return (
        <div>
            <div
                id="default-comment-box"
                className=""
                contentEditable={true}
                onFocus={(e) => { editor.setRootElement(commentInputBox); onFocusOps()}}
            ></div>
            <div id="actions-group" className="hidden"></div>
        </div>
    )
}
export default function Comments({ comments }: { comments }): JSX.Element {
    let [parser, setParser] = useState<DOMParser>()
    const [editor] = useLexicalComposerContext()
    const [editorState, setEditorState] = useState()
    const clearContent = () => {editor.setRootElement(null)}
    const CommentItem = ({ comment}: { comment: JSX.Element }) => {
        let [isEditing, setIsEditing] = useState<Boolean>(false)
        const CommentFooter = () => {
            return (
                <div className="flex">
                    <Button
                        className="flex px-sm"
                        onClick={() => {
                            editor.setRootElement(null)
                            setIsEditing(true)
                            prepareEditing({ comment })
                        }}
                    >
                        {commentIcon}Edit
                    </Button>
                    <Button
                        className="flex px-sm"
                        onClick={() => {
                            setIsEditing(true)
                            prepareEditing({ comment })
                        }}
                    >
                        {commentIcon}Reply
                    </Button>
                </div>
            )
        }
        // let isEditing = true
        return (
            <div >
                <div id="comment-contemt">
                    {isEditing ? <ContentEditable id="comment123" /> : comment}
                </div>

                {isEditing ? (
                    <div>
                        <Button onClick={prepareEditing}>Cancel</Button>
                        <Button onClick={prepareEditing}>Submit</Button>
                    </div>
                ) : (
                    <div id="comment-actions">
                        <CommentFooter />
                    </div>
                )}
                <button onClick={clearContent}>ClearContentEditable</button>
            </div>
        )
    }
    const prepareEditing = ({ comment }) => {
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
        return <CommentItem key={index} comment={comment.content} />
    })

    return (
        <>
            <h2 className="text-3xl">Comments</h2>
            <div className="flex flex-col gap-4" id="comments">
                {ConmentItems}
            </div>
        </>
    )
}
