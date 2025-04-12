import { MdxComponents } from '@/lib/components/MDX/MDXComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'
export default function CustomMDX(props) {
    return (
        <MDXRemote
            {...props}
            components={{ ...MdxComponents, ...(props.components || {}) }}
        />
    )
}