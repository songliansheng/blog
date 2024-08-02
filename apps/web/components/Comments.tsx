'use client'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot, $insertNodes, $getSelection } from 'lexical'
import { renderToString } from 'react-dom/server'
import { useRef } from 'react'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import React, { useState, useEffect } from 'react'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { Button } from './Button'
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    TRANSFORMERS,
} from '@lexical/markdown'
// import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'

export default function Comments({
    comments,
}: {
    comments: JSX.Element[]
}): JSX.Element {
    let [parser, setParser] = useState<DOMParser>()
    const [editor] = useLexicalComposerContext()
    const [editorState, setEditorState] = useState()
    const CommentItem = ({ comment, key }: { comment: JSX.Element; key }) => {
        return (
            <>
                {comment}
                <Button buttonName="Edit" onClick={prepareEditing} />
                <Button buttonName="Reply" onClick={prepareEditing} />
            </>
        )
    }
    const prepareEditing = ({ comment, key }) => {
        const contentEditableElement = document.getElementById(key)
        const htmlElementString = renderToString(comment)
        const dom = parser?.parseFromString(htmlElementString, 'text/html')
        var defaultDom

        editor.setRootElement(contentEditableElement)
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
        return <CommentItem key={index} comment={comment} />
    })

    return <>{ConmentItems}</>
}
