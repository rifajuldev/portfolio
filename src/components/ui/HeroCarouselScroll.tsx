'use client'
import { QuickTooltip } from '@/components/ui/tooltip'
import { heroTechnologies } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

type HeroCarouselScrollProps = {
  technologies?: typeof heroTechnologies
}

const HeroCarouselScroll = ({ technologies = heroTechnologies }: HeroCarouselScrollProps) => {
  return (
    <div className="flex gap-x-6">
      <div className="mt-4 w-10/12 flex-none lg:mt-0">
        <div>
          <ul className="my-2.5 flex overflow-hidden p-0">
            <Marquee pauseOnHover={true} speed={75}>
              {technologies.map(({ tech_name, tech_img_url, tech_official_url }) => (
                <li key={tech_name} className="mx-2.5 text-center">
                  <QuickTooltip content={tech_name} side="top">
                    <Link
                      href={tech_official_url}
                      className="border-border-1 hover:text-primary-2 inline-flex h-15 w-15 items-center justify-center rounded-lg border bg-[#f8f8f8] text-center align-middle leading-15 hover:border-none hover:bg-[#242424] hover:transition-all hover:duration-300 hover:ease-in-out dark:bg-neutral-800 dark:hover:border-0! dark:hover:bg-[#242424]"
                      target="_blank"
                    >
                      <Image src={tech_img_url} alt={tech_name} className="h-auto w-auto" width={60} height={60} />
                    </Link>
                  </QuickTooltip>
                </li>
              ))}
            </Marquee>
          </ul>
        </div>
      </div>

      <div className="flex w-5/12 flex-none items-end">
        <span className="mb-2 text-base font-normal text-neutral-300">...and more</span>
      </div>
    </div>
  )
}

export default HeroCarouselScroll
