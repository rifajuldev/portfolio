'use client'
import GitJournalingForm from '@/components/forms/GitJournalingForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteGit } from '@/lib/actions/gitJournaling.action'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'
import { LuDot } from 'react-icons/lu'

const AdminGitJournaling = () => {
  const { gits, fetchGits } = useAppContext()

  const handleDelete = async (id: string) => {
    await deleteGit({ gitId: id })

    await fetchGits()
    toast.success('Git Deleted successfully')
  }

  return (
    <DashboardPageLayout title="Git journaling">
      <div className="mb-12">
        <h1 className="form-heading">Create New Git</h1>
        <GitJournalingForm type="Create" />
      </div>

      <div>
        <h1 className="form-heading">Latest 5 gits</h1>

        <div className="flex flex-col gap-4">
          {gits.map(({ _id, date, title }) => {
            const gitDate = new Date(date)
            const formattedDate = gitDate.toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
            })

            return (
              <div key={_id} className="border-border-1 rounded-md border px-5 py-5">
                {/* container */}
                <div className="flex-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* date */}
                    <div>{formattedDate}</div>

                    <LuDot size={24} />

                    <div>
                      Title: <span className="text-primary-2">{title}</span>
                    </div>
                  </div>

                  {/* Edit and Update button */}
                  <div>
                    <div className="flex gap-4 rounded-sm shadow-sm transition-all">
                      <Link
                        href={`/adminProfile/git-journaling/${_id}`}
                        className="text-neutral-0 hover:text-primary-2"
                      >
                        <FaRegEdit size={22} />
                      </Link>

                      <DeleteConfirmation
                        onConfirm={() => handleDelete(_id)}
                        title="Are you sure you want to delete this git?"
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

export default AdminGitJournaling
