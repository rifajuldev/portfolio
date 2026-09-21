'use client'
import { useEffect, useState } from 'react'
import MobileNav from '../ui/MobileNav'
import Navbar from '../ui/Navbar'
import OffCanvasInfo from '../ui/OffCanvasInfo'

const Header = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false) // for navbar menu
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false) // for mobile nav
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 60) {
        setIsScrolled(false)
        setIsVisible(true)
        lastScrollY = currentScrollY
        return
      }

      setIsScrolled(true)

      const delta = currentScrollY - lastScrollY
      if (Math.abs(delta) < 5) return

      if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide header
        setIsVisible(false)
      } else {
        // Scrolling up -> show header
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showHeader = isVisible || isOffCanvasOpen || isMobileNavOpen

  return (
    <header className="pb-32">
      {/* header bg start */}
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-contain bg-no-repeat"
        style={{ backgroundImage: 'var(--hero-bg-img)' }}
      >
        <div
          className={`w-full transition-all duration-300 ease-in-out ${
            isScrolled ? 'fixed top-0 right-0 left-0 z-40 py-3' : 'relative top-0 z-40'
          } ${showHeader ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'}`}
        >
          <div className="container">
            {/* navbar start */}
            <Navbar
              setIsOffCanvasOpen={setIsOffCanvasOpen}
              setIsMobileNavOpen={setIsMobileNavOpen}
              isScrolled={isScrolled}
            />
            {/* navbar end */}
          </div>
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
