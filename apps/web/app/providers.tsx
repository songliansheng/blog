'use client'
import { createContext,useState } from 'react'
import { SessionProvider } from 'next-auth/react'
/* ALERT supbase client in ssr only work in server side */
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
import { auth } from '@/auth.config'
// export const SupbaseClientContext = createContext({})
import {MDXProvider} from '@mdx-js/react'
const ShowContactMeContext = createContext({
   
})
const isEditableContext = createContext({})
export default function Providers({ children }: { children: React.ReactNode }) {
    const [showContactMe, setShowContactMe] = useState(true)
    const [isEditable, setIsEditable] = useState(null)
    
    return (
        // <SupbaseClientContext.Provider value={createSupabaseClient()}>
        <ShowContactMeContext.Provider
            value={{ showContactMe, setShowContactMe }}
        >
            <isEditableContext.Provider value={{ isEditable, setIsEditable }}> <MDXProvider >
                {/* <SessionProvider basePath={'/auth'} > */}
                {children}
                {/* </SessionProvider> */}
                 </MDXProvider>
            </isEditableContext.Provider>
        </ShowContactMeContext.Provider>
        // </SupbaseClientContext.Provider>
    )
}
export { ShowContactMeContext , isEditableContext}
