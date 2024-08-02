'use client'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import OnChangePlugin from '@/components/Lexical/Plugins/OnChangePlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
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

    return (
        <>
            <RichTextPlugin
                // contentEditable={ref?.current ? ref?.current : <div></div>}
                contentEditable={<ContentEditable id='comment-area' />}
                placeholder={<div>Enter a comment here ......</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <OnChangePlugin onChange={onChange} />
            <AutoFocusPlugin />
        </>
    )
}
