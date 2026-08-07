import AdminContactForm from '@/components/forms/AdminContactForm'
import SocialContactForm from '@/components/forms/SocialContactForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'

const page = () => {
  return (
    <DashboardPageLayout title="Contacts">
      <div className="mb-12">
        <h1 className="form-heading">Update Contacts</h1>
        <AdminContactForm />
      </div>

      <div>
        <h1 className="form-heading">Update Social links</h1>
        <SocialContactForm />
      </div>
    </DashboardPageLayout>
  )
}

export default page
