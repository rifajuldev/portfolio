'use client'
import EducationForm from '@/components/forms/EducationForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteEducation } from '@/lib/actions/education.action'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'
import { LuDot } from 'react-icons/lu'

const AdminEducation = () => {
  const { educations, fetchEducations } = useAppContext()
  const router = useRouter()

  const handleDelete = async (id: string) => {
    await deleteEducation({ educationId: id })

    await fetchEducations()
    toast.success('Education Deleted successfully')
    router.push('/#resume')
  }

  return (
    <DashboardPageLayout title="Education">
      <div className="mb-12">
        <h1 className="form-heading">Create New Education</h1>
        <EducationForm type="Create" />
      </div>

      <div>
        <h1 className="form-heading">All Educations</h1>

        <div className="flex flex-col gap-4">
          {educations.map(({ _id, start_date, end_date, isPresent, institute, desc }) => {
            const startDate = new Date(start_date)
            const endDate = end_date ? new Date(end_date) : null

            return (
              <div key={_id} className="border-border-1 rounded-md border px-5 py-5">
                {/* container */}
                <div className="flex-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* date */}
                    <div>
                      {startDate.getFullYear()} - {isPresent ? 'Present' : endDate ? endDate.getFullYear() : ''}
                    </div>

                    <LuDot size={24} />

                    <div>
                      Institute: <span className="text-primary-2">{institute}</span>
                    </div>

                    <LuDot size={24} />

                    <div>
                      Description:{' '}
                      <span className="text-neutral-0" title={desc}>
                        {desc}
                      </span>
                    </div>
                  </div>

                  {/* Edit and Update button */}
                  <div>
                    <div className="flex gap-4 rounded-sm shadow-sm transition-all">
                      <Link href={`/adminProfile/education/${_id}`} className="text-neutral-0 hover:text-primary-2">
                        <FaRegEdit size={22} />
                      </Link>

                      <DeleteConfirmation
                        onConfirm={() => handleDelete(_id)}
                        title="Are you sure you want to delete this education?"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardPageLayout>
  )
}

export default AdminEducation
