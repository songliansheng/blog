// import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { LexicalComposer } from '@/lib/components/Lexical/LexicalComposerWrapper'
import { initialConfig } from '@/lib/components/Lexical/LexicalEditor'

import ContentEditableProvider from '@/lib/components/Lexical/ContentEditableProvider'
import TargetedCommentProvider from '@/lib/components/Comments/TargetedCommentProvider'
export default function SlugLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LexicalComposer initialConfig={initialConfig}>
            <TargetedCommentProvider>{children}</TargetedCommentProvider>
        </LexicalComposer>
    )
}
