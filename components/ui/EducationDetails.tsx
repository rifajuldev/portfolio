'use client'
import { useAppContext } from '@/lib/context/appContext'
import { RiBookMarkedLine } from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'

const EducationDetails = () => {
  const { educations } = useAppContext()

  return (
    <div className="bg-bg-3 border-border-1 relative h-full overflow-hidden rounded-lg border p-4 md:p-10">
      {/* Heading */}
      <div className="flex items-center">
        <RiBookMarkedLine className="text-primary-2 text-[32px]" />
        <h2 className="mb-0 ml-2 text-[33px] md:text-[42px]">Education</h2>
      </div>

      {/* Content */}
      <div className="relative mt-8 h-full">
        {educations.length > 0 ? (
          <>
            <ul className="pl-4">
              {educations.map(({ _id, start_date, end_date, isPresent, institute, desc }) => {
                const startDate = new Date(start_date)
                const endDate = end_date ? new Date(end_date) : null

                return (
                  <li key={_id} className="before-item-dot education-before-item-dot relative z-10 mb-4 last:mb-0">
                    <div className="flex flex-wrap gap-2 md:flex-nowrap">
                      <p className="mb-0 text-[16px] whitespace-nowrap text-neutral-300">
                        {startDate.getFullYear()} - {isPresent ? 'Present' : endDate ? endDate.getFullYear() : ''}:
                      </p>
                      <div>
                        <span className="text-primary-2">{institute}</span>

                        <p className="text-neutral-0 mb-4">{desc}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="border-border-1 absolute top-[10px] left-[4.5px] z-0 h-[80%] border-l lg:top-[13px] lg:left-[5px]"></div>
          </>
        ) : (
          <div>
            <Skeleton count={4} height={62} containerClassName="flex-1" style={{ marginBottom: '15px' }} />
          </div>
        )}
      </div>

      {/* Overly */}
      <div className="bg-overlay absolute bottom-0 left-0 z-10"></div>
    </div>
  )
}

export default EducationDetails
