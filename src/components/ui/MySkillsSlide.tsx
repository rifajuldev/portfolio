'use client'
import { technologies } from '@/constants'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const topTechs = technologies.filter((skill) => skill.skill_position === 'Top')
const bottomTechs = technologies.filter((skill) => skill.skill_position === 'Bottom')

const MySkillsSlide = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-4 overflow-hidden md:mx-auto md:w-3/4 lg:w-5/6">
        {/* Marquee For Left-direction Brands */}
        <ul className="flex overflow-hidden p-0">
          <Marquee pauseOnHover={true} speed={60} direction="right">
            {topTechs.map(({ tech_name, tech_img_url, tech_official_url }) => (
              <li key={tech_name} className="float-right mx-3.75 text-center" title={tech_name}>
                <Link
                  href={tech_official_url}
                  target="_blank"
                  className="border-border-1 hover:text-primary-2 inline-flex h-17.5 w-17.5 items-center justify-center rounded-lg border bg-[#f8f8f8] text-center align-middle leading-17.5 hover:border-none hover:bg-[#242424] hover:transition-all hover:duration-300 hover:ease-in-out sm:h-20 sm:w-20 sm:leading-20 dark:bg-neutral-800 dark:hover:border-0! dark:hover:bg-[#242424]"
                >
                  <img src={tech_img_url} alt={tech_name} className="h-auto w-auto" />
                </Link>
              </li>
            ))}
          </Marquee>
        </ul>
      </div>

      <div className="mx-auto mt-9 w-5/6 overflow-hidden md:w-7/12 lg:w-8/12">
        {/* Marquee For Right-direction Brands */}
        <ul className="flex overflow-hidden p-0">
          <Marquee pauseOnHover={true} speed={60} direction="left">
            {bottomTechs.map(({ tech_name, tech_img_url, tech_official_url }) => (
              <li key={tech_name} className="float-left mx-3.75 text-center" title={tech_name}>
                <Link
                  href={tech_official_url}
                  target="_blank"
                  className="border-border-1 hover:text-primary-2 inline-flex h-17.5 w-17.5 items-center justify-center rounded-lg border bg-[#f8f8f8] text-center align-middle leading-17.5 hover:border-none hover:bg-[#242424] hover:transition-all hover:duration-300 hover:ease-in-out sm:h-20 sm:w-20 sm:leading-20 dark:bg-neutral-800 dark:hover:border-0! dark:hover:bg-[#242424]"
                >
                  <img src={tech_img_url} alt={tech_name} className="h-auto w-auto" />
                </Link>
              </li>
            ))}
          </Marquee>
        </ul>
      </div>
    </div>
  )
}

export default MySkillsSlide
