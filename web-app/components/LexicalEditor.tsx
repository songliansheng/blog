/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use client'

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { CharacterLimitPlugin } from '@lexical/react/LexicalCharacterLimitPlugin'
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin'
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin'
import { CollaborationPlugin } from '@lexical/react/LexicalCollaborationPlugin'
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

//import { createWebsocketProvider } from '../../lexical-elements/collaboration'
import { createWebsocketProvider } from '@blog/lexical-elements/collaboration'

import { useSettings } from '@blog/lexical-elements/context/SettingsContext'
import { useSharedHistoryContext } from '@blog/lexical-elements/context/SharedHistoryContext'
import TableCellNodes from '@blog/lexical-elements/nodes/TableCellNodes'
import ActionsPlugin from '@blog/lexical-elements/plugins/ActionsPlugin'
import AutocompletePlugin from '@blog/lexical-elements/plugins/AutocompletePlugin'
import AutoEmbedPlugin from '@blog/lexical-elements/plugins/AutoEmbedPlugin'
import AutoLinkPlugin from '@blog/lexical-elements/plugins/AutoLinkPlugin'
import ClickableLinkPlugin from '@blog/lexical-elements/plugins/ClickableLinkPlugin'
import CodeActionMenuPlugin from '@blog/lexical-elements/plugins/CodeActionMenuPlugin'
import CodeHighlightPlugin from '@blog/lexical-elements/plugins/CodeHighlightPlugin'
import CollapsiblePlugin from '@blog/lexical-elements/plugins/CollapsiblePlugin'
import CommentPlugin from '@blog/lexical-elements/plugins/CommentPlugin'
import ComponentPickerPlugin from '@blog/lexical-elements/plugins/ComponentPickerPlugin'
import DragDropPaste from '../../lexical-elements/plugins/DragDropPastePlugin'
import DraggableBlockPlugin from '../../lexical-elements/plugins/DraggableBlockPlugin'
import EmojiPickerPlugin from '../../lexical-elements/plugins/EmojiPickerPlugin'
import EmojisPlugin from '../../lexical-elements/plugins/EmojisPlugin'
import EquationsPlugin from '../../lexical-elements/plugins/EquationsPlugin'
import ExcalidrawPlugin from '../../lexical-elements/plugins/ExcalidrawPlugin'
import FigmaPlugin from '../../lexical-elements/plugins/FigmaPlugin'
import FloatingLinkEditorPlugin from '../../lexical-elements/plugins/FloatingLinkEditorPlugin'
import FloatingTextFormatToolbarPlugin from '../../lexical-elements/plugins/FloatingTextFormatToolbarPlugin'
import HorizontalRulePlugin from '../../lexical-elements/plugins/HorizontalRulePlugin'
import ImagesPlugin from '../../lexical-elements/plugins/ImagesPlugin'
import KeywordsPlugin from '../../lexical-elements/plugins/KeywordsPlugin'
import LinkPlugin from '../../lexical-elements/plugins/LinkPlugin'
import ListMaxIndentLevelPlugin from '../../lexical-elements/plugins/ListMaxIndentLevelPlugin'
import MarkdownShortcutPlugin from '../../lexical-elements/plugins/MarkdownShortcutPlugin'
import { MaxLengthPlugin } from '../../lexical-elements/plugins/MaxLengthPlugin'
import MentionsPlugin from '../../lexical-elements/plugins/MentionsPlugin'
import PollPlugin from '../../lexical-elements/plugins/PollPlugin'
import SpeechToTextPlugin from '../../lexical-elements/plugins/SpeechToTextPlugin'
import TabFocusPlugin from '../../lexical-elements/plugins/TabFocusPlugin'
import TableCellActionMenuPlugin from '../../lexical-elements/plugins/TableActionMenuPlugin'
import TableCellResizer from '../../lexical-elements/plugins/TableCellResizer'
import TableOfContentsPlugin from '../../lexical-elements/plugins/TableOfContentsPlugin'
import { TablePlugin as NewTablePlugin } from '../../lexical-elements/plugins/TablePlugin'
import ToolbarPlugin from '../../lexical-elements/plugins/ToolbarPlugin'
import TreeViewPlugin from '../../lexical-elements/plugins/TreeViewPlugin'
import TwitterPlugin from '../../lexical-elements/plugins/TwitterPlugin'
import YouTubePlugin from '../../lexical-elements/plugins/YouTubePlugin'
import PlaygroundEditorTheme from '../../lexical-elements/themes/PlaygroundEditorTheme'
import ContentEditable from '../../lexical-elements/ui/ContentEditable'
import Placeholder from '../../lexical-elements/ui/Placeholder'

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
                <CommentPlugin
                    providerFactory={
                        isCollab ? createWebsocketProvider : undefined
                    }
                />
                {isRichText ? (
                    <>
                        {isCollab ? (
                            <CollaborationPlugin
                                id="main"
                                providerFactory={createWebsocketProvider}
                                shouldBootstrap={!skipCollaborationInit}
                            />
                        ) : (
                            <HistoryPlugin
                                externalHistoryState={historyState}
                            />
                        )}
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
                        <TwitterPlugin />
                        <YouTubePlugin />
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
