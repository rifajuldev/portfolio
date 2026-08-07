'use client'
import { useEffect, useState } from 'react'
import { RiArrowUpLine } from 'react-icons/ri'

const ScrollProgressButton = () => {
  const [showButton, setShowButton] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (scrollTop / windowHeight) * 100

    setScrollProgress(progress)
    setShowButton(scrollTop > 0)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`flex-center bg-bg-3 fixed right-8 bottom-6 z-40 h-12 w-12 cursor-pointer rounded-[10px] ${
        showButton ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0'
      }`}
      onClick={scrollToTop}
      style={{
        background: `conic-gradient(
          var(--theme-primary-2) ${scrollProgress}%, 
          var(--bg-3) ${scrollProgress}%
        )`,
        boxShadow: 'inset 0 0 0 0.1rem rgba(227, 229, 233, 0.25)',
        transition: 'all 0.2s linear, margin-right 0s',
      }}
    >
      <div className="bg-bg-3 flex-center text-primary-2 h-11 w-11 rounded-[10px]">
        <RiArrowUpLine size={24} />
      </div>
    </div>
  )
}

export default ScrollProgressButton
