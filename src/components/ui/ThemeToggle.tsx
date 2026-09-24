'use client'
import { QuickTooltip } from '@/components/ui/tooltip'
import { triggerWaterDropWave } from '@/lib/waterRipple'
import { useRef, useState } from 'react'
import { RiContrast2Line, RiSunFill } from 'react-icons/ri'

const ThemeToggle = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
      if (savedTheme) return savedTheme
    }
    return 'dark'
  })

  const toggleMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isDarkToLight = mode === 'dark'
    const newMode = isDarkToLight ? 'light' : 'dark'

    // Compute exact switcher center coordinates relative to viewport
    const rect = buttonRef.current?.getBoundingClientRect() || e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    // Max radius from switcher center to cover all corners of the screen
    const maxRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    // Trigger canvas water drop ripple wave animation
    triggerWaterDropWave({
      x,
      y,
      maxRadius,
      isDarkToLight,
      duration: 850,
    })

    const applyThemeChange = () => {
      setMode(newMode)
      localStorage.setItem('theme', newMode)
      document.documentElement.classList.toggle('dark', newMode === 'dark')
    }

    // Check View Transitions API support
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      document.documentElement.style.setProperty('--ripple-x', `${x}px`)
      document.documentElement.style.setProperty('--ripple-y', `${y}px`)
      document.documentElement.style.setProperty('--ripple-r', `${maxRadius}px`)
      document.documentElement.classList.add('theme-transitioning')

      const transition = (
        document as Document & {
          startViewTransition: (callback: () => void) => { finished: Promise<void> }
        }
      ).startViewTransition(() => {
        applyThemeChange()
      })

      transition.finished.finally(() => {
        document.documentElement.classList.remove('theme-transitioning')
      })
    } else {
      // Fallback for browsers without View Transitions API
      setTimeout(() => {
        applyThemeChange()
      }, 250)
    }
  }

  return (
    <QuickTooltip
      content={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      side="bottom"
      variant="default"
      showArrow={true}
    >
      <button
        ref={buttonRef}
        onClick={toggleMode}
        className="flex-center group mr-14 h-20 w-19 rounded-none bg-none p-6 transition-all duration-150 ease-in-out focus:outline-none xl:mr-0 xl:bg-[#FFFFFF0D] xl:hover:bg-[#FFFFFF1A] dark:bg-none dark:xl:bg-[#FFFFFF0D] dark:xl:hover:bg-[#FFFFFF1A]"
        aria-label="Toggle Theme"
      >
        <span className="flex-center transition-transform duration-300 ease-out group-active:scale-90 group-active:rotate-45">
          {mode === 'dark' ? <RiSunFill size={24} color="#ffc107" /> : <RiContrast2Line size={24} color="#ffd45d" />}
        </span>
      </button>
    </QuickTooltip>
  )
}

export default ThemeToggle
