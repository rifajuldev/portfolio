'use client'
import { navItems, socialLinkList } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface MobileNavProps {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav: React.FC<MobileNavProps> = ({ setIsMobileNavOpen }) => {
  const [activeHash, setActiveHash] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === '/') {
        setActiveHash(window.location.hash || '#about')
      } else {
        setActiveHash(window.location.hash)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname])

  return (
    <div
      className="ease-custom-ease-2 bg-neutral-1000 fixed top-0 right-0 z-1000 min-h-screen w-full max-w-95 translate-x-0 translate-y-0 transform transition-all duration-500!"
      style={{ boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.09)' }}
    >
      <div className="h-full overflow-x-hidden overflow-y-auto p-0 pb-7.5">
        {/* Nav Heading Start */}
        <div className="flex-between relative mb-6.25 border-b border-neutral-200 px-6 py-5">
          {/* Mobile Nav Logo Start */}
          <Link href="/" className="inline-flex items-center">
            <Image src="/favicon.svg" width={36} height={36} alt="logo" />
            <span className="fs-4 text-neutral-0 ml-2 text-[23px]">Rifajul.dev</span>
          </Link>
          {/* Mobile Nav Logo End */}

          {/* Nav Close Icon Start */}
          <button
            className="relative inline-block h-10 w-10 rounded-lg border border-[#495057] bg-neutral-900"
            onClick={() => setIsMobileNavOpen(false)}
          >
            <span className="absolute left-2.5 hidden h-px w-5"></span>
            <span className="bg-neutral-0 absolute top-4.5 left-2.5 block h-px w-5 rotate-45"></span>
            <span className="bg-neutral-0 absolute bottom-4.75 left-2.5 block h-px w-5 -rotate-45"></span>
          </button>
          {/* Nav Close Icon End */}
        </div>
        {/* Nav Heading End */}

        {/* Nav Body Start */}
        <div className="mb-10 px-7.5">
          <div className="border-b border-[#FFFFFF26]">
            {/* Mobile Nav Links Start */}
            <nav>
              <ul className="pl-0">
                {navItems.map(({ label, route }) => {
                  const isActive = activeHash === route

                  return (
                    <li className="relative mb-5 block p-0" key={route}>
                      <Link
                        href={route}
                        className={`inline-block rounded px-4 py-2 text-base leading-6.5 font-normal transition-all duration-300! ${
                          isActive ? 'text-primary-2' : 'text-neutral-0 hover:text-primary-2'
                        }`}
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            {/* Mobile Nav Links End */}
          </div>
        </div>
        {/* Nav Body End */}

        <ul className="flex gap-6 px-7.5 text-white md:hidden">
          {socialLinkList.map(({ id, link, icon: Icon }) => (
            <li key={id}>
              <Link href={link} className="hover:text-primary-2 flex items-center gap-2 transition" target="_blank">
                <Icon size={22} className="text-xl" />
              </Link>
            </li>
          ))}
        </ul>
        {/* Nav Social Links End */}
      </div>
    </div>
  )
}

export default MobileNav
