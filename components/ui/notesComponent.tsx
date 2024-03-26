import React from "react"
import TailwindEditor from "./editor"
import TextEditor from "./tip-editor"

const NotesComponent: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4 py-4 sm:px-5">
        <TextEditor />
      </div>
    </div>
  )
}
export default NotesComponent
