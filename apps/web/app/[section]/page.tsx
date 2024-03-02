import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
// import { promises as fs } from 'fs'
import fs from 'fs'
import path from 'path'

export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string }
    searchParams: { [key: string]: string | string[] | undefined }
    }) {
    const sss = params.section
    const dir = path.join(process.cwd(), './content/', `${params.section}`)
    const filenames = fs.readdirSync(dir)
    const file = fs.readFileSync(
        dir,
        'utf8'
    )
    const listItems = filenames.map((filename) => <li>{filename}</li>)
    // const markdown = await serialize(file)

    // return <div>{mdxSource}</div>
   
    
    return (
        
        <div className="flex content-center items-center">
            <ul>{listItems}</ul>
        </div>
    )
}
