import React from 'react'
import MobileMenu from './MobileMenu'
import NavContainer from './NavContainer'
import NavMenu from './NavMenu'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>> // mobile nav toggle prop
  isScrolled?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ setIsOffCanvasOpen, setIsMobileNavOpen, isScrolled }) => {
  return (
    <nav
      className={`border-border-1 dark:bg-bg-3 rounded-lg border bg-[#333a32] transition-all duration-300 ${
        isScrolled ? 'dark:bg-bg-3/95 bg-[#333a32]/95 shadow-2xl backdrop-blur-md' : 'relative top-5.5'
      }`}
    >
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
