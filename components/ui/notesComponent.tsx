import React from "react"

/**
 * The notes component.
 *
 * This component displays the "Notes" label in a styled manner.
 *
 * @returns {JSX.Element} The rendered notes component.
 */
const NotesComponent: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="text-4xl">Notes</div>
        {/* Add more structure here as needed for displaying notes */}
      </div>
    </div>
  )
}

export default NotesComponent
