'use client'
import { useState } from 'react'
import MobileNav from '../ui/MobileNav'
import Navbar from '../ui/Navbar'
import OffCanvasInfo from '../ui/OffCanvasInfo'

const Header = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false) // for navbar menu
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false) // for mobile nav

  return (
    <header className="pb-32">
      {/* header bg start */}
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-contain bg-no-repeat"
        style={{ backgroundImage: 'var(--hero-bg-img)' }}
      >
        <div className="container">
          {/* navbar start */}
          <Navbar setIsOffCanvasOpen={setIsOffCanvasOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
          {/* navbar end */}
        </div>
      </div>
      {/* header bg end */}

      {/* offcanvas info */}
      <OffCanvasInfo isOpen={isOffCanvasOpen} setIsOpen={setIsOffCanvasOpen} />

      {/* MobileNav */}
      {isMobileNavOpen && <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} />}
    </header>
  )
}

export default Header
