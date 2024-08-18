import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import { auth } from 'auth'
// import { LoginForm } from '@/components/LoginForm'
import LoginForm from '@/components/LoginForm'
import Redirect from '@/components/Redirect'
import Stopwatch from '@/components/Demo/Stopwatch'


// import { redirect } from 'next/navigation'

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
    
    // return <>You have to login</>
    if (params.section === 'test') return (
        <>
            <Redirect message="You have loged in" link="/" />
        </>
    )
    // if (session) {
    //     const dir = path.join(process.cwd(), './content/', `${params.section}`)
    //     const filenames = fs.readdirSync(dir)

    //     const listItems = filenames.map((filename) => <li>{filename}</li>)

    //     return (
    //         <div
    //             id="section"
    //             className="max-w-7xl mx-auto"
    //         >
    //             <ul>{listItems}</ul>
    //         </div>
    //     )
    // } else {
    //     // redirect('/login')
    //     return <>You have to login</>
    // }
     return (
         <main className="max-w-7xl mx-auto">
             <header>
                 <h1 className="text-5xl pb-8">Posts</h1>
                 <p>Open source projects I've made </p>
             </header>
         </main>
     )
}
