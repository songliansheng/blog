'use client'
// ^ this file needs the "use client" pragma
import { setContext } from '@apollo/client/link/context'
import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    SuspenseCache,
} from '@apollo/client'
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

// have a function to create a client for you
function makeClient() {
    const httpLink = new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: 'https://example.com/api/graphql',
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        fetchOptions: { cache: 'no-store' },
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

    return new ApolloClient({
        // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      // in a SSR environment, if you use multipart features like
                      // @defer, you need to decide how to handle these.
                      // This strips all interfaces with a `@defer` directive from your queries.
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      authLink.concat(httpLink),
                  ])
                : authLink.concat(httpLink),
    })
}

// also have a function to create a suspense cache
function makeSuspenseCache() {
    return new SuspenseCache()

}
const suspenseCache = new SuspenseCache()

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }) {
    return (
        <ApolloNextAppProvider
            makeClient={makeClient}
            makeSuspenseCache={makeSuspenseCache}
        >
            {children}
        </ApolloNextAppProvider>
    )
}
