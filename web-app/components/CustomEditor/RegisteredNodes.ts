/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Klass, LexicalNode } from 'lexical'

import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { HashtagNode } from '@lexical/hashtag'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { MarkNode } from '@lexical/mark'
import { OverflowNode } from '@lexical/overflow'
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'

import { CollapsibleContainerNode } from '@blog/lexical-elements/plugins/CollapsiblePlugin/CollapsibleContainerNode'
import { CollapsibleContentNode } from '@blog/lexical-elements/plugins/CollapsiblePlugin/CollapsibleContentNode'
import { CollapsibleTitleNode } from '@blog/lexical-elements/plugins/CollapsiblePlugin/CollapsibleTitleNode'
import { AutocompleteNode } from '@blog/lexical-elements/nodes/AutocompleteNode'
import { EmojiNode } from '@blog/lexical-elements/nodes/EmojiNode'
import { EquationNode } from '@blog/lexical-elements/nodes/EquationNode'
import { ExcalidrawNode } from '@blog/lexical-elements/nodes/ExcalidrawNode'
import { FigmaNode } from '@blog/lexical-elements/nodes/FigmaNode'
import { ImageNode } from '@blog/lexical-elements/nodes/ImageNode'
import { KeywordNode } from '@blog/lexical-elements/nodes/KeywordNode'
import { MentionNode } from '@blog/lexical-elements/nodes/MentionNode'
import { PollNode } from '@blog/lexical-elements/nodes/PollNode'
import { StickyNode } from '@blog/lexical-elements/nodes/StickyNode'
import { TableNode as NewTableNode } from '@blog/lexical-elements/nodes/TableNode'
import { TweetNode } from '@blog/lexical-elements/nodes/TweetNode'
import { YouTubeNode } from '@blog/lexical-elements/nodes/YouTubeNode'

const PlaygroundNodes: Array<Klass<LexicalNode>> = [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    NewTableNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    HashtagNode,
    CodeHighlightNode,
    AutoLinkNode,
    LinkNode,
    OverflowNode,
    PollNode,
    StickyNode,
    ImageNode,
    MentionNode,
    EmojiNode,
    ExcalidrawNode,
    EquationNode,
    AutocompleteNode,
    KeywordNode,
    HorizontalRuleNode,
    TweetNode,
    YouTubeNode,
    FigmaNode,
    MarkNode,
    CollapsibleContainerNode,
    CollapsibleContentNode,
    CollapsibleTitleNode,
]

export default PlaygroundNodes
