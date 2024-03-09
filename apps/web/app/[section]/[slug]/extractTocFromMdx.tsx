import { compileMDX } from 'next-mdx-remote/rsc'
import { toc } from 'mdast-util-toc'
// import toc from 'plugins/getTocFromMdast'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// trim a mdast to toc only
function toToc(mdast) {
    return function (mdast) {
        const result = toc(mdast)
        mdast.children = [result.map]
    }
}
export default async function getTocFromMdx(mdx: string) {
    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
    }
    const optionsForToc = {
        mdxOptions: {
            remarkPlugins: [toToc],
            rehypePlugins: [
                rehypeSlug,
                rehypeAutolinkHeadings,
                // [
                //     rehypeToc,
                //     {
                //         cssClasses: {
                //             position: 'beforeend',
                //             toc: 'sticky float-right top-10 right-24 w-80',
                //             link: 'page-link',
                //             customizeTOC: (toc) => {
                //                 return <div className="duration-300">{toc}</div>
                //             },
                //         },
                //     },
                // ],
            ],
        },
    }
    const { content: toc } = await compileMDX({
        source: mdx,
        options: optionsForToc,
    })
    const { content } = await compileMDX({
        source: mdx,
        options: options,
    })
    return {content,toc}
}
