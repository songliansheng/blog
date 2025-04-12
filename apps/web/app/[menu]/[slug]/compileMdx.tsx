/* TODO Figure out how to use 'remark-heading-id'
 */
import { compileMDX } from 'remote-mdx/rsc'
import { MdxComponents } from '@/lib/components/MDX/MDXComponents'
import remarkHeadings from '@vcarl/remark-headings'
import remarkHeadingId from 'lib/mdxPlugins/remark-heading-id'
import remarkHeadingIds from 'remark-heading-id'
import { compile } from '@mdx-js/mdx'
import rehypeToc from '@jsdevtools/rehype-toc'

/* MARK
 *
 * The order of Plugins matters
 */
const REMARK_PLUGINS = [remarkHeadingId]
const REHYPE_PLUGINS = []

const Rehype_Toc_Plug = [
    rehypeToc,
    {
        cssClasses: {
            position: 'beforeend',
            toc: 'sticky float-right top-10 right-24 w-80',
            link: 'page-link',
            customizeTOC: (toc) => {
                return <div className="duration-300">{toc}</div>
            },
        },
    },
]

export default async function Compile({ mdxString }: { mdxString: string }) {
    const { content } = await compileMDX({
        source: mdxString,
        options: {
            mdxOptions: {
                remarkPlugins: REMARK_PLUGINS,
                rehypePlugins: REHYPE_PLUGINS,
            },
        },
        components: MdxComponents,
    })

    const {
        data: { headings },
    } = await compile(mdxString, {
        remarkPlugins: [...REMARK_PLUGINS, remarkHeadings],
        rehypePlugins: REHYPE_PLUGINS,
    })
    // console.log(headings)
    return { content, headings }
}
