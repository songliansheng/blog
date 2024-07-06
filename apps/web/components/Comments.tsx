'use client'
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { useRef } from 'react';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { $generateNodesFromDOM } from '@lexical/html';
import { $getRoot, $insertNodes } from 'lexical';
// import { LexicalErr }
import React, { useState, useEffect } from 'react';
const stateSource = '{ "root": { "children": [{ "children": [{ "detail": 0, "format": 0, "mode": "normal", "style": "", "text": "Welcome to the playground Hello World", "type": "text", "version": 1 }], "direction": null, "format": "", "indent": 0, "type": "paragraph", "version": 1 }], "direction": null, "format": "", "indent": 0, "type": "root", "version": 1 } }'
const CommentItem = ({ data }) => {
    let isEditing = true
    const ContentEditableRef = useRef(null);
    // const datadata =JSON.stringify(data)
    const [Comment, setEditorState] = useState(data);
    const [editor] = useLexicalComposerContext();
    const SetContentEditable = () => {
        editor.setRootElement(ContentEditableRef.current)
        editor.setEditable(true);
    }
    const edit = () => {
        isEditing = true
        const editorState = editor.parseEditorState(data);
        editor.setEditorState(editorState)
    }
    useEffect(() => {
        editor.update(() => {
            const htmlString = "<strong>Beware of the leopard</strong>";
            const parser = new DOMParser();
            const doc3 = parser.parseFromString(htmlString, "text/html");
            const nodes = $generateNodesFromDOM(editor, doc3);
            $getRoot().select();
            $insertNodes(nodes);
           editor.setEditable(true)
        })
        
        
        
        // editor.setRootElement(ContentEditableRef.current)
        // console.log(editor.isEditable())
        // const editorState = editor.parseEditorState(data);
        // editor.setEditorState(editorState)


    }, []);
    console.log(data)
    // return <div id='123comment' contenteditable="false" ref={ContentEditableRef}>
    // return <ContentEditable />
    // return { isEditing }?<ContentEditable />:null
    return { isEditing } ? <ContentEditable /> : <div><Comment /><button onClick={edit}>Edit</button></div>
        {/* <button onClick={SetContentEditable}>Edit</button> */}
    
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

const initialConfig = {
    namespace: 'MyEditor',
    theme: {
    },
    onError: console.error,
    editorState: stateSource
};

export default function Comments({ comments }): JSX.Element {
    // console.log(comments)
    useEffect(() => {

    }, []);
    const [editorState, setEditorState] = useState();
    function onChange(editorState) {
        setEditorState(editorState);
    }

    const ContentEditableRef = useRef(null);
    // const CommentItems = comments.map(comment => <CommentItem data={comment} />)
    return <> <LexicalComposer initialConfig={initialConfig}>
        <div>
            <CommentItem data={comments} />
            {/* {CommentItems} */}
            {/* <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            /> */}
            <MyOnChangePlugin onChange={onChange} />
            <AutoFocusPlugin />
            {/* <div ref={ContentEditableRef}></div> */}
            {/* <Comment id='comment1' ContentEditableRef={ContentEditableRef}/> */}
            {/* <Comment2 /> */}

        </div>
    </LexicalComposer></>




}