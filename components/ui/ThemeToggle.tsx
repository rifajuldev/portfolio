'use client'
import { useState } from 'react'
import { RiContrast2Line, RiSunFill } from 'react-icons/ri'

const ThemeToggle = () => {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    setMode(newMode)
    localStorage.setItem('theme', newMode)
    document.documentElement.classList.toggle('dark', newMode === 'dark')
  }

  return (
    <button
      onClick={toggleMode}
      className="flex-center mr-14 h-20 w-19 rounded-none bg-none p-6 focus:outline-none xl:mr-0 xl:bg-[#FFFFFF0D] xl:hover:bg-[#FFFFFF0D] dark:bg-none dark:xl:bg-[#FFFFFF0D] dark:xl:hover:bg-[#FFFFFF0D]"
    >
      {mode === 'dark' ? <RiSunFill size={24} color="#ffc107" /> : <RiContrast2Line size={24} color="#ffd45d" />}
    </button>
  )
}

export default ThemeToggle
