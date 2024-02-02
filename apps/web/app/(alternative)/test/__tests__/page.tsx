'use client'
// import { getClient } from '@/app/ApolloClient'
import { gql, useQuery } from '@apollo/client'

import { createHeadlessEditor } from '@lexical/headless'
// import { getPostByID } from 'utils/gql'

const getPostByID = gql`
    query findProductByID {
        findProductByID(id: $slug) {
            description
        }
    }
`
export default async function Page({
    params,
    searchParams,
}: {
    params: { slug: number }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const { loading, error, data } = useQuery(getPostByID, {
        variables: params,
    })
    if (loading) return <div className="text-black">Loading...</div>
    if (error) {
        console.error(error)
        return <div>Error!</div>
    }
    console.log('Another Log', data, 'Another end')
    return <div className='text-black'>{data}</div>
}
