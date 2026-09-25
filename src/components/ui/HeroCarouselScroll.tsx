'use client'

import { QuickTooltip } from '@/components/ui/tooltip'
import { heroTechnologies } from '@/constants'
import { ITechnology } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useSyncExternalStore } from 'react'
import Marquee from 'react-fast-marquee'

type HeroCarouselScrollProps = {
  technologies?: ITechnology[] | typeof heroTechnologies
  isLoading?: boolean
}

const emptySubscribe = () => () => {}
const useIsMounted = () => {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

const HeroCarouselScroll = ({ technologies = heroTechnologies, isLoading = false }: HeroCarouselScrollProps) => {
  const mounted = useIsMounted()

  const showSkeleton = !mounted || isLoading || !technologies || technologies.length === 0

  return (
    <div className="flex min-h-20 items-center gap-x-6">
      <div className="mt-4 w-10/12 flex-none lg:mt-0">
        <div>
          {showSkeleton ? (
            <ul className="my-2.5 flex gap-x-5 overflow-hidden p-0">
              {Array.from({ length: 8 }).map((_, index) => (
                <li key={index} className="flex-none">
                  <div className="border-border-1 inline-flex h-15 w-15 animate-pulse items-center justify-center rounded-lg border bg-[#f8f8f8] dark:bg-neutral-800/80">
                    <div className="h-7 w-7 rounded-md bg-neutral-300/50 dark:bg-neutral-700/60" />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="my-2.5 flex overflow-hidden p-0">
              <Marquee pauseOnHover={true} speed={75}>
                {technologies.map(({ tech_name, tech_img_url, tech_img_white_url, tech_official_url }) => (
                  <li key={tech_name} className="mx-2.5 text-center">
                    <QuickTooltip content={tech_name} side="top">
                      <Link
                        href={tech_official_url}
                        className="border-border-1 hover:border-primary-2 dark:hover:border-primary-2 inline-flex h-15 w-15 items-center justify-center overflow-hidden rounded-lg border bg-[#f8f8f8] p-2 text-center align-middle leading-15 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md dark:bg-neutral-800 dark:hover:bg-[#242424]"
                        target="_blank"
                      >
                        <Image
                          src={tech_img_url}
                          alt={tech_name}
                          className={`h-auto max-h-9 w-auto max-w-9 object-contain ${tech_img_white_url ? 'dark:hidden' : ''}`}
                          width={60}
                          height={60}
                        />
                        {tech_img_white_url && (
                          <Image
                            src={tech_img_white_url}
                            alt={tech_name}
                            className="hidden h-auto max-h-9 w-auto max-w-9 object-contain dark:block"
                            width={60}
                            height={60}
                          />
                        )}
                      </Link>
                    </QuickTooltip>
                  </li>
                ))}
              </Marquee>
            </ul>
          )}
        </div>
      </div>

      <div className="flex w-5/12 flex-none items-end">
        <span className="mb-2 text-base font-normal text-neutral-300">...and more</span>
      </div>
    </div>
  )
}

export default HeroCarouselScroll
