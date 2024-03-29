import { toc } from 'mdast-util-toc'
// trim a mdast to toc only
export default function remarkToc(mdast) {
    return function (mdast) {
        const result = toc(mdast)
        // mdast.children = [result.map?.children]
        mdast.children = [result.map]
    }
}
