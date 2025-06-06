'use client'
import { createContext,Dispatch,SetStateAction,useState } from 'react'
import { SessionProvider } from 'next-auth/react'
/* CAUTION supbase client in ssr only work in server side */
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
import { auth } from '@/auth'
// export const SupbaseClientContext = createContext({})
import { MDXProvider } from '@mdx-js/react'
interface ShowContactMeContextType {
  showContactMe: boolean;
  setShowContactMe: Dispatch<SetStateAction<boolean>>;
}


const ShowContactMeContext = createContext<ShowContactMeContextType>({showContactMe: false, setShowContactMe: () => {}});
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
