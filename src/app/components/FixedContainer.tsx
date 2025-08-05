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

  const positionClasses = `fixed bg-red ${verticalPosition}-${spacing} ${horizontalPosition}-${spacing} z-100`

  return (
    <div className={positionClasses}>
      {children}
    </div>
  )
}
