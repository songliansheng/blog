'use client'
import { createContext, ReactElement, useRef, useState } from 'react'

// const ContentEditableRef = useRef<HTMLElement>()

export default function TargetedCommentProvider({ children }: { children: React.ReactNode }) {
    const [TargetedComment, setTargetedComment] = useState<string>()
    const TargetedCommentContext = createContext({})
    return (
        <TargetedCommentContext.Provider
            value={{TargetedComment, setTargetedComment}}
        >
            {children}
        </TargetedCommentContext.Provider>
    )
}
