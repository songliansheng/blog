'use client'
// "use server"
import { run } from '@mdx-js/mdx'
import {MDXProvider} from '@mdx-js/react'
import {Fragment,  useEffect ,useState} from 'react'
import * as runtime from 'react/jsx-runtime'
export default function Toc({ mdx }: { mdx }) {
    const [mdxModule, setMdxModule] = useState()
  const Content = mdxModule ? mdxModule.default : Fragment
    useEffect(
    function () {
      ;(async function () {
        setMdxModule(await run( mdx, {...runtime, baseUrl: import.meta.url}))
      })()
    },
    [mdx ]
  )
//    const { default: Content } = await run(mdx, { ...runtime, baseUrl: import.meta.url })
    
    // console.log(Content)
    return<><Content /></>
}