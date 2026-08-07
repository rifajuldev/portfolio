'use client'
import CooperationAvatarForm from '@/components/forms/CooperationAvatarForm'
import CooperationForm from '@/components/forms/CooperationForm'
import CooperationTitleForm from '@/components/forms/CooperationTitleForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteCooperation } from '@/lib/actions/cooperation.action'
import { useAppContext } from '@/lib/context/appContext'
import toast from 'react-hot-toast'

const AdminCooperation = () => {
  const { cooperations, fetchCooperations } = useAppContext()

  const handleDelete = async (id: string) => {
    await deleteCooperation({ cooperationId: id })

    await fetchCooperations()
    toast.success('Trusted company Deleted successfully')
  }

  return (
    <DashboardPageLayout title="Cooperation">
      <div className="mb-12">
        <h1 className="form-heading">Update Cooperation Title</h1>
        <CooperationTitleForm />
      </div>

      <div className="mb-12">
        <h1 className="form-heading">Create new Trusted Company</h1>
        <CooperationForm />
      </div>

      <div className="mb-12">
        <h1 className="form-heading">All trusted companies</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cooperations.map(({ _id, company_name, logo_url, company_position }) => (
            <div key={_id} className="border-border-1 rounded-lg border p-4">
              <div className="flex-between">
                <img src={logo_url} alt={company_name} />

                <p>Position: {company_position}</p>

                {/* Edit and Delete Buttons */}
                <div>
                  <DeleteConfirmation
                    onConfirm={() => handleDelete(_id)}
                    title="Are you sure you want to delete this company?"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h1 className="form-heading">Update Cooperation Avatar</h1>
        <CooperationAvatarForm />
      </div>
    </DashboardPageLayout>
  )
}

export default AdminCooperation
