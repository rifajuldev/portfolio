import { contactList, cooperationAvatarUrl } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const CooperationContacts = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div>
        <div className="border-border-1 relative z-0 h-31 w-31 rounded-full border">
          <div className="border-border-1 absolute top-1/2 left-1/2 z-10 h-20.5 w-20.5 -translate-x-1/2 -translate-y-1/2 rounded-full border">
            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <Image
                className="h-full w-full rounded-full"
                width={40}
                height={40}
                src={cooperationAvatarUrl}
                alt="rifajul"
              />
              <svg
                className="text-primary-2 absolute inset-e-0 bottom-0"
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

      <div className="flex flex-col flex-wrap gap-4 sm:gap-2">
        {contactList
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
    </div>
  )
}

export default CooperationContacts
