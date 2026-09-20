import StatisticsForm from '@/components/forms/StatisticsForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import { getStatisticsById } from '@/lib/actions/statistics.action'

type UpdateStatisticsProps = {
  params: Promise<{
    id: string
  }>
}

const UpdateStatistics = async ({ params }: UpdateStatisticsProps) => {
  const { id } = await params
  const statistic = await getStatisticsById(id)

  return (
    <DashboardPageLayout title="Update Statistics">
      <StatisticsForm type="Update" statistic={statistic} statisticId={statistic._id} />
    </DashboardPageLayout>
  )
}

export default UpdateStatistics
