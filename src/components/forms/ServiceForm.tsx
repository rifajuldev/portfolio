'use client'
import { serviceDefaultValues } from '@/constants'
import { createService, updateService } from '@/lib/actions/service.action'
import { useAppContext } from '@/lib/context/appContext'
import { IService } from '@/lib/database/models/service.model'
import { serviceFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export interface ServiceFormProps {
  type: 'Create' | 'Update'
  service?: IService
  serviceId?: string
}

const ServiceForm = ({ type, service, serviceId }: ServiceFormProps) => {
  const { fetchServices } = useAppContext()
  const initialValues = service && type === 'Update' ? service : serviceDefaultValues
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<z.infer<typeof serviceFormSchema>>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: initialValues,
  })

  // handling form submit
  async function onSubmit(values: z.infer<typeof serviceFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    try {
      if (type === 'Create') {
        await createService({
          service: values,
        })
        toast.success('Service created successfully')
      }

      if (type === 'Update' && serviceId) {
        await updateService({
          service: {
            ...values,
            _id: serviceId,
          },
        })
        toast.success('Service updated successfully')
      }

      await fetchServices()
      reset()
      router.push('/#services')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the service.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Service Title */}
        <div>
          <p className="form-label">Service Title</p>
          <input id="title" {...register('title')} placeholder="Service Title" className="form-control" />
          {errors.title && <p className="form-validation-error">{errors.title.message}</p>}
        </div>

        {/* Service Icon name */}
        <div>
          <p className="form-label">Service Icon (only remix icon)</p>
          <input
            {...register('icon_name')}
            placeholder="Enter React Icon name (e.g., RiWindowLine)"
            className="form-control"
          />
          {errors.icon_name && <p className="form-validation-error">{errors.icon_name.message}</p>}
        </div>

        {/* Service Description */}
        <div>
          <p className="form-label">Service Description</p>
          <textarea {...register('desc')} placeholder="Description" className="form-control h-72" />
          {errors.desc && <p className="form-validation-error">{errors.desc.message}</p>}
        </div>

        {/* Highlight Text */}
        <div>
          <p className="form-label">Highlighted Text in Description (optional)</p>
          <textarea
            {...register('highlightText')}
            placeholder="Description highlighted Text"
            className="form-control h-72"
          />
        </div>
      </div>

      {/* Service Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Service`}
      </button>
    </form>
  )
}

export default ServiceForm
