import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import { LoginForm } from 'components/LoginForm'
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
    if (params.section === 'login') return <LoginForm />
    else {
        const dir = path.join(process.cwd(), './content/', `${params.section}`)
        const filenames = fs.readdirSync(dir)

        const listItems = filenames.map((filename) => <li>{filename}</li>)

        return (
            <div className="flex content-center items-center">
                <ul>{listItems}</ul>
            </div>
        )
    }
}
