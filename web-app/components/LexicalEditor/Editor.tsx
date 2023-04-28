// 'use client'
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { CharacterLimitPlugin } from '@lexical/react/LexicalCharacterLimitPlugin'
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin'
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin'
// import {CollaborationPlugin} from '@lexical/react/LexicalCollaborationPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin'
import { TablePlugin } from '@lexical/react/LexicalTablePlugin'
import * as React from 'react'
import { useState } from 'react'

// import {createWebsocketProvider} from './collaboration';
import { useSettings } from './context/SettingsContext'
import { useSharedHistoryContext } from './context/SharedHistoryContext'
import TableCellNodes from '@blog/lexical-elements/nodes/TableCellNodes'
// import ActionsPlugin from '@blog/lexical-elements/plugins/ActionsPlugin'
import { ActionsPlugin } from './Plugins'
import AutocompletePlugin from '@blog/lexical-elements/plugins/AutocompletePlugin'
import AutoEmbedPlugin from '@blog/lexical-elements/plugins/AutoEmbedPlugin'
import AutoLinkPlugin from '@blog/lexical-elements/plugins/AutoLinkPlugin'
import ClickableLinkPlugin from '@blog/lexical-elements/plugins/ClickableLinkPlugin'
// import CodeActionMenuPlugin from '@blog/lexical-elements/plugins/CodeActionMenuPlugin'
import { CodeActionMenuPlugin } from './Plugins'
import CodeHighlightPlugin from '@blog/lexical-elements/plugins/CodeHighlightPlugin'
import CollapsiblePlugin from '@blog/lexical-elements/plugins/CollapsiblePlugin'
import CommentPlugin from '@blog/lexical-elements/plugins/CommentPlugin'
import ComponentPickerPlugin from '@blog/lexical-elements/plugins/ComponentPickerPlugin'
import DragDropPaste from '@blog/lexical-elements/plugins/DragDropPastePlugin'
import DraggableBlockPlugin from '@blog/lexical-elements/plugins/DraggableBlockPlugin'
import EmojiPickerPlugin from '@blog/lexical-elements/plugins/EmojiPickerPlugin'
import EmojisPlugin from '@blog/lexical-elements/plugins/EmojisPlugin'
import EquationsPlugin from '@blog/lexical-elements/plugins/EquationsPlugin'
import ExcalidrawPlugin from '@blog/lexical-elements/plugins/ExcalidrawPlugin'
import FigmaPlugin from '@blog/lexical-elements/plugins/FigmaPlugin'
import FloatingLinkEditorPlugin from '@blog/lexical-elements/plugins/FloatingLinkEditorPlugin'
import FloatingTextFormatToolbarPlugin from '@blog/lexical-elements/plugins/FloatingTextFormatToolbarPlugin'
import HorizontalRulePlugin from '@blog/lexical-elements/plugins/HorizontalRulePlugin'
import ImagesPlugin from '@blog/lexical-elements/plugins/ImagesPlugin'
import KeywordsPlugin from '@blog/lexical-elements/plugins/KeywordsPlugin'
import LinkPlugin from '@blog/lexical-elements/plugins/LinkPlugin'
import ListMaxIndentLevelPlugin from '@blog/lexical-elements/plugins/ListMaxIndentLevelPlugin'
import MarkdownShortcutPlugin from '@blog/lexical-elements/plugins/MarkdownShortcutPlugin'
import { MaxLengthPlugin } from '@blog/lexical-elements/plugins/MaxLengthPlugin'
import MentionsPlugin from '@blog/lexical-elements/plugins/MentionsPlugin'
import PollPlugin from '@blog/lexical-elements/plugins/PollPlugin'
import SpeechToTextPlugin from '@blog/lexical-elements/plugins/SpeechToTextPlugin'
// import SpeechToTextPlugin from './SpeechToTextPlugin'
import TabFocusPlugin from '@blog/lexical-elements/plugins/TabFocusPlugin'
import TableCellActionMenuPlugin from '@blog/lexical-elements/plugins/TableActionMenuPlugin'
import TableCellResizer from '@blog/lexical-elements/plugins/TableCellResizer'
import TableOfContentsPlugin from '@blog/lexical-elements/plugins/TableOfContentsPlugin'
import { TablePlugin as NewTablePlugin } from '@blog/lexical-elements/plugins/TablePlugin'
import ToolbarPlugin from '@blog/lexical-elements/plugins/ToolbarPlugin'
import TreeViewPlugin from '@blog/lexical-elements/plugins/TreeViewPlugin'
// import TwitterPlugin from '@blog/lexical-elements/plugins/TwitterPlugin';
// import YouTubePlugin from '@blog/lexical-elements/plugins/YouTubePlugin';
import PlaygroundEditorTheme from '@blog/lexical-elements/themes/PlaygroundEditorTheme'
import ContentEditable from '@blog/lexical-elements/ui/ContentEditable'
import Placeholder from '@blog/lexical-elements/ui/Placeholder'

const skipCollaborationInit =
    // @ts-ignore
    window.parent != null && window.parent.frames.right === window

export default function Editor(): JSX.Element {
    const { historyState } = useSharedHistoryContext()
    const {
        settings: {
            isCollab,
            isAutocomplete,
            isMaxLength,
            isCharLimit,
            isCharLimitUtf8,
            isRichText,
            showTreeView,
            showTableOfContents,
        },
    } = useSettings()
    const text = isCollab
        ? 'Enter some collaborative rich text...'
        : isRichText
        ? 'Enter some rich text...'
        : 'Enter some plain text...'
    const placeholder = <Placeholder>{text}</Placeholder>
    const [floatingAnchorElem, setFloatingAnchorElem] =
        useState<HTMLDivElement | null>(null)

    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem)
        }
    }

    const cellEditorConfig = {
        namespace: 'Playground',
        nodes: [...TableCellNodes],
        onError: (error: Error) => {
            throw error
        },
        theme: PlaygroundEditorTheme,
    }

    return (
        <>
            {isRichText && <ToolbarPlugin />}
            <div
                className={`editor-container ${
                    showTreeView ? 'tree-view' : ''
                } ${!isRichText ? 'plain-text' : ''}`}
            >
                {isMaxLength && <MaxLengthPlugin maxLength={30} />}
                <DragDropPaste />
                <AutoFocusPlugin />
                <ClearEditorPlugin />
                <ComponentPickerPlugin />
                <EmojiPickerPlugin />
                <AutoEmbedPlugin />
                <MentionsPlugin />
                <EmojisPlugin />
                <HashtagPlugin />
                <KeywordsPlugin />
                <SpeechToTextPlugin />
                <AutoLinkPlugin />
                <CommentPlugin providerFactory={undefined} />
                {isRichText ? (
                    <>
                        <HistoryPlugin externalHistoryState={historyState} />
                        <RichTextPlugin
                            contentEditable={
                                <div className="editor-scroller">
                                    <div className="editor" ref={onRef}>
                                        <ContentEditable />
                                    </div>
                                </div>
                            }
                            placeholder={placeholder}
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <MarkdownShortcutPlugin />
                        <CodeHighlightPlugin />
                        <ListPlugin />
                        <CheckListPlugin />
                        <ListMaxIndentLevelPlugin maxDepth={7} />
                        <TablePlugin />
                        <TableCellResizer />
                        <NewTablePlugin cellEditorConfig={cellEditorConfig}>
                            <AutoFocusPlugin />
                            <RichTextPlugin
                                contentEditable={
                                    <ContentEditable className="TableNode__contentEditable" />
                                }
                                placeholder={null}
                                ErrorBoundary={LexicalErrorBoundary}
                            />
                            <MentionsPlugin />
                            <HistoryPlugin />
                            <ImagesPlugin captionsEnabled={false} />
                            <LinkPlugin />
                            <ClickableLinkPlugin />
                            <FloatingTextFormatToolbarPlugin />
                        </NewTablePlugin>
                        <ImagesPlugin />
                        <LinkPlugin />
                        <PollPlugin />

                        <FigmaPlugin />
                        <ClickableLinkPlugin />
                        <HorizontalRulePlugin />
                        <EquationsPlugin />
                        <ExcalidrawPlugin />
                        <TabFocusPlugin />
                        <TabIndentationPlugin />
                        <CollapsiblePlugin />
                        {floatingAnchorElem && (
                            <>
                                <DraggableBlockPlugin
                                    anchorElem={floatingAnchorElem}
                                />
                                <CodeActionMenuPlugin
                                    anchorElem={floatingAnchorElem}
                                />
                                <FloatingLinkEditorPlugin
                                    anchorElem={floatingAnchorElem}
                                />
                                <TableCellActionMenuPlugin
                                    anchorElem={floatingAnchorElem}
                                />
                                <FloatingTextFormatToolbarPlugin
                                    anchorElem={floatingAnchorElem}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <PlainTextPlugin
                            contentEditable={<ContentEditable />}
                            placeholder={placeholder}
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <HistoryPlugin externalHistoryState={historyState} />
                    </>
                )}
                {(isCharLimit || isCharLimitUtf8) && (
                    <CharacterLimitPlugin
                        charset={isCharLimit ? 'UTF-16' : 'UTF-8'}
                        maxLength={5}
                    />
                )}
                {isAutocomplete && <AutocompletePlugin />}
                <div>{showTableOfContents && <TableOfContentsPlugin />}</div>
                <ActionsPlugin isRichText={isRichText} />
            </div>
            {showTreeView && <TreeViewPlugin />}
        </>
    )
}
