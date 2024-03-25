"use client"
import React, { Children, useState } from "react"
import NotesComponent from "@/components/ui/notesComponent"
import { ToggleSwitch } from "@/components/utility/toggle-switch"
import WorkspaceLayout from "@/app/[locale]/[workspaceid]/layout"
import { Dashboard } from "@/components/ui/dashboard"

export default function NotesPage() {
  const [showNotes, setShowNotes] = useState(false)

  const handleToggle = (toggled: boolean) => {
    setShowNotes(toggled)
  }

  return (
    <>
      <div>
        <NotesComponent />
        <ToggleSwitch onToggle={handleToggle} />
      </div>
    </>
  )
}
