'use client'
import TechnologyForm from '@/components/forms/TechnologyForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteTechnology } from '@/lib/actions/technology.action'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'

const AdminDashboardBlog = () => {
  const { technologies, fetchTechnology } = useAppContext()

  // handling delete technology
  const handleDelete = async (id: string) => {
    await deleteTechnology({ technologyId: id })

    await fetchTechnology()
    toast.success('Technology Deleted successfully')
  }

  return (
    <DashboardPageLayout title="Technologies">
      <div className="mb-12">
        <h1 className="form-heading">Create New Technology</h1>
        <TechnologyForm type="Create" />
      </div>

      <div>
        <h1 className="form-heading">All Technologies</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map(({ _id, tech_name, tech_img_url, show_in_hero, skill_position }) => (
            <div key={_id} className="flex flex-col justify-stretch">
              <div className="border-border-1 bg-bg-3 flex-grow rounded-lg border p-4">
                <div className="relative mb-4">
                  <div className="absolute top-2 right-2 flex flex-col gap-4 rounded-sm shadow-sm transition-all">
                    <Link href={`/adminProfile/technologies/${_id}`} className="text-neutral-0 hover:text-primary-2">
                      <FaRegEdit size={22} />
                    </Link>

                    <DeleteConfirmation
                      onConfirm={() => handleDelete(_id)}
                      title="Are you sure you want to delete this technology?"
                    />
                  </div>

                  <img className="h-32 w-full" src={tech_img_url} alt="project" />
                </div>

                <ul className="mt-4">
                  <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                    <div className="flex justify-between">
                      <p className="mb-0 text-end">Technology Name</p>
                      <p className="mb-0 text-end text-neutral-300">{tech_name}</p>
                    </div>
                  </li>

                  <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                    <div className="flex justify-between">
                      <p className="mb-0 text-end">Show in hero</p>
                      <p className="mb-0 text-end text-neutral-300">{show_in_hero == true ? 'Yes' : 'No'}</p>
                    </div>
                  </li>

                  <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                    <div className="flex justify-between">
                      <p className="mb-0 text-end">Position in Skill</p>
                      <p className="mb-0 text-end text-neutral-300">{skill_position === 'Top' ? 'Top' : 'Bottom'}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardPageLayout>
  )
}

export default AdminDashboardBlog
