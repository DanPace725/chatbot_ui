import { useRouter } from "next/navigation"
import { useState } from "react"
import { FC } from "react"

export const ToggleSwitch: FC = function () {
  const [isToggled, setIsToggled] = useState(false)
  const router = useRouter()
  const handleToggle = () => setIsToggled(!isToggled)

  // Assuming your chat and notes pages have routes '/chat' and '/notes'
  if (!isToggled) {
    router.push("/notes")
  } else {
    router.push("/chat")
  }

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      {/* Your existing Chat UI code */}
    </div>
  )
}
