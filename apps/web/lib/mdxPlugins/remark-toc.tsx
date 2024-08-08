import { toc } from 'mdast-util-toc'
/* TODO Complete this !!! 
*
*/
export default function remarkToc({ tree, options }) {
    const settings = {
        ...options,
        heading:
            (options && options.heading) || '(table[ -]of[ -])?contents?|toc',
        tight:
            options && typeof options.tight === 'boolean'
                ? options.tight
                : true,
    }

    return function (tree) {
        const result = toc(tree, settings)

        if (
            result.endIndex === undefined ||
            result.endIndex === -1 ||
            result.index === undefined ||
            result.index === -1 ||
            !result.map
        ) {
            return
        }

        // tree.children = [
        //     ...tree.children.slice(0, result.index),
        //     result.map,
        //     ...tree.children.slice(result.endIndex),
        // ]

        // trim a mdast to toc only
        tree.children = [result.map]
    }
}
