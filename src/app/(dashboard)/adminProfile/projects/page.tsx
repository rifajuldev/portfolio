'use client'
import ProjectForm from '@/components/forms/ProjectForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteProject } from '@/lib/actions/project.action'
import { useAppContext } from '@/lib/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'

const AdminDashboardProjects = () => {
  const { projects, fetchProjects } = useAppContext()
  const router = useRouter()

  const handleDelete = async (id: string) => {
    await deleteProject({ projectId: id })

    await fetchProjects()
    toast.success('Project Deleted successfully')
    router.push('/#projects')
  }
  return (
    <DashboardPageLayout title="Projects">
      <div className="mb-12">
        <h1 className="form-heading">Create New Project</h1>
        <ProjectForm type="Create" />
      </div>

      <div>
        <h1 className="form-heading">All Projects</h1>
        <div className="form-container">
          {projects.map(({ _id, project_img_url, title, desc, client, completion_time, technologies }) => (
            <div key={_id} className="flex flex-col justify-stretch">
              <div className="border-border-1 bg-bg-3 flex-grow rounded-lg border p-4">
                {/* Top Side */}
                <div className="relative mb-4">
                  <div className="absolute top-2 right-2 flex flex-col gap-4 rounded-sm shadow-sm transition-all">
                    <Link href={`/adminProfile/projects/${_id}`} className="text-neutral-0 hover:text-primary-2">
                      <FaRegEdit size={22} />
                    </Link>

                    <DeleteConfirmation
                      onConfirm={() => handleDelete(_id)}
                      title="Are you sure you want to delete this project?"
                    />
                  </div>

                  <Image className="w-full rounded-md" src={project_img_url} alt="project" width={500} height={300} />
                </div>

                {/* Bottom Side */}
                <div>
                  <h5 className="text-primary-1">{title}</h5>
                  <p>{desc}</p>

                  <div className="mt-4">
                    <p className="text-secondary-2 border-border-1 mb-4 border-b pb-4">Project Info</p>

                    <ul>
                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Client</p>
                          <p className="mb-0 text-end text-neutral-300">{client}</p>
                        </div>
                      </li>

                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Completion Time</p>
                          <p className="mb-0 text-end text-neutral-300">{completion_time}</p>
                        </div>
                      </li>

                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-right">Technologies</p>
                          <p className="mb-0 text-right text-neutral-300">
                            {technologies.map((tech, index) => (
                              <span key={index} className="mr-2">
                                {tech}
                                {index < technologies.length - 1 && ', '}
                              </span>
                            ))}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardPageLayout>
  )
}

export default AdminDashboardProjects
