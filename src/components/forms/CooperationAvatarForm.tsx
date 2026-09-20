'use client'
import { updateCooperationAvatar } from '@/lib/actions/cooperationAvatar.action'
import { useAppContext } from '@/lib/context/appContext'
import { useUploadThing } from '@/lib/uploadthing'
import { cooperationAvatarFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { FileUploader } from '../shared/FileUploader'

const CooperationAvatarForm = () => {
  const { cooperationAvatar, fetchCooperationAvatar } = useAppContext()
  const [files, setFiles] = useState<File[]>([])
  const initialValues = cooperationAvatar ? cooperationAvatar : { avatar_url: '' }

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof cooperationAvatarFormSchema>>({
    resolver: zodResolver(cooperationAvatarFormSchema),
    defaultValues: initialValues,
  })

  useEffect(() => {
    if (cooperationAvatar) {
      reset(cooperationAvatar)
    }
  }, [cooperationAvatar, reset])

  const { startUpload } = useUploadThing('fileUploader')

  // handling form submit
  async function onSubmit(values: z.infer<typeof cooperationAvatarFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected')
      return
    }

    let uploadedImageUrl = values.avatar_url

    if (files.length > 0) {
      const uploadedImages = await startUpload(files)
      if (!uploadedImages || uploadedImages.length === 0) {
        toast.error('Image upload failed')
        return
      }
      uploadedImageUrl = uploadedImages[0].url
    }

    try {
      await updateCooperationAvatar({
        avatar_url: uploadedImageUrl,
      })

      await fetchCooperationAvatar()
      reset()
      toast.success('Avatar updated successfully')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the avatar.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Cooperation Image Uploader */}
      <div>
        <p className="form-label">Company logo</p>
        <FileUploader
          onFieldChange={(value) => {
            setValue('avatar_url', value, { shouldDirty: true })
            trigger('avatar_url')
          }}
          fileUrl={watch('avatar_url')}
          setFiles={setFiles}
          errors={errors.avatar_url}
        />
      </div>

      {/* Cooperation Avatar Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : 'Update cooperation avatar'}
      </button>
    </form>
  )
}

export default CooperationAvatarForm
