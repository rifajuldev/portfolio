import { cooperationTitle } from '@/constants'
import CooperationContacts from '../ui/CooperationContacts'
import RotateAnimation from '../ui/RotateAnimation'
import SectionAnimatedBorder from '../ui/SectionAnimatedBorder'
import SectionHeading from '../ui/SectionHeading'

const Cooperation = () => {
  return (
    <section className="mb-8">
      <div>
        <SectionAnimatedBorder>
          <div className="p-4 md:p-10 lg:p-16">
            <SectionHeading
              sectionName="Connect With Me"
              headings={[
                {
                  title: cooperationTitle.first_title,
                  span: cooperationTitle.second_title,
                },
                {
                  title: cooperationTitle.third_title,
                  span: cooperationTitle.fourth_title,
                },
              ]}
            />

            <CooperationContacts />
          </div>

          <RotateAnimation />
        </SectionAnimatedBorder>
      </div>
    </section>
  )
}

export default Cooperation
