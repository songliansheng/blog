
'use client';

import {$getRoot, $getSelection} from 'lexical';
import {$createParagraphNode, $createTextNode} from 'lexical';
import {useEffect} from 'react';
import {$createHeadingNode, $createQuoteNode} from '@lexical/rich-text';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import PlaygroundNodes from './RegisteredNodes'

// import ContentEditable from '@blog/lexical-elements/ui/ContentEditable';
import Placeholder from '@blog/lexical-elements/ui/Placeholder';

const theme = {
 ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph"
}

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}
const text = 'Enter some plain text...';

const placeholder = <Placeholder>{text}</Placeholder>
function prepopulatedRichText() {
   const root = $getRoot();
  if (root.getFirstChild() === null) {
     const heading = $createHeadingNode('h1')
     heading.append($createTextNode('Welcome to the playground'))
     root.append(heading)
   }

}

const shitt =
    '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'

export function PlainEditor():JSX.Element {
  const initialConfig = {
      editorState: prepopulatedRichText,
      namespace: 'MyEditor',
      nodes: [...PlaygroundNodes],
      theme,
      onError,
  }
  // function Placeholder() {
  //     return <div className="editor-placeholder">Enter some plain text...</div>
  // }

  return (
      <LexicalComposer initialConfig={initialConfig}>
          <PlainTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
          />

          {/* <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin /> */}
      </LexicalComposer>
  )
}