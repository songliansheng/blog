// import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { LexicalComposer } from '@/components/Lexical/LexicalComposerWrapper'
import { initialConfig } from '@/components/Lexical/LexicalEditor'
import Editor from '@/components/Lexical/LexicalEditor'
export default function SlugLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
       
            <LexicalComposer initialConfig={initialConfig}>
                <Editor />
                {children}
            </LexicalComposer>
       
    )
}
