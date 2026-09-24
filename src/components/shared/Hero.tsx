'use client'

import { hero as staticHero, heroTechnologies as staticHeroTechnologies } from '@/constants'
import HeroShape from '@/icons/hero-shape'
import { useAppContext } from '@/lib/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import { RiDownloadLine } from 'react-icons/ri'
import HeroCarouselScroll from '../ui/HeroCarouselScroll'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'
import { QuickTooltip } from '../ui/tooltip'

const getHighlightedDescription = (desc: string, highlightedText?: string) => {
  if (!desc) return ''
  if (!highlightedText || !highlightedText.trim()) return desc

  const rawTerms = highlightedText.includes(',') ? highlightedText.split(',') : highlightedText.trim().split(/\s+/)

  const terms = rawTerms.map((t) => t.trim()).filter(Boolean)

  if (terms.length === 0) return desc

  // Sort by length descending so multi-word terms like "React Native" match before "React"
  terms.sort((a, b) => b.length - a.length)

  const escapedTerms = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'g')

  return desc.replace(regex, '<span class="text-secondary-2">$1</span>')
}

const Hero = () => {
  const { hero: contextHero, technologies: contextTechnologies } = useAppContext()

  const hero = contextHero || staticHero
  const heroTechs = contextTechnologies?.filter((t) => t.show_in_hero)
  const technologies = heroTechs && heroTechs.length > 0 ? heroTechs : staticHeroTechnologies

  const highlightedDescription = getHighlightedDescription(hero.desc, hero.desc_highlighted_text)

  return (
    <section id="about" className="pb-4">
      <SectionAnimatedBorder>
        <div className="flex flex-wrap items-center py-12 md:py-15">
          {/* Hero Left Start */}
          <div className="w-full text-center lg:w-5/12 lg:pr-4 lg:pl-6 lg:text-start xl:w-5/12">
            <div className="flex-center relative mb-12 md:mb-14 lg:mb-0">
              <Image
                src={hero.hero_img_url}
                className="h-auto max-h-90 w-auto max-w-full object-contain md:max-h-100 lg:max-h-107.5 xl:max-h-112.5"
                width={505}
                height={455}
                alt="rifajul"
                priority
              />

              <div className="absolute -bottom-10 md:-bottom-12">
                <HeroShape className="h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18" />
              </div>
            </div>
          </div>
          {/* Hero Left End */}

          {/* Hero Right Start */}
          <div className="w-full flex-none pr-3 pl-3 lg:w-7/12 xl:w-7/12">
            <div className="p-4 md:p-8 lg:p-0">
              {/* Typewriter Start */}
              <div className="text-secondary-2 flex items-center">
                {'<span>'}
                <div className="text-neutral-0 m-0! flex items-center">
                  <h1 className="animate-typing leading-extra-tight mt-0 mr-auto mb-0 inline-block overflow-hidden border-r-[0.15em] border-orange-300 text-[16px] font-medium tracking-[0.15em] whitespace-nowrap">
                    {hero.headline}
                  </h1>
                </div>
                {'</span>'}
              </div>
              {/* Typewriter End */}

              {/* Hero Title Start */}
              <h1 className="leading-extra-tight my-4 text-[36px] font-medium md:text-[44px] lg:text-[50px]">
                {hero.first_title}{' '}
                <span className="text-linear-4">
                  {`{`}
                  {hero.middle_title}
                  {`}`}{' '}
                </span>
                {hero.last_title}
                <span className="animate-flicker">_</span>
              </h1>
              {/* Hero Title End */}

              {/* Hero Paragraph Start */}
              <div className="text-neutral-0 mb-8 text-[14px] md:text-base lg:mb-10">
                <span className="text-secondary-2 inline-block">{'<p>'}</span>
                <span className="inline-block pl-2" dangerouslySetInnerHTML={{ __html: highlightedDescription }} />
                <span className="text-secondary-2 inline-block">{'</p>'}</span>
              </div>
              {/* Hero Paragraph End */}

              {/* Carousel Start */}
              <HeroCarouselScroll technologies={technologies} />
              {/* Carousel End */}

              {/* Resume Download Start */}
              <QuickTooltip content="Download Resume (PDF)" side="bottom">
                <Link
                  href={hero.hero_pdf_url}
                  className="font-secondary! mt-6 mr-2 inline-flex items-center gap-2 px-6 py-4.25 pl-0 text-[14px] font-bold text-neutral-300 transition-all duration-300 ease-in-out"
                  download={true}
                  target="_blank"
                >
                  <RiDownloadLine size={24} className="text-primary-2" />[ Download my Resume ]
                </Link>
              </QuickTooltip>
              {/* Resume Download End */}
            </div>
          </div>
          {/* Hero Right End */}
        </div>
      </SectionAnimatedBorder>
    </section>
  )
}

export default Hero
