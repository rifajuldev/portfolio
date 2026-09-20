'use client'
import { blogDefaultValues } from '@/constants'
import { createBlog, updateBlog } from '@/lib/actions/blog.action'
import { useAppContext } from '@/lib/context/appContext'
import { IBlog } from '@/lib/database/models/blog.model'
import { useUploadThing } from '@/lib/uploadthing'
import { blogFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { FileUploader } from '../shared/FileUploader'

export interface BlogFormProps {
  type: 'Create' | 'Update'
  blog?: IBlog
  blogId?: string
}

const BlogForm = ({ type, blog, blogId }: BlogFormProps) => {
  const { fetchBlogs } = useAppContext()
  const [files, setFiles] = useState<File[]>([])
  const initialValues = blog && type === 'Update' ? { ...blog, date: new Date(blog.date) } : blogDefaultValues
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof blogFormSchema>>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: initialValues,
  })

  const selectedDate = watch('date')

  const { startUpload } = useUploadThing('fileUploader')

  // handling form submit
  async function onSubmit(values: z.infer<typeof blogFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    let uploadedImageUrl = values.img_url

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
        img_url: uploadedImageUrl,
        date: values.date,
      }

      if (type === 'Create') {
        await createBlog({
          blog: payload,
        })
        toast.success('Blog created successfully')
      }

      if (type === 'Update' && blogId) {
        await updateBlog({
          blog: {
            ...payload,
            _id: blogId,
          },
        })
        toast.success('Blog updated successfully')
      }

      await fetchBlogs()
      reset()
      setFiles([])
      router.push('/#blog')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the blog.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Blog Title */}
        <div>
          <p className="form-label">Blog Title</p>
          <input {...register('title')} placeholder="Blog Title" className="form-control" />
          {errors.title && <p className="form-validation-error">{errors.title.message}</p>}
        </div>

        {/* Blog Link */}
        <div>
          <p className="form-label">Blog Link</p>
          <input {...register('link')} placeholder="Blog Link" className="form-control" />
          {errors.link && <p className="form-validation-error">{errors.link.message}</p>}
        </div>

        {/* Blog Description */}
        <div>
          <p className="form-label">Blog Description</p>
          <textarea {...register('desc')} placeholder="Description" className="form-control h-72" />
          {errors.desc && <p className="form-validation-error">{errors.desc.message}</p>}
        </div>

        {/* Blog Image Uploader */}
        <div>
          <p className="form-label">Blog Image</p>
          <FileUploader
            onFieldChange={(value) => {
              setValue('img_url', value, { shouldDirty: true })
              trigger('img_url')
            }}
            fileUrl={watch('img_url')}
            setFiles={setFiles}
            errors={errors.img_url}
          />
        </div>

        {/* Blog Tag */}
        <div>
          <p className="form-label">Blog Tag</p>
          <input {...register('tag')} placeholder="Blog Tag" className="form-control" />
          {errors.tag && <p className="form-validation-error">{errors.tag.message}</p>}
        </div>

        {/* Blog Read Time */}
        <div>
          <p className="form-label">Blog Read Time</p>
          <input {...register('read_time')} placeholder="Blog Read Time" className="form-control" />
          {errors.read_time && <p className="form-validation-error">{errors.read_time.message}</p>}
        </div>

        {/* Blog Date Picker */}
        <div>
          <p className="form-label">Blog Date</p>
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

      {/* Blog Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Blog`}
      </button>
    </form>
  )
}

export default BlogForm
