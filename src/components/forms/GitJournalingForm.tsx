'use client'
import { gitJournalingDefaultValues } from '@/constants'
import { createGit, updateGit } from '@/lib/actions/gitJournaling.action'
import { useAppContext } from '@/lib/context/appContext'
import { IGit } from '@/lib/database/models/gitJournaling.model'
import { gitJournalingFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export interface BlogFormProps {
  type: 'Create' | 'Update'
  git?: IGit
  gitId?: string
}

const GitJournalingForm = ({ type, git, gitId }: BlogFormProps) => {
  const { fetchGits } = useAppContext()
  const initialValues = git && type === 'Update' ? { ...git, date: new Date(git.date) } : gitJournalingDefaultValues
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof gitJournalingFormSchema>>({
    resolver: zodResolver(gitJournalingFormSchema),
    defaultValues: initialValues,
  })

  const selectedDate = watch('date')

  // handle form submit
  async function onSubmit(values: z.infer<typeof gitJournalingFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    try {
      if (type === 'Create') {
        await createGit({
          git: values,
        })
        toast.success('Git created successfully')
      }

      if (type === 'Update' && gitId) {
        await updateGit({
          git: {
            ...values,
            _id: gitId,
          },
        })
        toast.success('Git updated successfully')
        router.push('/adminProfile/git-journaling')
      }

      await fetchGits()
      reset()
    } catch (error) {
      console.log(error)
      toast.error('An error occurred while saving the git.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Title  */}
        <div>
          <p className="form-label">Git Title</p>
          <input {...register('title')} placeholder="Git Title" className="form-control" />
          {errors.title && <p className="form-validation-error">{errors.title.message}</p>}
        </div>

        {/* Git Date Picker */}
        <div>
          <p className="form-label">Git Date</p>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
              if (date) {
                setValue('date', date, { shouldDirty: true })
                trigger('date')
              }
            }}
            dateFormat="dd-MM-yyyy"
            maxDate={new Date()}
            className="form-control"
            placeholderText="Select a date"
          />
          {errors.date && <p className="form-validation-error">{errors.date.message}</p>}
        </div>
      </div>

      {/* Git Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Git`}
      </button>
    </form>
  )
}

export default GitJournalingForm
