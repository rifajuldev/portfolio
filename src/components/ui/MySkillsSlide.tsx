'use client'

import { technologies as staticTechnologies } from '@/constants'
import { useAppContext } from '@/lib/context/appContext'
import { ITechnology } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useSyncExternalStore } from 'react'
import Marquee from 'react-fast-marquee'
import { QuickTooltip } from './tooltip'

type MySkillsSlideProps = {
  technologies?: ITechnology[]
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

const MySkillsSlide = ({ technologies: propTechnologies, isLoading = false }: MySkillsSlideProps) => {
  const { technologies: contextTechnologies } = useAppContext()
  const mounted = useIsMounted()

  const allTechnologies =
    propTechnologies ||
    (contextTechnologies && contextTechnologies.length > 0 ? contextTechnologies : staticTechnologies)

  const showSkeleton = !mounted || isLoading || !allTechnologies || allTechnologies.length === 0

  const topTechs = allTechnologies.filter((skill) => skill.skill_position === 'Top')
  const bottomTechs = allTechnologies.filter((skill) => skill.skill_position === 'Bottom')

  return (
    <div className="flex flex-col">
      <div className="mx-4 overflow-hidden md:mx-auto md:w-3/4 lg:w-5/6">
        {/* Marquee For Left-direction Brands */}
        {showSkeleton ? (
          <ul className="flex gap-x-7.5 overflow-hidden p-0">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="flex-none">
                <div className="border-border-1 inline-flex h-17.5 w-17.5 animate-pulse items-center justify-center rounded-lg border bg-[#f8f8f8] sm:h-20 sm:w-20 dark:bg-neutral-800/80">
                  <div className="h-8 w-8 rounded-md bg-neutral-300/50 sm:h-10 sm:w-10 dark:bg-neutral-700/60" />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex overflow-hidden p-0">
            <Marquee pauseOnHover={true} speed={60} direction="right">
              {topTechs.map(({ tech_name, tech_img_url, tech_img_white_url, tech_official_url }) => (
                <li key={tech_name} className="float-right mx-3.75 text-center">
                  <QuickTooltip content={tech_name} side="top" variant="glass" size="sm" showArrow={true}>
                    <Link
                      href={tech_official_url}
                      target="_blank"
                      className="border-border-1 hover:border-primary-2 dark:hover:border-primary-2 inline-flex h-17.5 w-17.5 items-center justify-center overflow-hidden rounded-lg border bg-[#f8f8f8] p-2.5 text-center align-middle leading-17.5 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md sm:h-20 sm:w-20 sm:leading-20 dark:bg-neutral-800 dark:hover:bg-[#242424]"
                    >
                      <Image
                        src={tech_img_url}
                        alt={tech_name}
                        className={`h-auto max-h-11 w-auto max-w-11 object-contain sm:max-h-12 sm:max-w-12 ${tech_img_white_url ? 'dark:hidden' : ''}`}
                        width={70}
                        height={70}
                      />
                      {tech_img_white_url && (
                        <Image
                          src={tech_img_white_url}
                          alt={tech_name}
                          className="hidden h-auto max-h-11 w-auto max-w-11 object-contain sm:max-h-12 sm:max-w-12 dark:block"
                          width={70}
                          height={70}
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

      <div className="mx-auto mt-9 w-5/6 overflow-hidden md:w-7/12 lg:w-8/12">
        {/* Marquee For Right-direction Brands */}
        {showSkeleton ? (
          <ul className="flex gap-x-7.5 overflow-hidden p-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="flex-none">
                <div className="border-border-1 inline-flex h-17.5 w-17.5 animate-pulse items-center justify-center rounded-lg border bg-[#f8f8f8] sm:h-20 sm:w-20 dark:bg-neutral-800/80">
                  <div className="h-8 w-8 rounded-md bg-neutral-300/50 sm:h-10 sm:w-10 dark:bg-neutral-700/60" />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex overflow-hidden p-0">
            <Marquee pauseOnHover={true} speed={60} direction="left">
              {bottomTechs.map(({ tech_name, tech_img_url, tech_img_white_url, tech_official_url }) => (
                <li key={tech_name} className="float-left mx-3.75 text-center">
                  <QuickTooltip content={tech_name} side="top" variant="glass" size="sm" showArrow={true}>
                    <Link
                      href={tech_official_url}
                      target="_blank"
                      className="border-border-1 hover:border-primary-2 dark:hover:border-primary-2 inline-flex h-17.5 w-17.5 items-center justify-center overflow-hidden rounded-lg border bg-[#f8f8f8] p-2.5 text-center align-middle leading-17.5 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md sm:h-20 sm:w-20 sm:leading-20 dark:bg-neutral-800 dark:hover:bg-[#242424]"
                    >
                      <Image
                        src={tech_img_url}
                        alt={tech_name}
                        className={`h-auto max-h-11 w-auto max-w-11 object-contain sm:max-h-12 sm:max-w-12 ${tech_img_white_url ? 'dark:hidden' : ''}`}
                        width={70}
                        height={70}
                      />
                      {tech_img_white_url && (
                        <Image
                          src={tech_img_white_url}
                          alt={tech_name}
                          className="hidden h-auto max-h-11 w-auto max-w-11 object-contain sm:max-h-12 sm:max-w-12 dark:block"
                          width={70}
                          height={70}
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
  )
}

export default MySkillsSlide
