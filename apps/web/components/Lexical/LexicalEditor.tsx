'use client'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import OnChangePlugin from '@/components/Lexical/Plugins/OnChangePlugin'
import { ContentEditable } from './ContentEditableWrapper'
// import ContentEditable from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'

import React, { useState, useContext, useEffect, Ref, RefObject } from 'react'
// import { ContentEditableContext } from './ContentEditableProvider'
export const initialConfig = {
    namespace: 'MyEditor',
    theme: {},
    onError: console.error,
    editorState: null,
}

export default function Editor() {
    const clearContent = () => {}
    // const [ref, setRef] =
    //     useState<React.MutableRefObject<React.ReactElement | undefined>>()
    // const [ref, setRef] = useState()
    // const contentEditableRef = useContext(ContentEditableContext)

    useEffect(() => {
        // setRef(contentEditableRef)
        // const contentEditableElement = document.getElementById('wtfwtf');
        // editor.setRootElement(contentEditableElement)
    }, [])
    function onChange(editorState) {}
    /* ALERT Css of placeholder(in ContentEditable) must set 'pointer-events-none'
     */
    return (
        <>
            <RichTextPlugin
                contentEditable={
                    <div id="lexical-editor">
                        <ContentEditable
                            id="comment-input-box"
                            className=" relative py-2 px-auto border"
                            aria-placeholder="Enter a comment here"
                            placeholder={
                                <div className="absolute top-2 left-4 right-4 pointer-events-none">
                                    Add a comment
                                </div>
                            }
                            onFocus={() => {
                                // const contentEditableElement =
                                //     document.getElementById('comment-input-box')
                                document
                                    .getElementById('comment-input-box')!
                                    .classList.add('lg:flex')
                            }}
                        />
                    </div>
                }
                ErrorBoundary={LexicalErrorBoundary}
            />

            <OnChangePlugin onChange={onChange} />
            <AutoFocusPlugin />
        </>
    )
}
