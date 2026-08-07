'use client'
import { useAppContext } from '@/lib/context/appContext'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'
import SectionHeading from '../ui/SectionHeading'

const Experience = () => {
  const { experienceTitle, experiences } = useAppContext()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedCompany = experiences.find((company) => company._id === selectedId) ?? experiences[0] ?? null

  return (
    <section id="portfolio" className="mb-8">
      <SectionAnimatedBorder>
        <div className="relative z-50 p-4 md:p-10 lg:p-16">
          {/* Section Heading */}
          {experienceTitle ? (
            <SectionHeading
              sectionName="Experience"
              headings={[
                {
                  title: `${experienceTitle.first_title}`,
                  span: `${experienceTitle.second_title}`,
                },
                {
                  title: `${experienceTitle.third_title}`,
                  span: `${experienceTitle.fourth_title}`,
                },
              ]}
            />
          ) : (
            <div className="xl:w-2/3">
              <Skeleton height={30} style={{ marginBottom: '10px' }} />
              <Skeleton height={60} />
            </div>
          )}

          {/* Experience Content */}
          <div className="mt-8 lg:flex">
            {/* Experience Companies List */}
            <div className="lg:w-1/3">
              {experiences.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {experiences.map((company) => (
                    <button
                      key={company._id}
                      onClick={() => setSelectedId(company._id)}
                      className={`border-border-1 rounded-lg border p-4 transition-all duration-300 ${
                        selectedCompany?._id === company._id ? 'bg-border-1' : 'hover:bg-border-1'
                      } focus:outline-none`}
                    >
                      <div className="flex items-center gap-3">
                        {company.company_logo_url && (
                          <img
                            src={company.company_logo_url}
                            alt={company.company_name}
                            className="h-10 w-10 object-contain"
                          />
                        )}
                        <div className="flex flex-col">
                          <h5 className="mb-1 text-left text-[18px] md:text-[24px]">{company.company_name}</h5>
                          <span className="text-neutral-300">
                            {new Date(company.job_start_date).toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric',
                            })}{' '}
                            -{' '}
                            {company.isPresent
                              ? 'Present'
                              : company.job_end_date
                                ? new Date(company.job_end_date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    year: 'numeric',
                                  })
                                : ''}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <Skeleton count={3} height={80} style={{ marginBottom: '10px' }} />
              )}
            </div>

            {/* Experience Details */}
            {selectedCompany ? (
              <div className="mt-8 lg:mt-0 lg:w-2/3 lg:pl-10">
                <h6 className="text-linear-4 text-[18px] sm:text-[20px]">
                  {selectedCompany.role || 'Software Engineer'}
                </h6>

                <ul className="mt-6 pl-4">
                  {selectedCompany.job_desc_list.map((desc, index) => (
                    <li
                      key={index}
                      className="text-neutral-0 before-item-dot experience-item-dot relative mb-4"
                      dangerouslySetInnerHTML={{
                        __html: desc.highlight
                          ? desc.text.replace(
                              new RegExp(`(${desc.highlight})`, 'gi'),
                              '<span class="text-secondary-2">$1</span>'
                            )
                          : desc.text,
                      }}
                    ></li>
                  ))}
                </ul>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                  {selectedCompany.experi_technologies.map((tech, index) => (
                    <button key={index} className="border-border-1 border px-4 py-1 text-neutral-300">
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-8 lg:mt-0 lg:w-2/3 lg:pl-10">
                <Skeleton height={45} style={{ marginBottom: '20px' }} />
                <Skeleton count={3} height={30} style={{ marginBottom: '10px' }} />
                <Skeleton height={40} style={{ marginTop: '30px' }} />
              </div>
            )}
          </div>
        </div>
      </SectionAnimatedBorder>
    </section>
  )
}

export default Experience
