"use client"

import { ChatbotUIContext } from "@/context/context"
import { useContext } from "react"
import { ToggleSwitch } from "@/components/utility/toggle-switch"

export default function WorkspacePage() {
  const { selectedWorkspace } = useContext(ChatbotUIContext)

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="text-4xl">{selectedWorkspace?.name}</div>
      </div>
      <div className="relative flex h-full flex-col items-center justify-center">
        {/* Toggle Switch centered at the top */}
        <div className="absolute inset-x-0 top-5 flex justify-center">
          <ToggleSwitch />
        </div>
      </div>
    </>
  )
}
