import React from 'react'

interface RotateAnimationProps {
  position?: 'top' | 'bottom'
}

const RotateAnimation: React.FC<RotateAnimationProps> = ({ position }) => {
  return (
    <div className={`absolute z-10 hidden md:block ${position === 'top' ? '-top-8.75' : '-bottom-8.75'} -right-8.75`}>
      <div className="rotateme animate-rotateme">
        {/* Big Circle */}
        <div className="border-border-1 h-52.5 w-52.5 rounded-full border-[0.4px]"></div>

        {/* Middle Circle */}
        <div className="border-border-1 absolute top-1/2 left-1/2 h-31 w-31 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.4px]">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
          </svg>
        </div>

        {/* Small Circle */}
        <div className="border-border-1 absolute top-1/2 left-1/2 h-20.5 w-20.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.4px]">
          <svg
            className="absolute bottom-0 left-0 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default RotateAnimation
