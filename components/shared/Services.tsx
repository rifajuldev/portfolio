'use client'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import * as RiIcons from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'
import SectionHeading from '../ui/SectionHeading'

const Services = () => {
  const { services } = useAppContext()

  return (
    <section id="services" className="mb-8">
      <SectionAnimatedBorder className="p-4 md:p-6 lg:p-8">
        {/* Section Heading Start */}
        <SectionHeading
          sectionName="Cooperation"
          headings={[{ title: 'Designing solutions', span: 'customized' }, { span: 'to meet your requirements' }]}
          center={true}
        />
        {/* Section Heading End */}

        {/* Services Content Start */}
        <div className="relative z-20 mt-7">
          {/* Service Card Start */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.length > 0 ? (
              services.map(({ _id, title, icon_name, desc, highlightText }) => {
                const IconComponent = RiIcons[icon_name as keyof typeof RiIcons]

                return (
                  <div
                    key={_id}
                    className="bg-bg-3 border-border-1 group h-full rounded-md border px-[35px] pt-[70px] pb-[35px] transition-all duration-300 ease-in-out hover:translate-y-[-8px] lg:px-[42px] lg:pt-[93px] lg:pb-[42px]"
                  >
                    {IconComponent ? (
                      <IconComponent className="text-neutral-0 group-hover:text-primary-2 h-6 w-6 transition-all duration-300" />
                    ) : null}

                    <h6 className="my-4 text-[20px] leading-tight font-medium">{title}</h6>

                    {/* Description with Highlighted Text */}
                    <p
                      className="mb-4 text-base leading-normal font-normal text-neutral-300"
                      dangerouslySetInnerHTML={{
                        __html: highlightText
                          ? (desc || '').replace(
                              new RegExp(`(${highlightText.split(' ').join('|')})`, 'gi'),
                              '<span class="text-secondary-2">$1</span>'
                            )
                          : desc || '',
                      }}
                    ></p>
                  </div>
                )
              })
            ) : (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-bg-3 border-border-1 group flex h-full flex-col rounded-md border px-[35px] pt-[70px] pb-[35px] transition-all duration-300 ease-in-out hover:translate-y-[-8px] lg:px-[42px] lg:pt-[93px] lg:pb-[42px]"
                  >
                    <Skeleton height={30} containerClassName="flex-1" style={{ marginBottom: '15px' }} />
                    <Skeleton height={40} containerClassName="flex-1" style={{ marginBottom: '15px' }} />
                    <Skeleton count={3} height={20} containerClassName="flex-1" style={{ marginBottom: '5px' }} />
                  </div>
                ))}
              </>
            )}
          </div>
          {/* Service Card End */}

          {/* More Services Text */}
          <div className="pt-[60px] text-center">
            <p className="text-[16px] text-neutral-300">
              Excited to take on <span className="text-neutral-0">new projects</span> and collaborate.
              <br />
              Let&apos;s chat about your ideas.{' '}
              <Link href="/#contact" className="text-primary-2">
                Reach out!
              </Link>
            </p>
          </div>
        </div>
        {/* Services Content End */}

        {/* Background Image */}
        <div
          className="absolute top-0 left-0 h-full w-full dark:invert"
          style={{ backgroundImage: 'url("/services/bg.png")' }}
        ></div>
      </SectionAnimatedBorder>
    </section>
  )
}

export default Services
