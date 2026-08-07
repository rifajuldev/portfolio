'use client'
import { useAppContext } from '@/lib/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import { RiDownloadLine } from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'
import HeroCarouselScroll from '../ui/HeroCarouselScroll'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'

const Hero = () => {
  const { hero } = useAppContext()

  const description = hero?.desc.replace(
    new RegExp(`(${hero?.desc_highlighted_text})`, 'g'),
    '<span class="text-secondary-2">$1</span>'
  )

  return (
    <section id="about" className="pb-4">
      <SectionAnimatedBorder>
        <div className="flex flex-wrap items-start py-[60px] lg:items-center xl:items-start">
          {/* Hero Left Start */}
          <div className="w-full text-center lg:w-1/2 lg:pr-[12px] lg:pl-6 lg:text-start xl:w-5/12">
            {hero ? (
              <div className="flex-center relative mb-8 md:flex-none lg:mb-0">
                <Image
                  src={hero.hero_img_url}
                  className="h-[348px] w-[386px] md:h-[462px] md:w-[513px] lg:h-full lg:w-full"
                  width={505}
                  height={455}
                  alt="rifajul"
                />

                <div className="absolute -bottom-[3.75rem] pb-[30px]">
                  <Image src="/hero/icon.svg" width={81} height={73} alt="rifajul" />
                </div>
              </div>
            ) : (
              <div className="mx-4 lg:mx-0">
                <Skeleton className="h-[370px] w-[300px] md:h-[462px] md:w-[513px]" style={{ borderRadius: '10px' }} />
              </div>
            )}
          </div>
          {/* Hero Left End */}

          {/* Hero Right Start */}
          <div className="w-full flex-none pr-[12px] pl-[12px] lg:mx-auto lg:w-1/2">
            <div className="p-4 md:p-12 lg:p-0">
              {/* Typewriter Start */}
              {hero ? (
                <div className="text-secondary-2 flex items-center">
                  {'<span>'}
                  <div className="text-neutral-0 !m-0 flex items-center">
                    <h1 className="animate-typing mt-0 mr-auto mb-0 inline-block overflow-hidden border-r-[0.15em] border-orange-300 text-[16px] leading-[1.2] font-medium tracking-[0.15em] whitespace-nowrap">
                      {hero.headline}
                    </h1>
                  </div>
                  {'</span>'}
                </div>
              ) : (
                <Skeleton height={30} style={{ marginBottom: 20 }} />
              )}
              {/* Typewriter End */}

              {/* Hero Title Start */}
              {hero ? (
                <h1 className="my-4 text-[50px] leading-[1.2] font-medium">
                  {hero.first_title}{' '}
                  <span className="text-linear-4">
                    {`{`}
                    {hero.middle_title}
                    {`}`}{' '}
                  </span>
                  {hero.last_title}
                  <span className="animate-flicker">_</span>
                </h1>
              ) : (
                <div className="mb-5">
                  <Skeleton count={2} height={40} style={{ marginBottom: 8 }} />
                </div>
              )}
              {/* Hero Title End */}

              {/* Hero Paragraph Start */}
              <>
                {hero ? (
                  <div className="text-neutral-0 mb-10 text-[14px] md:text-base">
                    <span className="text-secondary-2 inline-block">{'<p>'}</span>
                    <div className="inline-block" dangerouslySetInnerHTML={{ __html: description || '' }} />
                    <span className="text-secondary-2 inline-block">{'</p>'}</span>
                  </div>
                ) : (
                  <div className="mb-6">
                    <Skeleton count={5} height={20} style={{ marginBottom: 4, marginTop: 4 }} />
                  </div>
                )}
              </>
              {/* Hero Paragraph End */}

              {/* Carousel Start */}
              <>{hero ? <HeroCarouselScroll /> : <Skeleton height={60} style={{ marginBottom: 18 }} />}</>
              {/* Carousel End */}

              {/* Resume Download Start */}
              <>
                {hero ? (
                  <Link
                    href={hero.hero_pdf_url}
                    className="!font-secondary mt-6 mr-2 inline-flex items-center gap-2 px-6 py-[17px] pl-0 text-[14px] font-bold text-neutral-300 transition-all duration-300 ease-in-out"
                    download={true}
                    target="_blank"
                  >
                    <RiDownloadLine size={24} className="text-primary-2" />[ Download my Resume ]
                  </Link>
                ) : (
                  <Skeleton height={40} width={'50%'} style={{ marginBottom: 4, marginTop: 20 }} />
                )}
              </>

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
