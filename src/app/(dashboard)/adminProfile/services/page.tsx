'use client'
import ServiceForm from '@/components/forms/ServiceForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteService } from '@/lib/actions/service.action'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

const AdminServices = () => {
  const { services, fetchServices } = useAppContext()
  const router = useRouter()

  const handleDelete = async (id: string) => {
    await deleteService({ serviceId: id })

    await fetchServices()
    toast.success('Experience Deleted successfully')
    router.push('/#services')
  }

  return (
    <DashboardPageLayout title="Services">
      <div className="mb-12">
        <h1 className="form-heading">Create New Service</h1>
        <ServiceForm type="Create" />
      </div>

      <div className="mb-12">
        <h1 className="form-heading">All Services</h1>

        <div className="form-container">
          {services.map(({ _id, title, icon_name, desc, highlightText }) => {
            const IconComponent = RiIcons[icon_name as keyof typeof RiIcons]

            return (
              <div
                key={_id}
                className="bg-bg-3 border-border-1 relative h-full rounded-md border px-[35px] pt-[70px] pb-[35px] lg:px-[42px] lg:pt-[93px] lg:pb-[42px]"
              >
                {IconComponent ? <IconComponent className="text-neutral-0 h-6 w-6" /> : null}

                <h6 className="my-4 text-[20px] leading-tight font-medium">{title}</h6>

                {/* Description with Highlighted Text */}
                <p
                  className="mb-4 text-base text-neutral-300"
                  dangerouslySetInnerHTML={{
                    __html: highlightText
                      ? (desc || '').replace(
                          new RegExp(`(${highlightText.split(' ').join('|')})`, 'gi'),
                          '<span class="text-secondary-2">$1</span>'
                        )
                      : desc || '',
                  }}
                ></p>

                {/* Edit and Delete Buttons */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4">
                  <div className="flex gap-4 rounded-sm shadow-sm transition-all">
                    <Link href={`/adminProfile/services/${_id}`} className="text-neutral-0 hover:text-primary-2">
                      <FaRegEdit size={22} />
                    </Link>

                    <DeleteConfirmation
                      onConfirm={() => handleDelete(_id)}
                      title="Are you sure you want to delete this experience?"
                    />
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

export default AdminServices
