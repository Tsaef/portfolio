'use client'

import {ReactNode} from 'react'

interface FixedContainerProps {
  verticalPosition?: 'top' | 'bottom'
  horizontalPosition?: 'left' | 'right'
  spacing?: number
  children?: ReactNode
}

export default function FixedContainer({
  verticalPosition = 'bottom',
  horizontalPosition = 'right',
  spacing = 6,
  children
}: FixedContainerProps) {

  // Build position classes more safely
  const verticalClass = verticalPosition === 'top' ? `top-${spacing}` : `bottom-${spacing}`
  const horizontalClass = horizontalPosition === 'left' ? `left-${spacing}` : `right-${spacing}`

  return (
    <div className={`fixed ${verticalClass} ${horizontalClass} z-50`}>
      {children}
    </div>
  )
}
