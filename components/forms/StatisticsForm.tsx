'use client'
import { statisticsDefaultValues } from '@/constants'
import { createStats, updateStatistics } from '@/lib/actions/statistics.action'
import { useAppContext } from '@/lib/context/appContext'
import { IStatistics } from '@/lib/database/models/statistics.model'
import { statisticsFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export interface StatisticsFormProps {
  type: 'Create' | 'Update'
  statistic?: IStatistics
  statisticId?: string
}

const StatisticsForm = ({ type, statistic, statisticId }: StatisticsFormProps) => {
  const { fetchStatistics } = useAppContext()
  const initialValues = statistic && type === 'Update' ? statistic : statisticsDefaultValues
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<z.infer<typeof statisticsFormSchema>>({
    resolver: zodResolver(statisticsFormSchema),
    defaultValues: initialValues,
  })

  // handling form submit
  async function onSubmit(values: z.infer<typeof statisticsFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    try {
      if (type === 'Create') {
        await createStats({
          stats: values,
        })
        toast.success('Statistic created successfully')
      }

      if (type === 'Update' && statisticId) {
        await updateStatistics({
          stats: {
            ...values,
            _id: statisticId,
          },
        })
        router.push('/adminProfile/statistics')
        toast.success('Statistic updated successfully')
      }

      await fetchStatistics()
      reset()
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the service.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Statistics Title */}
        <div>
          <p className="form-label">Stats Title</p>
          <input {...register('stats_title')} placeholder="Service Title" className="form-control" />
          {errors.stats_title && <p className="form-validation-error">{errors.stats_title.message}</p>}
        </div>

        {/* Statistics Icon name */}
        <div>
          <p className="form-label">Stats Icon (only remix icon)</p>
          <input
            {...register('icon_name')}
            placeholder="Enter React Icon name (e.g., RiWindowLine)"
            className="form-control"
          />
          {errors.icon_name && <p className="form-validation-error">{errors.icon_name.message}</p>}
        </div>

        {/* Count Field */}
        <div>
          <p className="form-label">Count</p>
          <input
            type="number"
            {...register('count', { valueAsNumber: true })}
            placeholder="Enter a positive number"
            className="form-control"
            min={0}
          />
          {errors.count && <p className="form-validation-error">{errors.count.message}</p>}
        </div>
      </div>

      {/* Statistics Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Statistics`}
      </button>
    </form>
  )
}

export default StatisticsForm
