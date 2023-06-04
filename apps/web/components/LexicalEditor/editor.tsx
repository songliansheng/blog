'use client'
import * as React from "react";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { $getRoot, $getSelection } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import useLexicalEditable from "@lexical/react/useLexicalEditable";

import { $createLinkNode } from "@lexical/link";
import { $createListItemNode, $createListNode } from "@lexical/list";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { $createParagraphNode, $createTextNode} from "lexical";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { AutoLinkNode, LinkNode } from "@lexical/link";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import { CharacterLimitPlugin } from "@lexical/react/LexicalCharacterLimitPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import LexicalClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";

import '@/app/globals.css'
import Toolbar from "./Toolbar";
// import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { useEffect, useState } from "react";


function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function LexicalEditor(): JSX.Element {
  // const isEditable = useLexicalEditable();
  // return (
  //   <div>Hello world</div>
  // );
  return (
      <>
          <div id="editor-wrapper" className="text-black">
              {/* <Toolbar /> */}
              {/* <HashtagPlugin /> */}
              <RichTextPlugin
                  contentEditable={<ContentEditable />}
                  placeholder={<div>Enter some text...</div>}
                  ErrorBoundary={LexicalErrorBoundary}
              />

              {/* <PlainTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        /> */}
              {/* <MyCustomAutoFocusPlugin /> */}
              {/* <HistoryPlugin /> */}
              {/* <MyCustomAutoFocusPlugin /> */}
              {/* <OnChangePlugin onChange={onChange} /> */}
              {/* <ActionsPlugin /> */}
          </div>
      </>
  )
}
export { LexicalEditor };
