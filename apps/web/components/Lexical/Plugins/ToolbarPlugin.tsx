import { Button } from "@/components/Button"
import { ChevronDownIcon } from "@/components/Icons"
import { INSERT_HORIZONTAL_RULE_COMMAND } from '@lexical/react/LexicalHorizontalRuleNode'
import { useLexicalComposerContext } from '@/components/Lexical/LexicalComposerWrapper'
export default function ToolbarPlugin({ className }) {
    const [editor] = useLexicalComposerContext()
   
    return (
        <div
            id="lexical-toolbar"
            className={
                `${className}` +
                'sticky top-12 z-50 flex flex-row justify-start w-full dark:bg-[theme(`colors.licorice-light`)]'
            }
        >
            <Button>Bold</Button>
            <Button className="flex items-center">
                <span>Aa</span>
                {ChevronDownIcon}
            </Button>
            <Button
                className="flex items-center"
                onClick={() => {
                    editor.dispatchCommand(
                        INSERT_HORIZONTAL_RULE_COMMAND,
                        undefined
                    )
                }}
            >
                <span>Insert</span>
                {ChevronDownIcon}
            </Button>
        </div>
    )
}