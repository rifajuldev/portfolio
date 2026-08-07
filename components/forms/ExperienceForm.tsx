'use client'
import { experienceDefaultValues } from '@/constants'
import { createExperience, updateExperience } from '@/lib/actions/experience.action'
import { useAppContext } from '@/lib/context/appContext'
import { IExperience } from '@/lib/database/models/experience.model'
import { useUploadThing } from '@/lib/uploadthing'
import { experienceFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import DisplayMySkill from '../shared/DisplayMySkill'
import ExperienceDescList from '../shared/ExperienceDescList'
import { FileUploader } from '../shared/FileUploader'
import MySkillDropdown from '../shared/MySkillDropdown'

export interface ExperienceFormProps {
  type: 'Create' | 'Update'
  experience?: IExperience
  experienceId?: string
}

const ExperienceForm = ({ type, experience, experienceId }: ExperienceFormProps) => {
  const { fetchExperiences } = useAppContext()
  const [files, setFiles] = useState<File[]>([])
  const [isTechnologyModalOpen, setTechnologyModalOpen] = useState(false)
  const [isDescModalOpen, setDescModalOpen] = useState(false)
  const router = useRouter()
  const initialValues =
    experience && type === 'Update'
      ? {
          ...experience,
          job_start_date: experience.job_start_date ? new Date(experience.job_start_date) : undefined,
          job_end_date: experience.job_end_date ? new Date(experience.job_end_date) : undefined,
        }
      : experienceDefaultValues

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof experienceFormSchema>>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: initialValues,
  })

  const { startUpload } = useUploadThing('fileUploader')

  const startSelectedDate = watch('job_start_date')
  const endSelectedDate = watch('job_end_date')
  const isPresent = watch('isPresent')

  const handleAddTechnology = async (category: 'experi_technologies', newTech: string): Promise<void> => {
    const currentTechnologies = watch(category)

    // Ensure the category is always an array of strings
    if (!Array.isArray(currentTechnologies)) {
      setValue(category, [newTech], { shouldDirty: true })
    } else {
      setValue(category, [...currentTechnologies, newTech], {
        shouldDirty: true,
      })
    }

    trigger(category)
  }

  const handleAddDescription = (newDesc: { text: string; highlight?: string }) => {
    const currentDescList = watch('job_desc_list') || []
    const updatedDescList = [...currentDescList, newDesc]

    setValue('job_desc_list', updatedDescList, {
      shouldDirty: true,
      shouldValidate: true,
    })
    trigger('job_desc_list') // Ensure validation runs
  }

  const handleRemoveDescription = (index: number) => {
    const currentDescList = watch('job_desc_list') || []
    const updatedDescList = currentDescList.filter((_, i) => i !== index)

    setValue('job_desc_list', updatedDescList, {
      shouldDirty: true,
      shouldValidate: true,
    })
    trigger('job_desc_list') // Ensure validation runs
  }

  // handling form submit
  async function onSubmit(values: z.infer<typeof experienceFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    let uploadedImageUrl = values.company_logo_url

    if (files.length > 0) {
      const uploadedImages = await startUpload(files)
      if (!uploadedImages || uploadedImages.length === 0) {
        toast.error('Image upload failed')
        return
      }
      uploadedImageUrl = uploadedImages[0].url
    }

    try {
      const payload = {
        ...values,
        company_logo_url: uploadedImageUrl,
      }

      if (type === 'Create') {
        await createExperience({
          experience: payload,
        })
        toast.success('Experience created successfully')
      }

      if (type === 'Update' && experienceId) {
        await updateExperience({
          experience: {
            ...payload,
            _id: experienceId,
          },
        })
        toast.success('Experience updated successfully')
      }

      await fetchExperiences()
      reset()
      router.push('/#portfolio')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the experience.')
    }

    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Experience Image Uploader */}
        <div>
          <p className="form-label">Company logo</p>
          <FileUploader
            onFieldChange={(value) => {
              setValue('company_logo_url', value, { shouldDirty: true })
              trigger('company_logo_url')
            }}
            fileUrl={watch('company_logo_url')}
            setFiles={setFiles}
            errors={errors.company_logo_url}
          />
        </div>

        <div className="">
          {/* Company name */}
          <div className="mb-5">
            <p className="form-label">Company name</p>
            <input {...register('company_name')} placeholder="Company name" className="form-control" />
            {errors.company_name && <p className="form-validation-error">{errors.company_name.message}</p>}
          </div>

          {/* Role in company */}
          <div className="mb-4">
            <p className="form-label">Role in company</p>
            <input {...register('role')} placeholder="Role in company" className="form-control" />
            {errors.role && <p className="form-validation-error">{errors.role.message}</p>}
          </div>
        </div>

        {/* Technology used in company */}
        <div>
          <p className="form-label">Technologies: </p>
          <button
            type="button"
            onClick={() => setTechnologyModalOpen(true)}
            className="border-border-1 text-secondary-2 bg-bg-2 w-full cursor-pointer rounded-md border px-6 py-4"
          >
            Add Technology used in company
          </button>
          <MySkillDropdown
            isOpen={isTechnologyModalOpen}
            onClose={() => setTechnologyModalOpen(false)}
            onSubmit={(newTech) => handleAddTechnology('experi_technologies', newTech)}
            title="Add Technology"
            placeholder="Enter technology name"
            addButtonText="Add Technology"
          />
          <DisplayMySkill
            data={watch('experi_technologies') || []}
            setData={(data: string[]) => {
              setValue('experi_technologies', data, { shouldDirty: true })
              trigger('experi_technologies')
            }}
          />

          {errors.experi_technologies && <p className="form-validation-error">{errors.experi_technologies.message}</p>}
        </div>

        {/* Job Date */}
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Job start date */}
          <div>
            <p className="form-label">Job start date</p>
            <DatePicker
              selected={startSelectedDate}
              onChange={(date: Date | null) => {
                if (date) {
                  setValue('job_start_date', date, { shouldDirty: true })
                  trigger(['job_start_date', 'job_end_date'])
                }
              }}
              dateFormat="dd-MM-yyyy"
              maxDate={new Date()}
              className="form-control w-full"
              placeholderText="Select a year"
            />
            {errors.job_start_date && <p className="form-validation-error">{errors.job_start_date.message}</p>}
          </div>

          {/* Job end date */}
          <div>
            <p className="form-label">Job end date</p>
            <div className="flex items-center gap-4">
              <DatePicker
                selected={endSelectedDate}
                onChange={(date: Date | null) => {
                  if (date) {
                    setValue('job_end_date', date, { shouldDirty: true })
                    trigger('job_end_date')
                  }
                }}
                dateFormat="dd-MM-yyyy"
                maxDate={new Date()}
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
                      // If "Present" is checked, clear the end date
                      setValue('job_end_date', undefined, {
                        shouldDirty: true,
                      })
                    } else {
                      // Restore the last selected job_end_date or default to today
                      setValue('job_end_date', endSelectedDate || new Date(), {
                        shouldDirty: true,
                      })
                    }

                    trigger('job_end_date')
                  }}
                />
                <span>Present</span>
              </div>
            </div>
            {errors.job_end_date && !isPresent && (
              <p className="form-validation-error">{errors.job_end_date.message}</p>
            )}
          </div>
        </div>

        {/* Job description lists */}
        <div className="lg:col-span-2">
          <div>
            <p className="form-label">Job Description List (add a key point of your job):</p>
            <button
              type="button"
              onClick={() => setDescModalOpen(true)}
              className="border-border-1 text-secondary-2 bg-bg-2 w-full rounded-md border px-6 py-4"
            >
              Add Job Description
            </button>

            <ExperienceDescList
              isOpen={isDescModalOpen}
              onClose={() => setDescModalOpen(false)}
              onSubmit={handleAddDescription}
            />
            {errors.job_desc_list && <p className="form-validation-error">{errors.job_desc_list.message}</p>}
          </div>

          {/* Display List with Remove Option */}
          <div className="mt-3">
            {watch('job_desc_list').map((desc, index) => (
              <div key={index} className="border-border-1 mt-2 flex items-center justify-between rounded border p-3">
                <div>
                  <p>
                    <strong className="text-neutral-0">Description:</strong> {desc.text}
                  </p>
                  {desc.highlight && (
                    <p className="text-sm text-gray-600">
                      <strong className="text-neutral-0">Highlight:</strong> {desc.highlight}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleRemoveDescription(index)}
                  className="ml-3 rounded border border-red-500 px-2 py-1 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Experience`}
      </button>
    </form>
  )
}

export default ExperienceForm
