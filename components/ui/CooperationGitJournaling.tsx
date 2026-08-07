'use client'
import { useAppContext } from '@/lib/context/appContext'
import Skeleton from 'react-loading-skeleton'
import SectionHeading from './SectionHeading'

const CooperationGitJournaling = () => {
  const { gits } = useAppContext()

  return (
    <div className="bg-bg-3 border-border-1 relative h-full overflow-hidden rounded-lg border p-4 md:p-10">
      {/* Section Heading Start */}
      <SectionHeading sectionName="Git Journaling" />
      {/* Section Heading End */}

      {/* Git Lists Start */}
      <div className="relative mt-6 mb-0 h-full">
        {gits.length > 0 ? (
          <>
            <ul className="pl-4">
              {gits.map(({ _id, date, title }) => {
                const gitDate = new Date(date)
                const formattedDate = gitDate.toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                })

                return (
                  <li key={_id} className="before-item-dot education-before-item-dot relative z-10 mb-4 last:mb-0">
                    <div className="flex flex-wrap gap-2 xl:flex-nowrap">
                      <p className="mb-0 text-[16px] whitespace-nowrap text-neutral-300">{formattedDate}:</p>
                      <p className="text-neutral-0 mb-4">{title}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="border-border-1 absolute top-[12px] left-[4.5px] z-0 h-[90%] border-l lg:top-[15px] lg:left-[5px]"></div>
          </>
        ) : (
          <div>
            <Skeleton count={5} height={62} containerClassName="flex-1" style={{ marginBottom: '15px' }} />
          </div>
        )}
      </div>
      {/* Git Lists End */}

      <div className="bg-overlay absolute bottom-0 left-0 z-10"></div>
    </div>
  )
}

export default CooperationGitJournaling
