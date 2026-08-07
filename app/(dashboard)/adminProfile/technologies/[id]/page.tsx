import TechnologyForm from '@/components/forms/TechnologyForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import { getTechnologyById } from '@/lib/actions/technology.action'

type UpdateTechnologyParams = {
  params: Promise<{
    id: string
  }>
}

const UpdateTechnology = async ({ params }: UpdateTechnologyParams) => {
  const { id } = await params
  const technology = await getTechnologyById(id)

  return (
    <DashboardPageLayout title="Update Technology">
      <TechnologyForm type="Update" technology={technology} technologyId={technology._id} />
    </DashboardPageLayout>
  )
}

export default UpdateTechnology
