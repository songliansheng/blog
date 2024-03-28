// 'use client'
import compileMdx from './compileMdx'
import { MDXRemote } from 'next-mdx-remote'
import { NativeCompile } from './compileMdx'
import buildHeadings from '../../../utils/buildHeadingsMeta'
import Breadcrumbs from '@/components/Breadcrumb'

export default async function MainContent({ source }) {
    const { content } = await compileMdx({ mdx: source })
    // const  content  = await NativeCompile({ mdx: source })
    console.log(content)
    return <>{content}</>
}
export async function Content({ source }) {
    // const content = await compileMdx(source)
    const content2 = await compileMdx(source)
    console.log(content2)
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 sm:px-6 lg:pr-[19.5rem]">
            {/* <div className="max-w-7xl"> */}
            {/* <div className="break-words"> */}
            {/* <div className="sticky top-14">
                    <Breadcrumbs />
                    {content2}
                </div> */}
            {/* <>{content2}</> */}
            {/* </div> */}
        </div>
    )
}
