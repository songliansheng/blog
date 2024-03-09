import { toc } from 'mdast-util-toc'
export default function tocFromMdast({ mdast, options }) {
    const settings = {
        ...options,
        heading:
            (options && options.heading) || '(table[ -]of[ -])?contents?|toc',
        tight:
            options && typeof options.tight === 'boolean'
                ? options.tight
                : true,
    }
    const result = toc(mdast, settings)
    mdast.children = [result.map]
    return mdast
}