import { contactList, socialLinkList } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

interface OffCanvasInfoProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OffCanvasInfo: React.FC<OffCanvasInfoProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`bg-neutral-1000 ease-custom-ease fixed top-0 left-0 z-50 h-full w-85 overflow-y-scroll p-7.5 transition-transform duration-300! ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Offcanvas Header Start */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="leading-extra-tight text-neutral-0 mb-0 text-[28px] font-medium">Get in Touch</h3>
          <button
            className="text-primary-2 cursor-pointer border-none bg-transparent p-0 text-xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine size={25} />
          </button>
        </div>
        {/* Offcanvas Header End */}

        <div className="border-primary-2 mb-7.5 border-t pt-6.25">
          {/* Contact Details Start */}
          <div className="mb-7.5">
            <p className="mb-8 text-base leading-6.5! font-medium text-neutral-200">
              I&apos;m always excited to take on new projects and collaborate with innovative minds.
            </p>

            {contactList.map(({ id, mediaName, mediaData, link }) => {
              const isExternal = link.startsWith('http')

              return (
                <div key={id} className="mb-4">
                  <span className="text-[19px] text-neutral-400 capitalize">{mediaName}</span>
                  <p className="mb-0 overflow-x-scroll" style={{ scrollbarWidth: 'none' }}>
                    <Link
                      href={link}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="hover:text-primary-2 transition-all duration-300"
                    >
                      {mediaData}
                    </Link>
                  </p>
                </div>
              )
            })}
          </div>
          {/* Contact Details End */}

          {/* Social Contacts List Start */}
          <div>
            <p className="mb-2 text-[19px] text-neutral-400">Social Links</p>
            <div className="text-neutral-0 flex items-center gap-4">
              {socialLinkList.map(({ id, link, icon: Icon }) => (
                <Link
                  key={id}
                  className="hover:text-primary-2 transition-all duration-300"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
          {/* Social Contacts List End */}
        </div>
      </div>

      {/* Offcanvas Overlay Start */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-40 h-full w-full bg-black opacity-70 transition-all duration-300!"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Offcanvas Overlay End */}
    </>
  )
}

export default OffCanvasInfo
