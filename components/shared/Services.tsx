import { services } from '@/constants'
import Link from 'next/link'
import * as RiIcons from 'react-icons/ri'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'
import SectionHeading from '../ui/SectionHeading'

const Services = () => {
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
            {services.map(({ title, icon_name, desc, highlightText }) => {
              const IconComponent = RiIcons[icon_name as keyof typeof RiIcons]

              return (
                <div
                  key={title}
                  className="bg-bg-3 border-border-1 group h-full rounded-md border px-8.75 pt-17.5 pb-8.75 transition-all duration-300 ease-in-out hover:-translate-y-2 lg:px-10.5 lg:pt-23.25 lg:pb-10.5"
                >
                  {IconComponent ? (
                    <IconComponent className="text-neutral-0 group-hover:text-primary-2 h-6 w-6 transition-all duration-300" />
                  ) : null}

                  <h6 className="my-4 text-[20px] leading-tight font-medium">{title}</h6>

                  <p
                    className="mb-4 text-base leading-normal font-normal text-neutral-300"
                    dangerouslySetInnerHTML={{
                      __html: highlightText
                        ? desc.replace(
                            new RegExp(`(${highlightText.split(' ').join('|')})`, 'gi'),
                            '<span class="text-secondary-2">$1</span>'
                          )
                        : desc,
                    }}
                  ></p>
                </div>
              )
            })}
          </div>
          {/* Service Card End */}

          {/* More Services Text */}
          <div className="pt-15 text-center">
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
