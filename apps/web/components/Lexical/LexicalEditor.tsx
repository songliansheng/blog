'use client'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import EditorTheme from './EditorTheme'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin'
import OnChangePlugin from '@/components/Lexical/plugins/OnChangePlugin'
import { ContentEditable } from './ContentEditableWrapper'
import LixicalNodes from './LexicalNodes'
import { LexicalComposer } from '@/components/Lexical/LexicalComposerWrapper'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'

import React, {
    useState,
    useContext,
    useEffect,
    Ref,
    RefObject,
    useRef,
} from 'react'
import clsx from 'clsx'
// import { ContentEditableContext } from './ContentEditableProvider'
export const initialConfig = {
    namespace: 'MyEditor',
    nodes: LixicalNodes,
    theme: EditorTheme,
    onError: console.error,
    editorState: null,
}

export default function Editor({ className }: { className?: string }) {
    const ref = useRef()
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
        <div
            id="lexical"
            className={
                `${className}`
                // `${className}` + ' flex flex-col items-center justify-center '
            }
        >
            <ToolbarPlugin className="text-sm dark:bg-[theme('colors.licorice')]/10" />
            <RichTextPlugin
                contentEditable={
                    <ContentEditable
                        id="lexical-contentEditable"
                        className={clsx(
                            'outline-none',
                            'px-4  relative py-4 px-auto dark:bg-white/5'
                        )}
                        aria-placeholder="Enter a comment here"
                        placeholder={
                            <div className="absolute top-2 left-4 right-4 pointer-events-none">
                                Add a comment
                            </div>
                        }
                    />
                }
                ErrorBoundary={LexicalErrorBoundary}
            />

            <OnChangePlugin onChange={onChange} />
            <AutoFocusPlugin />
            <HorizontalRulePlugin />
        </div>
    )
}
