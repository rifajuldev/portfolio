'use client'
import { useAppContext } from '@/lib/context/appContext'
import Skeleton from 'react-loading-skeleton'
import CooperationContacts from '../ui/CooperationContacts'
import CooperationSlide from '../ui/CooperationSlide'
import RotateAnimation from '../ui/RotateAnimation'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'
import SectionHeading from '../ui/SectionHeading'

const Cooperation = () => {
  const { cooperationTitle } = useAppContext()

  return (
    <section className="mb-8">
      {/* Cooperation Left Start */}
      <div>
        <SectionAnimatedBorder>
          <div className="p-4 md:p-10 lg:p-16">
            {/* Section Heading Start */}
            {cooperationTitle ? (
              <SectionHeading
                sectionName="Cooperation"
                headings={[
                  {
                    title: `${cooperationTitle.first_title}`,
                    span: `${cooperationTitle.second_title}`,
                  },
                  {
                    title: `${cooperationTitle.third_title}`,
                    span: `${cooperationTitle.fourth_title}`,
                  },
                ]}
              />
            ) : (
              <div className="xl:w-2/3">
                <Skeleton height={30} style={{ marginBottom: '10px' }} />
                <Skeleton height={60} />
              </div>
            )}
            {/* Section Heading End */}

            {/* Brand Slide */}
            <div className="border-border-1 mx-auto my-8 rounded-md border p-3 lg:w-3/4">
              <CooperationSlide />
            </div>

            {/* Cooperation Contact */}
            <CooperationContacts />
          </div>

          {/* Rotate Animation */}
          <RotateAnimation />
        </SectionAnimatedBorder>
      </div>
      {/* Cooperation Left End */}
    </section>
  )
}

export default Cooperation
