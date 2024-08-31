import { HeadingNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { LineBreakNode } from 'lexical'
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
/* MARK
 * createCommand('COMMAND_NAME') is configured in Nodes
 *
 * editor.registerCommand() is used in Plugins
 *
 * editor.dispatchCommand() is used in Event listener */
const LixicalNodes = [
    HeadingNode,
    ListItemNode,
    ListNode,
    LineBreakNode,
    HorizontalRuleNode,
]
export default LixicalNodes
