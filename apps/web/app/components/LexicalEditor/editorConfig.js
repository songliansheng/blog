'use client'
import { ListItemNode, ListNode } from '@lexical/list'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { HashtagNode } from '@lexical/hashtag'
import { originalObl, serializedJson2 } from './prePopulateFn'

function onError(error) {
    console.error(error)
}
const initialConfig = {
    namespace: 'Editor',
    theme: {},
    // onError: (err) => console.log(err),
    // editorState: serializedJson2,
    nodes: [
        HashtagNode,
        HeadingNode,
        QuoteNode,
        ListItemNode,
        ListNode,
        AutoLinkNode,
        LinkNode,
    ],
}
export { initialConfig }
