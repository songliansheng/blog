import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import { auth } from 'auth'
import { LoginForm } from 'components/LoginForm'
import { VanillaForm } from 'components/LoginForm'
import { redirect } from 'next/navigation'

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
    const session = await auth()
    if (session) {
        const dir = path.join(process.cwd(), './content/', `${params.section}`)
        const filenames = fs.readdirSync(dir)

        const listItems = filenames.map((filename) => <li>{filename}</li>)

        return (
            <div className="flex content-center items-center">
                <ul>{listItems}</ul>
            </div>
        )
    } else {
        // redirect('/login')
        return <>You have to login</>
    }
}
