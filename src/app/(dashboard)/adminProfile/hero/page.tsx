import HeroForm from '@/components/forms/HeroForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'

const page = () => {
  return (
    <DashboardPageLayout title="Hero">
      <HeroForm />
    </DashboardPageLayout>
  )
}

export default page
