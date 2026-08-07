'use client'
import { educationDefaultValues } from '@/constants'
import { createEducation, updateEducation } from '@/lib/actions/education.action'
import { useAppContext } from '@/lib/context/appContext'
import { IEducation } from '@/lib/database/models/education.model'
import { educationFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export interface EducationFormProps {
  type: 'Create' | 'Update'
  education?: IEducation
  educationId?: string
}

const EducationForm = ({ type, education, educationId }: EducationFormProps) => {
  const { fetchEducations } = useAppContext()
  const initialValues = education && type === 'Update' ? education : educationDefaultValues
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<z.infer<typeof educationFormSchema>>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: initialValues,
  })

  if (initialValues.start_date) {
    initialValues.start_date = new Date(initialValues.start_date)
  }
  if (initialValues.end_date) {
    initialValues.end_date = new Date(initialValues.end_date)
  }

  const startSelectedDate = watch('start_date')
  const endSelectedDate = watch('end_date')
  const isPresent = watch('isPresent')
  const currentYear = new Date().getFullYear()

  async function onSubmit(values: z.infer<typeof educationFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    try {
      if (type === 'Create') {
        await createEducation({ education: values })
        toast.success('Education created successfully')
      }

      if (type === 'Update' && educationId) {
        await updateEducation({
          education: { ...values, _id: educationId },
        })
        toast.success('Education updated successfully')
      }

      await fetchEducations()
      reset()
      router.push('/#resume')
    } catch (error) {
      console.log(error)
      toast.error('An error occurred while saving the education.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <p className="form-label">Institute of Education</p>
          <input {...register('institute')} placeholder="Institute" className="form-control" />
          {errors.institute && <p className="form-validation-error">{errors.institute.message}</p>}
        </div>

        <div>
          <p className="form-label">Description of Education</p>
          <input {...register('desc')} placeholder="Description" className="form-control" />
          {errors.desc && <p className="form-validation-error">{errors.desc.message}</p>}
        </div>

        <div>
          <p className="form-label">Start Year</p>
          <DatePicker
            selected={startSelectedDate}
            onChange={(date: Date | null) => {
              if (date) {
                setValue('start_date', date, { shouldDirty: true })
                trigger(['start_date', 'end_date'])
              }
            }}
            dateFormat="yyyy"
            showYearPicker
            maxDate={new Date(currentYear, 11, 31)}
            className="form-control w-full"
            placeholderText="Select a year"
          />
          {errors.start_date && <p className="form-validation-error">{errors.start_date.message}</p>}
        </div>

        <div>
          <p className="form-label">End Year</p>
          <div className="flex items-center gap-4">
            <DatePicker
              selected={endSelectedDate}
              onChange={(date: Date | null) => {
                if (date) {
                  setValue('end_date', date, { shouldDirty: true })
                  trigger('end_date')
                }
              }}
              dateFormat="yyyy"
              showYearPicker
              maxDate={new Date(currentYear, 11, 31)}
              className="form-control w-full disabled:opacity-50"
              placeholderText="Select a year"
              disabled={isPresent}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 cursor-pointer"
                {...register('isPresent')}
                onChange={(e) => {
                  const isChecked = e.target.checked
                  setValue('isPresent', isChecked, { shouldDirty: true })

                  if (isChecked) {
                    setValue('end_date', undefined)
                  } else {
                    setValue('end_date', initialValues.end_date, {
                      shouldDirty: true,
                    })
                  }

                  trigger('end_date')
                }}
              />
              <span>Present</span>
            </div>
          </div>
          {errors.end_date && !isPresent && <p className="form-validation-error">{errors.end_date.message}</p>}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Education`}
      </button>
    </form>
  )
}

export default EducationForm
