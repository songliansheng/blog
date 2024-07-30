'use client'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot, $insertNodes, $getSelection } from 'lexical'
import { renderToString } from 'react-dom/server'
import { useRef } from 'react'
import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    TRANSFORMERS,
} from '@lexical/markdown'
// import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
const CommentItem = ({
    editor,
    parser,
    comment,
}: {
    editor
    parser
    comment: JSX.Element
    }) => {
    // let [parser, setParser] = useState<DOMParser>(new DOMParser())
    // let [dom, setDom] = useState<Document|undefined>()
    // const supabase = createSupabaseClient()
    let isEditmode = true

    const ContentEditableRef = useRef(null)

    useEffect(() => {
        // const parser = new DOMParser()
        
        editor.update(() => {})
    }, [])

    const SetContentEditable = () => {
        editor.setRootElement(ContentEditableRef.current)
        editor.setEditable(true)
    }
    const enableEdit = () => {
        isEditmode = false
        const htmlElementString = renderToString(comment)
        const dom = parser.parseFromString(
            htmlElementString,
            'text/html'
        )
        
        editor.setRootElement(ContentEditableRef.current)
        editor.update(() => {
            const lexicalNodes = $generateNodesFromDOM(editor, dom)
            const root = $getRoot()
            root.clear()
            root.select() //Is this line of code unnecessary?
            $insertNodes(lexicalNodes) // Use $getSelection().insertNodes(nodes) in headless mode
        })
    }
    const submit = () => {
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
            {/* {isEditmode && (
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
            )} */}
            {/* {(!isEditmode) && (<div><Button buttonName='Edit' className="bg-sky-500 hover:bg-sky-700" onClick={enableEdit} /><Button buttonName='Reply' className="bg-sky-500 hover:bg-sky-700" onClick={enableEdit} /></div>)} */}
        </>
    )
}

export default function Comments({
    comments,
}: {
    comments: JSX.Element[]
    }): JSX.Element {
   let [parser, setParser] = useState<DOMParser>()
    console.log(comments)
    // const parser = new DOMParser()
    const [editor] = useLexicalComposerContext()

    useEffect(() => {
       setParser(new DOMParser())
        // const contentEditableElement = document.getElementById('wtfwtf');
        // editor.setRootElement(contentEditableElement)
    }, [])
    const ConmentItems = comments.map((comment, index) => {
        return <CommentItem parser={parser} editor={editor} comment={comment} />
    })
    const [editorState, setEditorState] = useState()

    // const ContentEditableRef = useRef(null);
    // const CommentItems = comments.map(comment => <CommentItem data={comment} />)
    return <>{ConmentItems}</>
}
