"use client"

import {
  EditorContent,
  EditorRoot,
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem
} from "novel"
import { useState } from "react"
import { defaultExtensions } from "./extensions"
import { handleCommandNavigation } from "novel/extensions"
import { slashCommand, suggestionItems } from "./slash-command"

const TailwindEditor = () => {
  const [content, setContent] = useState({})
  const extensions = [...defaultExtensions, slashCommand]
  return (
    <EditorRoot>
      <EditorContent
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event)
          },
          attributes: {
            class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`
          }
        }}
      >
        <EditorCommand className="border-muted bg-background z-50  h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border px-1 py-2 shadow-md transition-all">
          <EditorCommandEmpty className="text-muted-foreground px-2">
            No results
          </EditorCommandEmpty>
          {suggestionItems.map(item => (
            <EditorCommandItem
              value={item.title}
              onCommand={val => item?.command(val)}
              className={`hover:bg-accent aria-selected:bg-accent flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm `}
              key={item.title}
            >
              <div className="border-muted bg-background flex size-10 items-center justify-center rounded-md border">
                {item.icon}
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-muted-foreground text-xs">
                  {item.description}
                </p>
              </div>
            </EditorCommandItem>
          ))}
        </EditorCommand>
      </EditorContent>
    </EditorRoot>
  )
}
export default TailwindEditor
