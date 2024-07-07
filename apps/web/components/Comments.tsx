'use client'
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { useRef } from 'react';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { $generateNodesFromDOM } from '@lexical/html';
import { $getRoot, $insertNodes, $getSelection } from 'lexical';

import { renderToString } from 'react-dom/server';
import { createRoot } from 'react-dom/client';
// import { LexicalErr }
import React, { useState, useEffect } from 'react';



const CommentItem = ({ CommentElement }) => {
    useEffect(() => {
       
    }, [])
    let isEditmode = false
    const parser = new DOMParser();
    const [editor] = useLexicalComposerContext();
    const ContentEditableRef = useRef(null);
    // const datadata =JSON.stringify(data)
    // const [Comment, setEditorState] = useState(comment);

    const htmlString = <strong>Beware of the leopard</strong>;
    // const htmlStrings = htmlString.outerHTML;
    // const parser = new DOMParser();
    // const commentElement = parser.parseFromString(htmlString, "text/html");
    console.log(htmlString)

    const SetContentEditable = () => {
        editor.setRootElement(ContentEditableRef.current)
        editor.setEditable(true);
    }
    const enableEdit = () => {
        isEditmode = false

        const htmlElement = <strong>Beware of the leopard</strong>;
        // const root = createRoot(htmlElement);
        const htmlElementString = renderToString(CommentElement);
        const commentDom = parser.parseFromString(htmlElementString, "text/html");
        editor.setRootElement(ContentEditableRef.current);
        editor.update(
            () => {
                const lexicalNodes = $generateNodesFromDOM(editor, commentDom);
                const root = $getRoot();
                root.clear()
                root.select(); //Is this line of code unnecessary?
                $insertNodes(lexicalNodes); // Use $getSelection().insertNodes(nodes) in headless mode
            })

        // const editorState = editor.parseEditorState(data);
        // editor.setEditorState(editorState)
    }
    const disableEdit = () => {
        isEditmode = false
        editor.setRootElement(null);
    }
    useEffect(() => {
        // editor.update(() => {
        //     const htmlString = "<strong>Beware of the leopard</strong>";
        //     const parser = new DOMParser();
        //     const commentElement = parser.parseFromString(htmlString, "text/html");
        //     const nodes = $generateNodesFromDOM(editor, commentElement);
        //     const root = $getRoot();
        //     root.clear()
        //     root.select(); //Is this line of code unnecessary?
        //     $insertNodes(nodes); // Use $getSelection().insertNodes(nodes) in headless mode

        // //    editor.setEditable(true)
        // })


        // const contentEditableElement = document.getElementById('commentElement1');
        // contentEditableElement!.setAttribute("contentEditable", "true");
        // editor.setRootElement(contentEditableElement)
        // editor.setRootElement(ContentEditableRef.current)
        // editor.setEditable(true);
        // console.log(editor.isEditable())
        // const editorState = editor.parseEditorState(data);
        // editor.setEditorState(editorState)
        // editor.setEditable(true)

    }, []);
    // console.log(comment)
    // return <div id='123comment' contenteditable="false" ref={ContentEditableRef}>
    // return <ContentEditable />
    // return { isEditing }?<ContentEditable />:null
    return <>
        {CommentElement}
        {/* {isEditmode ? <div id='commentElement1' ref={ContentEditableRef}></div> : htmlString} */}
        {isEditmode && (<div><button onClick={enableEdit}>Cancel</button><button onClick={enableEdit}>Submit</button></div>)}
        {(!isEditmode) && (<div><button onClick={enableEdit}>Edit</button><button onClick={enableEdit}>Reply</button></div>)}
    </>
}
function MyOnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            onChange(editorState);
        });
    }, [editor, onChange]);
    return null;
}


export default function Comments({ CommentElements }): JSX.Element {
    const stateSource = '{ "root": { "children": [{ "children": [{ "detail": 0, "format": 0, "mode": "normal", "style": "", "text": "Welcome to the playground Hello World", "type": "text", "version": 1 }], "direction": null, "format": "", "indent": 0, "type": "paragraph", "version": 1 }], "direction": null, "format": "", "indent": 0, "type": "root", "version": 1 } }'
    const initialConfig = {
        namespace: 'MyEditor',
        theme: {
        },
        onError: console.error,
        editorState: stateSource
    };

    // console.log(comments)
    useEffect(() => {
        // const contentEditableElement = document.getElementById('wtfwtf');
        // editor.setRootElement(contentEditableElement)

    }, []);
    const [editorState, setEditorState] = useState();
    function onChange(editorState) {
        setEditorState(editorState);
    }

    // const ContentEditableRef = useRef(null);
    // const CommentItems = comments.map(comment => <CommentItem data={comment} />)
    return <>
        <LexicalComposer initialConfig={initialConfig}>
            <div>
                {/* <ContentEditable />
                <ContentEditable /> */}
                <CommentItem CommentElement={CommentElements} />

                <RichTextPlugin
                    contentEditable={<div id='wtfwtf'><ContentEditable /></div>}
                    // contentEditable={<ContentEditable />}
                    placeholder={<div>Enter some text...</div>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <MyOnChangePlugin onChange={onChange} />
                <AutoFocusPlugin />

            </div>
        </LexicalComposer></>




}