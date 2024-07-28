// MARK Implement logic such as save editorState in a database
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useEffect } from 'react'
export default function OnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext()
    useEffect(() => {
        // most listeners return a teardown function that can be called to clean them up.
        return editor.registerUpdateListener(({ editorState }) => {
            // call onChange here to pass the latest state up to the parent.
            onChange(editorState)
        })
    }, [editor, onChange])
    return null
}
