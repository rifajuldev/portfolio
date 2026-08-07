'use client'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

const CooperationContacts = () => {
  const { cooperationAvatar, combinedContactListData } = useAppContext()

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      {/* Circle Profile Start */}
      <div>
        <div className="border-border-1 relative z-0 h-[124px] w-[124px] rounded-full border">
          <div className="border-border-1 absolute top-1/2 left-1/2 z-10 h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 rounded-full border">
            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              {cooperationAvatar ? (
                <img
                  className="h-full w-full rounded-full"
                  width={40}
                  height={40}
                  src={cooperationAvatar.avatar_url}
                  alt="rifajul"
                />
              ) : (
                <Skeleton circle width={40} height={40} />
              )}
              <svg
                className="text-primary-2 absolute end-0 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Circle Profile End */}

      {/* Contacts List Start */}
      {combinedContactListData.length > 0 ? (
        <div className="flex flex-col flex-wrap gap-4 sm:gap-2">
          {combinedContactListData
            .filter((contact) => contact.mediaName !== 'address')
            .map(({ id, mediaName, mediaData, link, icon: Icon }) => (
              <Link
                key={id}
                href={link}
                target="_blank"
                className="text-neutral-0 group flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:items-start sm:justify-start sm:text-left"
              >
                <Icon size={24} className="text-neutral-0 group-hover:text-primary-2" />
                <span className="text-neutral-300">
                  [{mediaName === 'phone number' ? 'phone' : mediaName}]
                  <span className="text-secondary-2"> {mediaData}</span>
                </span>
              </Link>
            ))}
        </div>
      ) : (
        <div className="w-full md:w-3/5">
          <Skeleton containerClassName="flex-1" count={3} height={30} style={{ marginBottom: 10 }} />
        </div>
      )}
      {/* Contacts List End */}
    </div>
  )
}

export default CooperationContacts
