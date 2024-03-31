import { compileMDX } from 'next-mdx-remote/rsc'
import { MdxComponents } from '@/components/MDX/MDXComponents'
import remarkHeadings from '@vcarl/remark-headings'
import remarkHeadingId from '@@/plugins/remark-heading-id'
import { compile } from '@mdx-js/mdx'
import rehypeToc from '@jsdevtools/rehype-toc'

//The order of Plugins matters
const REMARK_PLUGINS = [remarkHeadingId]
const REHYPE_PLUGINS = []
const mdxOptions = {
    remarkPlugins: REMARK_PLUGINS,
    rehypePlugins: REHYPE_PLUGINS,
}
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

export async function NativeCompile({ mdx }: { mdx: string }) {
    const content = await compile(mdx, mdxOptions)
    // var compiledJsx = new Function(content.value as string)

    console.log(content.data.headings)
    return { content }
}
export async function CompileToc({ mdx }: { mdx: string }) {
    const content = await compile(mdx, mdxOptions)
    // content.data.headings

    console.log(content)
    return { content }
}

export default async function compileMdx({ mdx }: { mdx: string }) {
    const { content } = await compileMDX({
        source: mdx,
        options: {
            mdxOptions: {
                remarkPlugins: REMARK_PLUGINS,
                rehypePlugins: REHYPE_PLUGINS,
            },
        },
        components: MdxComponents,
    })
    // const {
    //     data: { headings },
    // } = await compile(mdx, mdxOptions)
    const Vfile = await compile(mdx, {
        remarkPlugins: [...REMARK_PLUGINS, remarkHeadings],
        rehypePlugins: REHYPE_PLUGINS,
    })
    console.log(Vfile.data.headings)
    return { content, headings:Vfile.data.headings }
}
