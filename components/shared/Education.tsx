import CooperationGitJournaling from '../ui/CooperationGitJournaling'
import EducationDetails from '../ui/EducationDetails'

const Education = () => {
  return (
    <section id="resume" className="mb-8">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left side */}
        <div className="w-full overflow-hidden lg:w-3/5 xl:w-2/3">
          <EducationDetails />
        </div>

        {/* Right side */}
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <CooperationGitJournaling />
        </div>
      </div>
    </section>
  )
}

export default Education
