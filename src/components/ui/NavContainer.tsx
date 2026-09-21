'use client'
import { QuickTooltip } from '@/components/ui/tooltip'
import { navItems, socialLinkList } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NavContainer = () => {
  const [activeHash, setActiveHash] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === '/') {
        setActiveHash('#about')
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
    <div className="flex-between h-full px-6 py-4">
      {/* Logo Start */}
      <div>
        <Link href="/" aria-label="Home" className="flex-center gap-2 bg-transparent text-white">
          <Image src="/favicon.svg" width={36} height={36} alt="logo" />
          <span
            className="text-[23px] leading-normal font-medium"
            style={{
              background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.32) 0%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Rifajul.dev
          </span>
        </Link>
      </div>
      {/* Logo End */}

      {/* Nav Links Start */}
      <ul className="hidden xl:flex">
        {navItems.map(({ label, route }) => {
          const isRouteMatch = route.startsWith('/') ? pathname.startsWith(route) : activeHash === route
          const targetHref = route.startsWith('#') && pathname !== '/' ? `/${route}` : route

          return (
            <li key={route}>
              <Link
                href={targetHref}
                className={`rounded px-4 py-2 text-base font-normal transition-all duration-300! hover:text-white ${
                  isRouteMatch ? 'text-white' : 'text-[#FFFFFF80]'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
      {/* Nav Links End */}

      {/* Nav Social Links Start */}
      <ul className="hidden gap-4 text-white md:flex">
        {socialLinkList.map(({ id, name, link, icon: Icon }) => (
          <li key={id}>
            <QuickTooltip content={name} side="top">
              <Link href={link} className="hover:text-primary-2 flex items-center gap-2 transition" target="_blank">
                <Icon size={18} className="text-xl" />
              </Link>
            </QuickTooltip>
          </li>
        ))}
      </ul>
      {/* Nav Social Links End */}
    </div>
  )
}

export default NavContainer
