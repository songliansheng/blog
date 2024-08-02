'use client'
import { createContext, ReactElement, useRef } from 'react'

// const ContentEditableRef = useRef<HTMLElement>()

export default function ContentEditableProvider({
    children,
}: {
    children: React.ReactNode
    }) {
    const ContentEditableRef = useRef<ReactElement>()
     const ContentEditableContext = createContext(useRef<ReactElement>())
    return (
        <ContentEditableContext.Provider value={ContentEditableRef}>
            {children}
        </ContentEditableContext.Provider>
    )
}
