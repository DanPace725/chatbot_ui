"use client"
import { ToggleSwitch } from "@/components/utility/toggle-switch"
import React from "react"

const NotesPage = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-between">
        <div className="flex w-full justify-center pt-8"></div>
        <div className="text-4xl">Notes</div>
        <div></div>{" "}
        {/* This empty div ensures that the Notes div remains centered */}
      </div>
    </>
  )
}

export default NotesPage
