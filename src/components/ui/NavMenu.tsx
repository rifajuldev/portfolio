import { QuickTooltip } from '@/components/ui/tooltip'
import React from 'react'
import { RiMenu2Fill } from 'react-icons/ri'

interface NavMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavMenu: React.FC<NavMenuProps> = ({ setIsOpen }) => {
  return (
    <QuickTooltip content="Open Quick Drawer" side="bottom">
      <button
        className="hidden h-20 w-17.5 items-center justify-center bg-[#FFFFFF0D] p-6 text-white hover:bg-[#FFFFFF1A] md:flex lg:w-19 dark:bg-[#FFFFFF0D] dark:hover:bg-[#FFFFFF1A]"
        onClick={() => setIsOpen(true)}
        aria-label="Open Quick Drawer"
      >
        <RiMenu2Fill size={24} className="leading-6" />
      </button>
    </QuickTooltip>
  )
}

export default NavMenu
