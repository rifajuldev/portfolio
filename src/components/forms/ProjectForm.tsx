'use client'
import { projectDefaultValues } from '@/constants'
import { createProject, updateProject } from '@/lib/actions/project.action'
import { useAppContext } from '@/lib/context/appContext'
import { IProject } from '@/lib/database/models/project.model'
import { useUploadThing } from '@/lib/uploadthing'
import { projectFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import Dropdown from '../shared/Dropdown'
import { FileUploader } from '../shared/FileUploader'

export interface ProjectFormProps {
  type: 'Create' | 'Update'
  project?: IProject
  projectId?: string
}

const ProjectForm = ({ type, project, projectId }: ProjectFormProps) => {
  const { fetchProjects } = useAppContext()
  const [files, setFiles] = useState<File[]>([])
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const initialValues = project && type === 'Update' ? project : projectDefaultValues
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues,
  })

  const { startUpload } = useUploadThing('fileUploader')

  useEffect(() => {
    if (type === 'Update' && project) {
      reset({ ...project })
      setSelectedOptions(project.technologies || [])
      setValue('technologies', project.technologies || [], {
        shouldValidate: true,
      })
    }
  }, [type, project, reset, setValue])

  // immediately checking the validation of image
  useEffect(() => {
    const checkProjectImgUrl = async () => {
      if (files.length > 0) {
        const isOk = await trigger('project_img_url')
        if (isOk) watch('project_img_url')
      }
    }
    checkProjectImgUrl()
  }, [files, trigger, watch])

  // form handle submit
  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    let uploadedImageUrl = values.project_img_url

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
        project_img_url: uploadedImageUrl,
        technologies: selectedOptions,
      }

      if (type === 'Create') {
        await createProject({
          project: payload,
        })
        toast.success('Project created successfully')
      }

      if (type === 'Update' && projectId) {
        await updateProject({
          project: {
            ...payload,
            _id: projectId,
          },
        })
        toast.success('Project updated successfully')
      }

      await fetchProjects()
      reset()
      setFiles([])
      setSelectedOptions([])
      router.push('/#projects')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the project.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Project Title */}
        <div>
          <p className="form-label">Project Title</p>
          <input id="title" {...register('title')} placeholder="Project Title" className="form-control" />
          {errors.title && <p className="form-validation-error">{errors.title.message}</p>}
        </div>

        {/* Project Technology */}
        <div>
          <p className="form-label">Project Technologies</p>
          <Dropdown
            register={register}
            setValue={setValue}
            errors={errors.technologies}
            setSelectedOptions={setSelectedOptions}
            selectedOptions={selectedOptions}
          />
        </div>

        {/* Project Description */}
        <div>
          <p className="form-label">Project Description</p>
          <textarea id="desc" {...register('desc')} placeholder="Description" className="form-control h-72" />
          {errors.desc && <p className="form-validation-error">{errors.desc.message}</p>}
        </div>

        {/* Project Image Uploader */}
        <div>
          <p className="form-label">Project Image</p>
          <FileUploader
            onFieldChange={(value) => {
              setValue('project_img_url', value, { shouldDirty: true })
              trigger('project_img_url')
            }}
            fileUrl={watch('project_img_url')}
            setFiles={setFiles}
            errors={errors.project_img_url}
          />
        </div>

        {/* Project Client */}
        <div>
          <p className="form-label">Project Client</p>
          <input id="client" {...register('client')} placeholder="Client" className="form-control" />
          {errors.client && <p className="form-validation-error">{errors.client.message}</p>}
        </div>

        {/* Project Completion Time */}
        <div>
          <p className="form-label">Completion Time</p>
          <input
            id="completion_time"
            {...register('completion_time')}
            placeholder="Completion Time"
            className="form-control"
          />
          {errors.completion_time && <p className="form-validation-error">{errors.completion_time.message}</p>}
        </div>

        {/* Project Live Link */}
        <div>
          <p className="form-label">Live link of Project</p>
          <input id="live_link" {...register('live_link')} placeholder="Live Link" className="form-control" />
          {errors.live_link && <p className="form-validation-error">{errors.live_link.message}</p>}
        </div>

        {/* Project Link of Github */}
        <div>
          <p className="form-label">Live link of Github</p>
          <input id="github_link" {...register('github_link')} placeholder="GitHub Link" className="form-control" />
          {errors.github_link && <p className="form-validation-error">{errors.github_link.message}</p>}
        </div>
      </div>

      {/* Project Submit Button */}
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : `${type} Project`}
      </button>
    </form>
  )
}

export default ProjectForm
