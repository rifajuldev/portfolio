import GitJournalingForm from '@/components/forms/GitJournalingForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import { getGitById } from '@/lib/actions/gitJournaling.action'

type UpdateGitParams = {
  params: Promise<{
    id: string
  }>
}

const UpdateGit = async ({ params }: UpdateGitParams) => {
  const { id } = await params
  const git = await getGitById(id)

  return (
    <DashboardPageLayout title="Update Git">
      <GitJournalingForm type="Update" git={git} gitId={git._id} />
    </DashboardPageLayout>
  )
}

export default UpdateGit
