'use client'
import ExperienceForm from '@/components/forms/ExperienceForm'
import ExperienceTitleForm from '@/components/forms/ExperienceTitleForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteExperience } from '@/lib/actions/experience.action'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'

const AdminExperience = () => {
  const { experiences, fetchExperiences } = useAppContext()
  const router = useRouter()

  const handleDelete = async (id: string) => {
    await deleteExperience({ experienceId: id })

    await fetchExperiences()
    toast.success('Experience Deleted successfully')
    router.push('/#portfolio')
  }

  return (
    <DashboardPageLayout title="Experience">
      <div className="mb-12">
        <h1 className="form-heading">Update Experience Title</h1>
        <ExperienceTitleForm />
      </div>

      <div className="mb-12">
        <h1 className="form-heading">Create new Experience</h1>
        <ExperienceForm type="Create" />
      </div>

      <div className="mb-12">
        <h1 className="form-heading">All Experiences</h1>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {experiences.map(
            ({
              _id,
              job_desc_list,
              experi_technologies,
              company_name,
              company_logo_url,
              role,
              job_start_date,
              job_end_date,
              isPresent,
            }) => (
              <div key={_id} className="border-border-1 rounded-lg border p-4">
                <div className="relative">
                  <div>
                    <div className="flex items-center gap-2">
                      <img src={company_logo_url} alt={company_name} />
                      <div className="ml-2 flex flex-col">
                        <h5 className="mb-1 text-[18px] md:text-[24px]">{company_name}</h5>
                        <span className="text-neutral-300">
                          {new Date(job_start_date).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })}{' '}
                          -{' '}
                          {isPresent
                            ? 'Present'
                            : job_end_date
                              ? new Date(job_end_date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  year: 'numeric',
                                })
                              : ''}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 lg:mt-4">
                      <h6 className="text-linear-4 text-[18px] sm:text-[20px]">{role}</h6>

                      <ul className="mt-6 pl-4">
                        {job_desc_list.map((desc, index) => (
                          <li
                            key={index}
                            className="text-neutral-0 before-item-dot experience-item-dot relative mb-4"
                            dangerouslySetInnerHTML={{
                              __html: (desc.text || '').replace(
                                new RegExp(`(${desc.highlight || ''})`, 'gi'),
                                '<span class="text-secondary-2">$1</span>'
                              ),
                            }}
                          ></li>
                        ))}
                      </ul>

                      <div className="mt-12 flex flex-wrap items-center gap-4">
                        {experi_technologies.map((tech, index) => (
                          <button key={index} className="border-border-1 border px-4 py-1 text-neutral-300">
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Edit and Delete Buttons */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4">
                    <div className="flex gap-4 rounded-sm shadow-sm transition-all">
                      <Link href={`/adminProfile/experience/${_id}`} className="text-neutral-0 hover:text-primary-2">
                        <FaRegEdit size={22} />
                      </Link>

                      <DeleteConfirmation
                        onConfirm={() => handleDelete(_id)}
                        title="Are you sure you want to delete this experience?"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </DashboardPageLayout>
  )
}

export default AdminExperience
