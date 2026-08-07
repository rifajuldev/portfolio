'use client'
import { adminContactDefaultValues } from '@/constants'
import { updateAdminContacts } from '@/lib/actions/adminContact.action'
import { useAppContext } from '@/lib/context/appContext'
import { adminContactFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const AdminContactForm = () => {
  const router = useRouter()
  const { adminContacts, fetchAdminContacts } = useAppContext()
  const initialValues = adminContacts ? adminContacts : adminContactDefaultValues

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<z.infer<typeof adminContactFormSchema>>({
    resolver: zodResolver(adminContactFormSchema),
    defaultValues: initialValues,
  })

  // admin contact data dynamically set in form
  useEffect(() => {
    if (adminContacts) {
      reset(adminContacts)
    }
  }, [adminContacts, reset])

  async function onSubmit(values: z.infer<typeof adminContactFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    try {
      await updateAdminContacts({ ...values })

      await fetchAdminContacts()
      reset()
      router.push('/#contact')
      toast.success('Contacts updated successfully')
    } catch (error) {
      console.log(error)
      toast.error('An Error occurred while saving the contacts')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Phone Number */}
        <div>
          <p className="form-label">Phone Number</p>
          <input {...register('phone_number')} placeholder="Phone Number" className="form-control" />
          {errors.phone_number && <p className="form-validation-error">{errors.phone_number.message}</p>}
        </div>

        {/* Email */}
        <div>
          <p className="form-label">Email</p>
          <input {...register('email')} placeholder="Email" className="form-control" />
          {errors.email && <p className="form-validation-error">{errors.email.message}</p>}
        </div>

        {/* Whatsapp */}
        <div>
          <p className="form-label">Whatsapp</p>
          <input {...register('whatsapp')} placeholder="Whatsapp" className="form-control" />
          {errors.whatsapp && <p className="form-validation-error">{errors.whatsapp.message}</p>}
        </div>

        {/* Address */}
        <div>
          <p className="form-label">Address</p>
          <input {...register('address')} placeholder="Address" className="form-control" />
          {errors.address && <p className="form-validation-error">{errors.address.message}</p>}
        </div>
      </div>

      {/* Admin Contact Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Updating...' : 'Update Contact'}
      </button>
    </form>
  )
}

export default AdminContactForm
