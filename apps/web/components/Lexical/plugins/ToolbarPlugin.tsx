import Button from "@/components/Button";
import { plusIcon, ChevronDownIcon } from "@/components/Icons";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";
import { useLexicalComposerContext } from "@/components/Lexical/LexicalComposerWrapper";
import DropDown, { DropDownItem } from "@/components/DropDown";
/* CONFIG👉 Lexical
 *
 * Steps to use commands :
 * createCommand('COMMAND_NAME') -> editor.registerCommand() -> editor.dispatchCommand()
 *
 * createCommand() is usually configured in Nodes/plugins ,
 * editor.registerCommand() is used in Plugins to define commands ,
 * editor.dispatchCommand() can be used in Event listener
 *
 */

export default function ToolbarPlugin({ className }) {
  const [editor] = useLexicalComposerContext();

  return (
    <div
      id="lexical-toolbar"
      className={`${className} sticky top-12 z-50 flex flex-row justify-start w-full dark:bg-[theme(colors.licorice-light)]`}
    >
      <Button>Bold</Button>
      <Button className="flex items-center">
        <span>Aa</span>
        {ChevronDownIcon}
      </Button>
      <DropDown
        dropDownItemsClassName={`dark:bg-[theme('colors.licorice')] flex flex-col`}
        buttonIcon={plusIcon}
        buttonLabel="Insert"
      >
        <DropDownItem
          className="p-2"
          onClick={() => {
            editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
          }}
          title="HORIZONTAL"
        >
          <span className="min-w-[10rem] inline-block text-left">
            Horizontal Rule
          </span>
        </DropDownItem>
        <DropDownItem
          className="p-2"
          onClick={() => {
            editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
          }}
          title="HORIZONTAL"
        >
          <span className="min-w-[10rem] inline-block text-left">Image</span>
        </DropDownItem>
      </DropDown>
    </div>
  );
}
