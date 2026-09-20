'use client'
import { cooperationDefaultValues } from '@/constants'
import { createCooperation } from '@/lib/actions/cooperation.action'
import { useAppContext } from '@/lib/context/appContext'
import { useUploadThing } from '@/lib/uploadthing'
import { cooperationFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { FileUploader } from '../shared/FileUploader'

const CooperationForm = () => {
  const { fetchCooperations } = useAppContext()
  const [files, setFiles] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof cooperationFormSchema>>({
    resolver: zodResolver(cooperationFormSchema),
    defaultValues: cooperationDefaultValues,
  })

  const { startUpload } = useUploadThing('fileUploader')

  // handling form submit
  async function onSubmit(values: z.infer<typeof cooperationFormSchema>) {
    let uploadedImageUrl = values.logo_url

    if (files.length > 0) {
      const uploadedImages = await startUpload(files)
      if (!uploadedImages || uploadedImages.length === 0) {
        toast.error('Image upload failed')
        return
      }
      uploadedImageUrl = uploadedImages[0].url
    }

    try {
      await createCooperation({
        cooperation: {
          ...values,
          logo_url: uploadedImageUrl,
        },
      })

      await fetchCooperations()
      reset()
      toast.success('New trusted company crated successfully')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the company.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Cooperation Image Uploader */}
        <div>
          <p className="form-label">Company logo</p>
          <FileUploader
            onFieldChange={(value) => {
              setValue('logo_url', value, { shouldDirty: true })
              trigger('logo_url')
            }}
            fileUrl={watch('logo_url')}
            setFiles={setFiles}
            errors={errors.logo_url}
          />
        </div>

        <div>
          {/* Company name */}
          <div className="mb-4">
            <p className="form-label">Company name</p>
            <input {...register('company_name')} placeholder="Trusted Company name" className="form-control" />
            {errors.company_name && <p className="form-validation-error">{errors.company_name.message}</p>}
          </div>

          {/* Show in Position */}
          <div>
            <p className="form-label">Position of Company</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Top"
                  {...register('company_position', { required: true })}
                  className="form-radio"
                />
                <span>Top</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Bottom"
                  {...register('company_position', { required: true })}
                  className="form-radio"
                />
                <span>Bottom</span>
              </label>
            </div>
            {errors.company_position && <p className="form-validation-error">{errors.company_position.message}</p>}
          </div>
        </div>
      </div>

      {/* Cooperation Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : 'Create trusted company'}
      </button>
    </form>
  )
}

export default CooperationForm
