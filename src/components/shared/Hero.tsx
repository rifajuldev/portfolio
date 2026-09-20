import { hero, heroTechnologies } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { RiDownloadLine } from 'react-icons/ri'
import HeroCarouselScroll from '../ui/HeroCarouselScroll'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'

const highlightedDescription = hero.desc.replace(
  new RegExp(`(${hero.desc_highlighted_text})`, 'g'),
  '<span class="text-secondary-2">$1</span>'
)

const Hero = () => {
  return (
    <section id="about" className="pb-4">
      <SectionAnimatedBorder>
        <div className="flex flex-wrap items-start py-15 lg:items-center xl:items-start">
          {/* Hero Left Start */}
          <div className="w-full text-center lg:w-1/2 lg:pr-3 lg:pl-6 lg:text-start xl:w-5/12">
            <div className="flex-center relative mb-8 md:flex-none lg:mb-0">
              <Image
                src={hero.hero_img_url}
                className="h-87 w-96.5 md:h-115.5 md:w-128.25 lg:h-full lg:w-full"
                width={505}
                height={455}
                alt="rifajul"
                priority
              />

              <div className="absolute -bottom-15 pb-7.5">
                <Image src="/hero/icon.svg" width={81} height={73} alt="rifajul" />
              </div>
            </div>
          </div>
          {/* Hero Left End */}

          {/* Hero Right Start */}
          <div className="w-full flex-none pr-3 pl-3 lg:mx-auto lg:w-1/2">
            <div className="p-4 md:p-12 lg:p-0">
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
              <h1 className="leading-extra-tight my-4 text-[50px] font-medium">
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
              <div className="text-neutral-0 mb-10 text-[14px] md:text-base">
                <span className="text-secondary-2 inline-block">{'<p>'}</span>
                <span className="inline-block" dangerouslySetInnerHTML={{ __html: highlightedDescription }} />
                <span className="text-secondary-2 inline-block">{'</p>'}</span>
              </div>
              {/* Hero Paragraph End */}

              {/* Carousel Start */}
              <HeroCarouselScroll technologies={heroTechnologies} />
              {/* Carousel End */}

              {/* Resume Download Start */}
              <Link
                href={hero.hero_pdf_url}
                className="font-secondary! mt-6 mr-2 inline-flex items-center gap-2 px-6 py-4.25 pl-0 text-[14px] font-bold text-neutral-300 transition-all duration-300 ease-in-out"
                download={true}
                target="_blank"
              >
                <RiDownloadLine size={24} className="text-primary-2" />[ Download my Resume ]
              </Link>
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
