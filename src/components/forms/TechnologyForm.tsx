'use client'
import { technologyDefaultValues } from '@/constants'
import { createTechnology, updateTechnology } from '@/lib/actions/technology.action'
import { useAppContext } from '@/lib/context/appContext'
import { ITechnology } from '@/lib/database/models/technology.model'
import { useUploadThing } from '@/lib/uploadthing'
import { technologyFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { FileUploader } from '../shared/FileUploader'

export interface TechnologyFormProps {
  type: 'Create' | 'Update'
  technology?: ITechnology
  technologyId?: string
}

const TechnologyForm = ({ type, technology, technologyId }: TechnologyFormProps) => {
  const { fetchTechnology } = useAppContext()
  const [files, setFiles] = useState<File[]>([])
  const initialValues = technology && type === 'Update' ? { ...technology } : technologyDefaultValues
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof technologyFormSchema>>({
    resolver: zodResolver(technologyFormSchema),
    defaultValues: initialValues,
  })

  // hero data dynamically set in form
  useEffect(() => {
    if (technology) {
      reset(technology)
    }
  }, [technology, reset])

  const { startUpload } = useUploadThing('fileUploader')

  async function onSubmit(values: z.infer<typeof technologyFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    let uploadedImageUrl = values.tech_img_url

    // Handle file uploads if files are selected
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
        tech_img_url: uploadedImageUrl,
        skill_position: values.skill_position,
        show_in_hero: values.show_in_hero || false,
      }

      if (type === 'Create') {
        await createTechnology({ technology: payload })
        toast.success('Technology created successfully')
      }

      if (type === 'Update' && technologyId) {
        await updateTechnology({
          technology: { ...payload, _id: technologyId },
        })
        toast.success('Technology updated successfully')
      }

      await fetchTechnology()
      reset()
      setFiles([])
      router.push('/adminProfile/technologies')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the technology.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Technology Name */}
        <div>
          <p className="form-label">Technology Name</p>
          <input {...register('tech_name')} placeholder="Technology Name" className="form-control" />
          {errors.tech_name && <p className="form-validation-error">{errors.tech_name.message}</p>}
        </div>

        {/* Technology Official Url */}
        <div>
          <p className="form-label">Technology Official Url</p>
          <input {...register('tech_official_url')} placeholder="Technology Official Url" className="form-control" />
          {errors.tech_official_url && <p className="form-validation-error">{errors.tech_official_url.message}</p>}
        </div>

        {/* Technology Image Uploader */}
        <div>
          <p className="form-label">Technology Image</p>
          <FileUploader
            onFieldChange={(value) => {
              setValue('tech_img_url', value, { shouldDirty: true })
              trigger('tech_img_url')
            }}
            fileUrl={watch('tech_img_url')}
            setFiles={setFiles}
            errors={errors.tech_img_url}
          />
        </div>

        <div>
          {/* Technology in Skill Position */}
          <div className="mb-4">
            <p className="form-label">Technology in Skill Position</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Top"
                  {...register('skill_position', { required: true })}
                  className="form-radio"
                />
                <span>Top</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Bottom"
                  {...register('skill_position', { required: true })}
                  className="form-radio"
                />
                <span>Bottom</span>
              </label>
            </div>
            {errors.skill_position && <p className="form-validation-error">{errors.skill_position.message}</p>}
          </div>

          {/* Technology Show in Hero */}
          <div>
            <label className="flex items-center gap-4">
              <input type="checkbox" {...register('show_in_hero')} className="form-checkbox" />
              <span className="text-base">Show in Hero</span>
            </label>
            {errors.show_in_hero && <p className="form-validation-error">{errors.show_in_hero.message}</p>}
          </div>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Technology`}
      </button>
    </form>
  )
}

export default TechnologyForm
