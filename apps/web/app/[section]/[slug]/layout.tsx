// import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { LexicalComposer } from '@/components/Lexical/LexicalComposerWrapper'
import { initialConfig } from '@/components/Lexical/LexicalEditor'

import ContentEditableProvider from '@/components/Lexical/ContentEditableProvider'
export default function SlugLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LexicalComposer initialConfig={initialConfig}>
            <ContentEditableProvider>{children}</ContentEditableProvider>
        </LexicalComposer>
    )
}
