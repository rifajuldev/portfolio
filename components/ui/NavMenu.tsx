import React from 'react'
import { RiMenu2Fill } from 'react-icons/ri'

interface NavMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavMenu: React.FC<NavMenuProps> = ({ setIsOpen }) => {
  return (
    <button
      className="hidden h-20 w-[70px] items-center justify-center bg-[#FFFFFF0D] p-6 text-white md:flex lg:w-[76px]"
      onClick={() => setIsOpen(true)}
    >
      <RiMenu2Fill size={24} className="leading-6" />
    </button>
  )
}

export default NavMenu
