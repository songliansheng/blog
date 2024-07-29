'use client'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import OnChangePlugin from '@/components/Lexical/Plugins/OnChangePlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import {  useEffect } from 'react'
export const initialConfig = {
    namespace: 'MyEditor',
    theme: {},
    onError: console.error,
    editorState: null,
}

export default function Editor() {
    useEffect(() => {
        // const contentEditableElement = document.getElementById('wtfwtf');
        // editor.setRootElement(contentEditableElement)
    }, [])
    function onChange(editorState) {
        
    }

    return (
        <>
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
        </>
    )
}
