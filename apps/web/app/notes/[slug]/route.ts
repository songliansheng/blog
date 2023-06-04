// 'use client'
import { getClient } from '@/app/ApolloClient-RSC'
import { gql } from '@apollo/client'
import { createHeadlessEditor } from '@lexical/headless'
import { $generateHtmlFromNodes } from '@lexical/html'
import { getPostByID } from 'utils/gql'

const editor = createHeadlessEditor({
    nodes: [],
    onError: () => {},
})

export async function GET(request, context: { params }) {
    const slug = context.params.slug
    const { loading, error, data } = await getClient().query({
        query: getPostByID,
        variables: context.params,
    })
    console.log(data.findProductByID.description)
    editor.setEditorState(data.findProductByID.description)
    const htmlString = $generateHtmlFromNodes(editor, null)
    return htmlString
}
