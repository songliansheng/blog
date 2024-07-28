'use client'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot, $insertNodes, $getSelection } from 'lexical'

import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'

import { renderToString } from 'react-dom/server'
import { useRef } from 'react'
import React, { useState, useEffect } from 'react'

import { Button } from './Button'
import OnChangePlugin from '@/components/Lexical/OnChangePlugin'
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    TRANSFORMERS,
} from '@lexical/markdown'
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
const CommentItem = ({ comment }: { comment: JSX.Element }) => {
     const supabase = createSupabaseClient()
    let isEditmode = false
    const parser = new DOMParser()
    const [editor] = useLexicalComposerContext()
    const ContentEditableRef = useRef(null)

    useEffect(() => {
        editor.update(() => {})
    }, [])

    const SetContentEditable = () => {
        editor.setRootElement(ContentEditableRef.current)
        editor.setEditable(true)
    }
    const enableEdit = () => {
        isEditmode = false
        const htmlElementString = renderToString(comment)
        const commentDom = parser.parseFromString(
            htmlElementString,
            'text/html'
        )
        editor.setRootElement(ContentEditableRef.current)
        editor.update(() => {
            const lexicalNodes = $generateNodesFromDOM(editor, commentDom)
            const root = $getRoot()
            root.clear()
            root.select() //Is this line of code unnecessary?
            $insertNodes(lexicalNodes) // Use $getSelection().insertNodes(nodes) in headless mode
        })
    }
    const submit = () => {
        const [editor] = useLexicalComposerContext()
        editor.update(() => {
            const markdown = $convertToMarkdownString(TRANSFORMERS)
        })
    }
    const disableEdit = () => {
        isEditmode = false
        editor.setRootElement(null)
    }

    return (
        <>
            {comment}
            {/* {isEditmode ? <div id='commentElement1' ref={ContentEditableRef}></div> : htmlString} */}
            {isEditmode && (
                <div>
                    <Button
                        buttonName="Cancel"
                        className="bg-sky-500 hover:bg-sky-700"
                        onClick={enableEdit}
                    />
                    <Button
                        buttonName="Submit"
                        className="bg-sky-500 hover:bg-sky-700"
                        onClick={enableEdit}
                    />
                </div>
            )}
            {/* {(!isEditmode) && (<div><Button buttonName='Edit' className="bg-sky-500 hover:bg-sky-700" onClick={enableEdit} /><Button buttonName='Reply' className="bg-sky-500 hover:bg-sky-700" onClick={enableEdit} /></div>)} */}
        </>
    )
}

export default function Comments({
    comments,
}: {
    comments: JSX.Element
}): JSX.Element {
    const initialConfig = {
        namespace: 'MyEditor',
        theme: {},
        onError: console.error,
        editorState: null,
    }

    useEffect(() => {
        // const contentEditableElement = document.getElementById('wtfwtf');
        // editor.setRootElement(contentEditableElement)
    }, [])
    const [editorState, setEditorState] = useState()
    function onChange(editorState) {
        setEditorState(editorState)
    }

    // const ContentEditableRef = useRef(null);
    // const CommentItems = comments.map(comment => <CommentItem data={comment} />)
    return (
        <>
            <LexicalComposer initialConfig={initialConfig}>
                <div>
                    <CommentItem comment={comments} />
                    <RichTextPlugin
                        contentEditable={
                            <div id="wtfwtf">
                                <ContentEditable />
                            </div>
                        }
                        // contentEditable={<ContentEditable />}
                        placeholder={<div>Enter some text...</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <OnChangePlugin onChange={onChange} />
                    <AutoFocusPlugin />
                </div>
            </LexicalComposer>
        </>
    )
}
