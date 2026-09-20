import { navItems, socialLinkList } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative">
      <div className="border-border-1 relative z-10 container border-t pt-6 pb-2">
        <div className="text-center">
          {/* Footer Logo Start */}
          <Link href="/" aria-label="Home" className="flex-center mb-4 gap-2 bg-transparent text-white">
            <Image src="/favicon.svg" width={36} height={36} alt="logo" />
            <span
              className="text-[23px] leading-normal font-medium"
              style={{
                background: 'var(--linear-5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Rifajul.dev
            </span>
          </Link>
          {/* Footer Logo End */}

          {/* Social Contacts List Start */}
          <div className="flex justify-center">
            <div className="text-neutral-0 flex items-center gap-4">
              {socialLinkList.map(({ id, link, icon: Icon }) => (
                <Link key={id} className="hover:text-primary-2 transition-all duration-300" href={link} target="_blank">
                  <Icon size={18} className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
          {/* Social Contacts List End */}

          {/* Footer Nav Links Start */}
          <ul className="flex flex-wrap items-center justify-center gap-6 py-6">
            {navItems.map(({ label, route }) => (
              <li key={route}>
                <Link
                  href={route}
                  className="text-neutral-0 hover:text-primary-2 rounded py-2 text-base font-normal transition-all duration-300!"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Footer Nav Links End */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
