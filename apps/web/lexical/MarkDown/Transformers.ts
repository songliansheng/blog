import { LexicalNode, LineBreakNode, $isLineBreakNode } from 'lexical'
import { $createHorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
import {
    HorizontalRuleNode,
    $isHorizontalRuleNode,
} from '@lexical/react/LexicalHorizontalRuleNode'
import {
    $isQuoteNode,
    HeadingNode,
    $isHeadingNode,
    QuoteNode,
    $createQuoteNode,
    $createHeadingNode,
} from '@lexical/rich-text'

/* MARK
 * ELEMENT_TRANSFORMERS: HEADING,QUOTE,UNORDERED_LIST,ORDERED_LIST
 * MULTILINE_ELEMENT_TRANSFORMERS:CODE
 * TEXT_FORMAT_TRANSFORMERS:INLINE_CODE,BOLD_ITALIC_STAR,BOLD_ITALIC_UNDERSCORE,BOLD_STAR,BOLD_UNDERSCORE,HIGHLIGHT,ITALIC_STAR,ITALIC_UNDERSCORE,STRIKETHROUGH,
 * TEXT_MATCH_TRANSFORMERS: LINK
 */
import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    ElementTransformer,
    Transformer,
} from '@lexical/markdown'
import { TRANSFORMERS as BUILTINTRANSFORMERS } from '@lexical/markdown'
const createBlockNode = (createNode:any) => {
    return (parentNode:any, children:any, match:any) => {
        const node = createNode(match)
        node.append(...children)
        parentNode.replace(node)
        node.select(0, 0)
    }
}

const HR: ElementTransformer = {
    dependencies: [HorizontalRuleNode],
    export: (node: LexicalNode) => {
        return $isHorizontalRuleNode(node) ? '***' : null
    },
    regExp: /^(---|\*\*\*|___)\s?$/,
    replace: (parentNode, _1, _2, isImport) => {
        const line = $createHorizontalRuleNode()

        // TODO: Get rid of isImport flag
        if (isImport || parentNode.getNextSibling() != null) {
            parentNode.replace(line)
        } else {
            parentNode.insertBefore(line)
        }

        line.selectNext()
    },
    type: 'element',
}

export const TRANSFORMERS: Array<Transformer> = [HR, ...BUILTINTRANSFORMERS]
