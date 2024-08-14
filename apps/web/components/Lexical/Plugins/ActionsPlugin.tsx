import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { Button } from '@/components/Button'
import { commentIcon, lightIcon } from '@/components/Icons'
export function ActionsMenu({ submitContent }): JSX.Element {
    const [editor] = useLexicalComposerContext()
    // const commentInputBox = document.getElementById('default-comment-box')

    return (
        <div id="editor-actions" className="hidden">
            <Button onClick={submitContent}>{commentIcon}Reply</Button>
        </div>
    )
}
