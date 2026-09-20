import ExperienceForm from '@/components/forms/ExperienceForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import { getExperienceById } from '@/lib/actions/experience.action'

type UpdateExperienceParams = {
  params: Promise<{
    id: string
  }>
}

const UpdateExperience = async ({ params }: UpdateExperienceParams) => {
  const { id } = await params
  const experience = await getExperienceById(id)

  return (
    <DashboardPageLayout title="Update Experience">
      <ExperienceForm type="Update" experience={experience} experienceId={experience._id} />
    </DashboardPageLayout>
  )
}

export default UpdateExperience
