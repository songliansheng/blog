import { getClient } from '@/app/ApolloClient-RSC'
import { gql } from '@apollo/client'
import LexicalComposer from './LexicalComposer'
// import { LexicalComposer } from '@lexical/react/LexicalComposer'

import { LexicalEditor, initialConfig } from '@/app/components/LexicalEditor'
import { getPostByID } from 'utils/gql'

const getPostById = gql`
    query FindAllCustomers($slug: ID!) {
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
    const { loading, error, data } = await getClient().query({
        query: getPostByID,
        variables: params,
    })
    console.log("Begin Fetch Post",data.findProductByID.description)
    return (
        <>
            <LexicalComposer
                initialConfig={{
                    ...initialConfig,
                    onError: (err) => console.log(err),
                    editorState: data.findProductByID.description,
                }}
            >
                <LexicalEditor />
            </LexicalComposer>
        </>
    )
}
