'use client'

import { useState } from 'react'
import FixedContainer from "@/app/components/FixedContainer";

export default function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsToggled(!isToggled)
    // This toggle doesn't do anything right now as requested
  }

  return (
    <FixedContainer
      horizontalPosition="right"
      verticalPosition="bottom"
      spacing={4}
    >
      <div className="bg-gray-800 p-3 sm:p-4 h-16 w-16 sm:h-18 sm:w-18 flex items-center justify-center rounded-full shadow-lg">
        <button
          onClick={handleToggle}
          className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${isToggled ? 'bg-blue-600' : 'bg-gray-300'}
        `}
        >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${isToggled ? 'translate-x-5' : 'translate-x-1'}
          `}
        />
        </button>
      </div>
    </FixedContainer>
  )
}
