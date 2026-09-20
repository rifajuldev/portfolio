import React, { ReactNode } from 'react'

interface SectionAnimatedBorderProps {
  children: ReactNode
  className?: string
}

const SectionAnimatedBorder: React.FC<SectionAnimatedBorderProps> = ({ children, className }) => {
  return (
    <div className="border-border-1 relative h-full overflow-hidden rounded-lg border">
      <div className={`box-linear-animation ${className || ''}`}>{children}</div>
    </div>
  )
}

export default SectionAnimatedBorder
