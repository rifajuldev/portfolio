'use client'

import { contactList } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import { RiFileCopyLine } from 'react-icons/ri'
import ContactForm from '../forms/ContactForm'

const Contact = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const handleCopy = (id: number, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  return (
    <section id="contact" className="relative overflow-hidden pb-15">
      <div className="items-center lg:flex">
        {/* Form part */}
        <div className="pb-8 lg:w-7/12 lg:pb-0">
          <h3 className="text-primary-2 mb-4">Let’s connect</h3>
          <ContactForm />
        </div>

        {/* Contacts list */}
        <div className="flex flex-col lg:w-5/12 lg:pl-16">
          {contactList.map(({ id, mediaName, mediaData, link, icon: Icon }) => (
            <div key={id} className="mb-4">
              {mediaName === 'email' ? (
                <div className="flex items-center gap-4">
                  <div className="icon-flip border-border-1 bg-bg-3 flex h-12 w-12 items-center justify-center rounded-lg border">
                    <Icon className="text-primary-2" size={26} />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-neutral-400 capitalize">{mediaName}</span>
                    <h6 className="text-lg break-all">{mediaData}</h6>
                  </div>
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(id, mediaData)}
                    className={`border-border-1 text-primary-2 bg-bg-3 flex h-10 w-10 items-center justify-center rounded-lg border ${
                      copiedId === id ? 'bg-bg-3' : 'hover:bg-bg-5 hover:text-neutral-0'
                    }`}
                    aria-label="Copy email"
                    title="Copy email"
                  >
                    {copiedId === id ? <HiCheck size={20} /> : <RiFileCopyLine size={20} />}
                  </button>
                </div>
              ) : (
                <Link href={link} target="_blank" className="flex items-center gap-4">
                  <div className="icon-flip border-border-1 bg-bg-3 flex h-12 w-12 items-center justify-center rounded-lg border">
                    <Icon className="text-primary-2" size={26} />
                  </div>
                  <div>
                    <span className="text-sm text-neutral-400 capitalize">{mediaName}</span>
                    <h6 className="text-lg wrap-break-word">{mediaData}</h6>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
