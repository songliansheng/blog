import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'

function addIdForNode(node) {}
function CreateTocNode(node) {
    return {
        value: toString(node),
        depth: node.depth,
        data: node.data,
        children: [],
    }
}
function BuildToc({ tocNode, parentNodes }) {
    const toc: string[] = []
    const isHeading = tocNode.depth == 2
    if (isHeading) {
        toc.push(tocNode)
        parentNodes[tocNode.depth] = tocNode
    } else {
        parentNodes[tocNode.depth - 1].children.push(tocNode)
        parentNodes[tocNode.depth] = tocNode
    }
    return toc
}
export default function Toc(nodes) {
    const parentNodes ={}
    visit(nodes, 'heading', (node) => {
        if (node.depth !== 1) {
            let tocNode = CreateTocNode(node)
            BuildToc({ tocNode, parentNodes })
        }
    })
}
