"use client"
import React, { useState, useEffect } from "react" // Import useEffect
import { supabase } from "@/lib/supabase/browser-client" // Import supabase client
import { getProfileByUserId } from "@/db/profile" // Import the function to get user profile
import BNEditor from "./editor"
import { saveNotesAsMarkdown } from "@/db/files"
import dynamic from "next/dynamic"

const Editor = dynamic(() => import("./editor"), { ssr: false })

const NotesComponent: React.FC = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [markdownContent, setMarkdownContent] = useState("")
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    // Function to fetch user profile and set userId
    const fetchUserProfile = async () => {
      const session = supabase.auth.session()
      if (session) {
        const profile = await getProfileByUserId(session.user.id)
        setUserId(session.user.id) // Assuming getProfileByUserId does not throw an error
      }
    }

    fetchUserProfile()
  }, [])

  return (
    <div className="dark:bg-surface dark:text-foreground flex min-h-screen flex-col">
      <div className="py-8"></div> {/* Add space for the nav bar */}
      <h1 className="mb-4 text-center text-2xl font-bold">Notes</h1>
      <div className="flex grow items-center justify-center px-2">
        <div className="border-muted bg-secondary relative flex min-h-[500px] w-full max-w-screen-lg flex-col sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg">
          <div className="bg-secondary px-4 py-2">
            <input
              type="text"
              placeholder="Enter title..."
              className="text-foreground w-full border-none bg-transparent text-lg font-bold outline-none"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <Editor />
        </div>
      </div>
      <div className="flex justify-center py-2">
        <button
          className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded px-4 py-2 font-bold"
          onClick={() => saveNotesAsMarkdown(title, markdownContent)}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default NotesComponent
