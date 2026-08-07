'use client'
import { cooperationTitleDefaultValues } from '@/constants'
import { updateCooperationTitle } from '@/lib/actions/cooperationTitle.action'
import { useAppContext } from '@/lib/context/appContext'
import { cooperationTitleFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const CooperationTitleForm = () => {
  const { cooperationTitle, fetchCooperationTitle } = useAppContext()

  const initialValues = cooperationTitle ? cooperationTitle : cooperationTitleDefaultValues

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<z.infer<typeof cooperationTitleFormSchema>>({
    resolver: zodResolver(cooperationTitleFormSchema),
    defaultValues: initialValues,
  })

  useEffect(() => {
    if (cooperationTitle) {
      reset(cooperationTitle)
    }
  }, [cooperationTitle, reset])

  // handling form submit
  async function onSubmit(values: z.infer<typeof cooperationTitleFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    try {
      await updateCooperationTitle(values)

      await fetchCooperationTitle()
      reset()
      toast.success('Cooperation title updated successfully')
    } catch (error) {
      console.log(error)
      toast.error('Error while updating cooperation title')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* First Title */}
        <div>
          <p className="form-label">First Title</p>
          <input {...register('first_title')} placeholder="First Title" className="form-control" />
          {errors.first_title && <p className="form-validation-error">{errors.first_title.message}</p>}
        </div>

        {/* Second Title */}
        <div>
          <p className="form-label">Second Title</p>
          <input {...register('second_title')} placeholder="Second Title" className="form-control" />
          {errors.second_title && <p className="form-validation-error">{errors.second_title.message}</p>}
        </div>

        {/* Third Title */}
        <div>
          <p className="form-label">Third Title</p>
          <input {...register('third_title')} placeholder="Third Title" className="form-control" />
          {errors.third_title && <p className="form-validation-error">{errors.third_title.message}</p>}
        </div>

        {/* Fourth Title */}
        <div>
          <p className="form-label">Fourth Title</p>
          <input {...register('fourth_title')} placeholder="Fourth Title" className="form-control" />
          {errors.fourth_title && <p className="form-validation-error">{errors.fourth_title.message}</p>}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : 'Update Cooperation Title'}
      </button>
    </form>
  )
}

export default CooperationTitleForm
