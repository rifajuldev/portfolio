'use client'
import { socialContactDefaultValues } from '@/constants'
import { updateSocialContacts } from '@/lib/actions/socialContact.action'
import { useAppContext } from '@/lib/context/appContext'
import { socialContactFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const SocialContactForm = () => {
  const { socialContacts, fetchSocialContacts } = useAppContext()
  const initialValues = socialContacts ? { ...socialContacts } : socialContactDefaultValues

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<z.infer<typeof socialContactFormSchema>>({
    resolver: zodResolver(socialContactFormSchema),
    defaultValues: initialValues,
  })

  // admin contact data dynamically set in form
  useEffect(() => {
    if (socialContacts) {
      reset(socialContacts)
    }
  }, [socialContacts, reset])

  async function onSubmit(values: z.infer<typeof socialContactFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    try {
      await updateSocialContacts({ ...values })

      await fetchSocialContacts()
      reset()
      toast.success('Social Links updated successfully')
    } catch (error) {
      console.log(error)
      toast.error('An Error occurred while saving the social links')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/* Facebook */}
        <div>
          <p className="form-label">Facebook Link</p>
          <input {...register('facebook_link')} placeholder="Facebook Link" className="form-control" />
          {errors.facebook_link && <p className="form-validation-error">{errors.facebook_link.message}</p>}
        </div>

        {/* Twitter */}
        <div>
          <p className="form-label">Twitter Link</p>
          <input {...register('twitter_link')} placeholder="Twitter Link" className="form-control" />
          {errors.twitter_link && <p className="form-validation-error">{errors.twitter_link.message}</p>}
        </div>

        {/* Linkedin */}
        <div>
          <p className="form-label">Linkedin Link</p>
          <input {...register('linkedin_link')} placeholder="Linkedin Link" className="form-control" />
          {errors.linkedin_link && <p className="form-validation-error">{errors.linkedin_link.message}</p>}
        </div>

        {/* Github */}
        <div>
          <p className="form-label">Github Link</p>
          <input {...register('github_link')} placeholder="Github Link" className="form-control" />
          {errors.github_link && <p className="form-validation-error">{errors.github_link.message}</p>}
        </div>
      </div>

      {/* Social Contact Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Updating...' : 'Update Social Links'}
      </button>
    </form>
  )
}

export default SocialContactForm
