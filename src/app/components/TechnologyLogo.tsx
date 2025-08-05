'use client'

import Tooltip from './Tooltip'

interface TechnologyLogoProps {
  imgSrc?: string
  techName?: string
  animationClass?: string
}

export default function TechnologyLogo({
  imgSrc,
  techName = '',
}: TechnologyLogoProps) {

  return (
    <Tooltip text={techName} position="top">
      <div className="">
        <img
          src={imgSrc}
          alt={techName || 'Technology Logo'}
          className={`h-16 w-16 transition-transform duration-300 ease-in-out hover:scale-110`}
        />
      </div>
    </Tooltip>
  )
}
