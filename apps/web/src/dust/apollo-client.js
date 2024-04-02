import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
// import pkg from '@apollo/client'
// const { ApolloClient, InMemoryCache, createHttpLink, gql } = pkg
// import { setContext } from '@apollo/client/link/context/index.js'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    // echo 'export NEXT_PUBLIC_FAUNA_SECRET=fnAFCPnDBGAAQXiWC7qfAtMOdgoNRpF-NR93mPag' | sudo tee -a ~/.bashrc
    // Uncomment the appropriate line according to the
    // region group where you created your database.
    uri: 'https://graphql.us.fauna.com/graphql',
    // uri: 'https://graphql.eu.fauna.com/graphql',
    // uri: 'https://graphql.us.fauna.com/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = process.env.NEXT_PUBLIC_FAUNA_SECRET
    // echo $NEXT_PUBLIC_FAUNA_SECRET
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            // authorization: token ? `Bearer fnAFCPnDBGAAQXiWC7qfAtMOdgoNRpF - NR93mPag` : '',
            authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET}`,
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client

// client
//     .query(
//         // q.Get(q.Ref(q.Collection('customers'), '101'))
//         {
//             query: gql`
//                 query FindAllCustomers {
//                     allProducts {
//                         data {
//                             _id
//                             name
//                             description
//                         }
//                     }
//                 }
//             `,
//         }
//     )
//     .then((result) => console.log(result))
