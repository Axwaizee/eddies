import { Editor } from "@tiptap/react";
import { capitalize, cn } from "../utils";
import { BubbleMenuItem } from "./bubble-menu";

export default function BubbleButton({
  item,
  editor,
  contextVariant = false,
}: {
  item: BubbleMenuItem;
  editor: Editor;
  contextVariant?: boolean;
}) {
  console.log(editor);
  const run = () =>
    //@ts-ignore
    editor.chain().focus()[`toggle${capitalize(item.name)}`]().run();

  return (
    <button
      onClick={run}
      className={`eddies-p-2 eddies-bg-color-bg-secondary eddies-text-color-text-secondary hover:eddies-bg-color-bg-secondary/40 h-10 w-10 ${
        contextVariant
          ? "eddies-rounded-md eddies-border eddies-border-border"
          : ""
      }`}
      type="button"
    >
      <item.icon
        className={cn("eddies-h-4 eddies-w-4", {
          "eddies-text-[#59cdb5]": editor.isActive(item.name),
        })}
      />
    </button>
  );
}
