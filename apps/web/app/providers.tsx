'use client'
import { createContext } from 'react'
// ALERT supbase client in ssr only work in server side
import { createServersideClient as createSupabaseClient } from '@/lib/supabase-client'
export const SupbaseClientContext = createContext({})
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SupbaseClientContext.Provider value={createSupabaseClient()}>
            {children}
        </SupbaseClientContext.Provider>
    )
}
