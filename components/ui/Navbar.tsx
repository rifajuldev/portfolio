import React from 'react'
import MobileMenu from './MobileMenu'
import NavContainer from './NavContainer'
import NavMenu from './NavMenu'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>> // mobile nav toggle prop
}

const Navbar: React.FC<NavbarProps> = ({ setIsOffCanvasOpen, setIsMobileNavOpen }) => {
  return (
    <nav className="border-border-1 dark:bg-bg-3 relative top-[22px] z-50 rounded-lg border bg-[#333a32]">
      <div className="flex">
        {/* nav menu */}
        <div className="hidden md:block">
          <NavMenu setIsOpen={setIsOffCanvasOpen} />
        </div>

        {/* nav container */}
        <div className="flex-1">
          <NavContainer />
        </div>

        {/* dark mode toggle */}
        <div>
          <ThemeToggle />
        </div>

        {/* mobile menu start */}
        <div className="block xl:hidden">
          <MobileMenu setIsMobileNavOpen={setIsMobileNavOpen} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
