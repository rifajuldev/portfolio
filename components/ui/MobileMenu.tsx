import React from 'react'

interface MobileMenuProps {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMobileNavOpen }) => {
  const handleMenuClick = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  return (
    <div
      onClick={handleMenuClick}
      className="ease-custom-ease-2 burger-icon-white border-border-1 absolute top-[20px] right-[18px] z-50 h-[40px] w-[40px] cursor-pointer rounded-lg border bg-neutral-900 text-white transition-all !duration-300"
    >
      <span className="bg-neutral-0 absolute top-[13px] left-[10px] block h-[1px] w-[20px]"></span>
      <span className="bg-neutral-0 absolute top-[19px] left-[10px] block h-[1px] w-[20px]"></span>
      <span className="bg-neutral-0 absolute bottom-[12px] left-[10px] block h-[1px] w-[20px]"></span>
    </div>
  )
}

export default MobileMenu
