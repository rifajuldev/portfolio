import { mySkills, skillDisplayNames } from '@/constants'
import MySkillsSlide from '../ui/MySkillsSlide'
import RotateAnimation from '../ui/RotateAnimation'
import SectionHeading from '../ui/SectionHeading'

const filteredSkills = Object.entries(mySkills)

const MySkills = () => {
  return (
    <section id="skills" className="pb-[60px]">
      <div className="bg-bg-3 border-border-1 relative overflow-hidden rounded-lg border">
        <div className="relative z-40 py-[60px]">
          <div className="relative z-20">
            {/* Section Heading */}
            <SectionHeading sectionName="Projects" headings={[{ title: 'My Skills' }]} center={true} />

            <div className="mt-16">
              <div className="lg:flex">
                {/* Left Side */}
                <div className="lg:w-1/2">
                  <MySkillsSlide />
                </div>

                {/* Right Side */}
                <div className="border-border-1 mt-8 pl-8 md:border-l md:pl-0 lg:mt-0 lg:w-1/2">
                  <div className="mx-auto md:w-5/6">
                    <ul className="text-neutral-0 flex h-full flex-col justify-between gap-4 pl-4">
                      {filteredSkills.map(([key, skills]) => (
                        <li key={key} className="before-item-dot my-skills-item-dot relative">
                          <div className="flex flex-col gap-2 md:flex-row">
                            <p className="mb-0 text-nowrap">{skillDisplayNames[key] || key}: </p>
                            <span className="text-neutral-300">{skills.join(', ')}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rotate Animation */}
        <RotateAnimation position="top" />
      </div>
    </section>
  )
}

export default MySkills
