import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

interface OffCanvasInfoProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OffCanvasInfo: React.FC<OffCanvasInfoProps> = ({ isOpen, setIsOpen }) => {
  const { combinedContactListData, combinedSocialLinkData } = useAppContext()
  return (
    <>
      <div
        className={`bg-neutral-1000 ease-custom-ease fixed top-0 left-0 z-50 h-full w-[340px] overflow-y-scroll p-[30px] transition-transform !duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Offcanvas Close Icon Start */}
        <div className="-mt-4 text-right">
          <button
            className="text-primary-2 cursor-pointer border-none bg-transparent p-0 text-xl"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine size={25} />
          </button>
        </div>
        {/* Offcanvas Close Icon End */}

        {/* Offcanvas Content */}
        <div className="mb-8">
          <h3 className="h3 mb-0">Get in touch</h3>
        </div>

        <div className="border-primary-2 mb-[30px] border-t pt-[25px]">
          {/* Contact Details Start */}
          <div className="mb-[30px]">
            <p className="mb-8 text-base !leading-[26px] font-medium text-neutral-200">
              I&apos;m always excited to take on new projects and collaborate with innovative minds.
            </p>

            {combinedContactListData.map(({ id, mediaName, mediaData }) => (
              <div key={id} className="mb-4">
                <span className="text-[19px] text-neutral-400 capitalize">{mediaName}</span>
                <p className="mb-0 overflow-x-scroll" style={{ scrollbarWidth: 'none' }}>
                  {mediaData}
                </p>
              </div>
            ))}
          </div>
          {/* Contact Details End */}

          {/* Social Contacts List Start */}
          <div>
            <p className="mb-2 text-[19px] text-neutral-400">Social</p>
            <div className="text-neutral-0 flex items-center gap-4">
              {combinedSocialLinkData.map(({ id, link, icon: Icon }) => (
                <Link key={id} className="hover:text-primary-2 transition-all duration-300" href={link} target="_blank">
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
          className="fixed top-0 left-0 z-40 h-full w-full bg-black opacity-70 transition-all !duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Offcanvas Overlay End */}
    </>
  )
}

export default OffCanvasInfo
