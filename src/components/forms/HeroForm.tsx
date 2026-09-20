'use client'
import { heroDefaultValues } from '@/constants'
import { updateHero } from '@/lib/actions/hero.action'
import { useAppContext } from '@/lib/context/appContext'
import { useUploadThing } from '@/lib/uploadthing'
import { heroFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { FileUploader } from '../shared/FileUploader'

const HeroForm = () => {
  const [imgFiles, setImgFiles] = useState<File[]>([])
  const [pdfFiles, setPdfFiles] = useState<File[]>([])
  const router = useRouter()
  const { hero, fetchHero } = useAppContext()
  const initialValues = hero ? hero : heroDefaultValues

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<z.infer<typeof heroFormSchema>>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: initialValues,
  })

  // hero data dynamically set in form because it's not showing the data from db after refreshing the page
  useEffect(() => {
    if (hero) {
      reset(hero)
    }
  }, [hero, reset])

  const { startUpload } = useUploadThing('fileUploader')

  // immediately checking the validation of image
  useEffect(() => {
    const checkHeroImgUrl = async () => {
      if (imgFiles.length > 0) {
        const isOk = await trigger('hero_img_url')
        if (isOk) watch('hero_img_url')
      }
    }
    checkHeroImgUrl()
  }, [imgFiles, trigger, watch])

  // immediately checking the validation of pdf
  useEffect(() => {
    const checkHeroPdfUrl = async () => {
      if (pdfFiles.length > 0) {
        const isOk = await trigger('hero_pdf_url')
        if (isOk) watch('hero_pdf_url')
      }
    }
    checkHeroPdfUrl()
  }, [pdfFiles, trigger, watch])

  // handling hero form
  async function onSubmit(values: z.infer<typeof heroFormSchema>) {
    if (!isDirty) {
      toast.error('No changes detected.')
      return
    }

    let uploadedImageUrl = values.hero_img_url
    let uploadedPdfUrl = values.hero_pdf_url

    if (imgFiles.length > 0) {
      const uploadImages = await startUpload(imgFiles)
      if (!uploadImages || uploadImages.length === 0) {
        toast.error('Image upload failed')
        return
      }
      uploadedImageUrl = uploadImages[0].url
    }

    if (pdfFiles.length > 0) {
      const uploadPdf = await startUpload(pdfFiles)
      if (!uploadPdf || uploadPdf.length === 0) {
        toast.error('Pdf upload failed')
        return
      }
      uploadedPdfUrl = uploadPdf[0].url
    }

    try {
      const heroData = {
        ...values,
        hero_img_url: uploadedImageUrl,
        hero_pdf_url: uploadedPdfUrl,
      }

      await updateHero(heroData)

      await fetchHero()
      reset()
      setImgFiles([])
      setPdfFiles([])
      router.push('/#hero')
      toast.success('Hero updated successfully')
    } catch (error) {
      toast.error('Error while updating Hero')
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Headline */}
        <div>
          <p className="form-label">Hero headline</p>
          <input {...register('headline')} id="headline" placeholder="Headline" className="form-control" />
          {errors.headline && <p className="form-validation-error">{errors.headline.message}</p>}
        </div>

        {/* Title */}
        <div>
          <p className="form-label">First part of Title</p>
          <input {...register('first_title')} id="first_title" placeholder="First Title" className="form-control" />
          {errors.first_title && <p className="form-validation-error">{errors.first_title.message}</p>}
        </div>

        <div>
          <p className="form-label">Second part of Title</p>
          <input {...register('middle_title')} id="middle_title" placeholder="Middle Title" className="form-control" />
          {errors.middle_title && <p className="form-validation-error">{errors.middle_title.message}</p>}
        </div>

        <div>
          <p className="form-label">Third part of Title</p>
          <input {...register('last_title')} id="last_title" placeholder="Last Title" className="form-control" />
          {errors.last_title && <p className="form-validation-error">{errors.last_title.message}</p>}
        </div>

        {/* Hero Image uploader */}
        <div>
          <p className="form-label">Hero Image</p>
          <FileUploader
            onFieldChange={(value) => {
              setValue('hero_img_url', value, { shouldDirty: true })
              trigger('hero_img_url')
            }}
            fileUrl={watch('hero_img_url')}
            setFiles={setImgFiles}
            errors={errors.hero_img_url}
          />
        </div>

        {/* Hero PDF uploader */}
        <div>
          <p className="form-label">Hero Resume PDF</p>
          <FileUploader
            onFieldChange={(value) => {
              setValue('hero_pdf_url', value, { shouldDirty: true })
              trigger('hero_pdf_url')
            }}
            fileUrl={watch('hero_pdf_url')}
            setFiles={setPdfFiles}
            errors={errors.hero_pdf_url}
            acceptTypes={['application/pdf']}
            maxFileSize={10 * 1024 * 1024}
          />
        </div>

        {/* Description */}
        <div>
          <p className="form-label">Description</p>
          <textarea {...register('desc')} id="desc" placeholder="Description" className="form-control h-72" />
          {errors.desc && <p className="form-validation-error">{errors.desc.message}</p>}
        </div>

        <div>
          <p className="form-label">Highlighted Text in Description (optional)</p>
          <input
            {...register('desc_highlighted_text')}
            id="desc_highlighted_text"
            placeholder="Description highlighted Text"
            className="form-control"
          />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : 'Update Hero'}
      </button>
    </form>
  )
}

export default HeroForm
