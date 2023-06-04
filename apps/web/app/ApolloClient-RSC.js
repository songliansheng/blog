import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { setContext } from '@apollo/client/link/context'
const httpLink = createHttpLink({
    uri: 'https://graphql.us.fauna.com/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = process.env.NEXT_PUBLIC_FAUNA_SECRET
    return {
        headers: {
            ...headers, 
            authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET}`,
        },
    }
})

const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
    })
})

export {getClient}