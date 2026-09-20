'use client'

import { useDropzone } from '@uploadthing/react'
import { useCallback } from 'react'

import { ImageUploaderProps } from '@/types'
import Image from 'next/image'
import { FieldError } from 'react-hook-form'
import toast from 'react-hot-toast'
import { MdCloudUpload } from 'react-icons/md'
import { generateClientDropzoneAccept } from 'uploadthing/client'

export function FileUploader({
  fileUrl,
  onFieldChange,
  setFiles,
  errors,
  acceptTypes = ['image/*'],
  maxFileSize = 4 * 1024 * 1024,
}: ImageUploaderProps & { acceptTypes?: string[]; maxFileSize?: number }) {
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]

      if (file.size > maxFileSize) {
        toast.error(`File exceeds ${maxFileSize / (1024 * 1024)} MB`)
        return
      }

      setFiles(acceptedFiles) // Update local file state
      const fileUrl = URL.createObjectURL(file)
      await onFieldChange(fileUrl) // Update the form field and mark it as dirty
    },
    [onFieldChange, setFiles, maxFileSize]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(acceptTypes),
    multiple: false,
  })

  const isBlobUrl = fileUrl?.startsWith('blob:')

  return (
    <div>
      <div
        {...getRootProps()}
        className="flex-center bg-bg-3 border-border-1 h-72 cursor-pointer flex-col overflow-hidden rounded-xl border"
      >
        <input {...getInputProps()} className="cursor-pointer" />

        {fileUrl ? (
          <div className="flex h-full w-full flex-1 items-center justify-center">
            {acceptTypes.includes('image/*') && (isBlobUrl || fileUrl.startsWith('http')) ? (
              <Image
                src={fileUrl}
                alt="Uploaded image"
                width={250}
                height={250}
                className="w-full object-cover object-center"
              />
            ) : acceptTypes.includes('application/pdf') && isBlobUrl ? (
              <iframe src={fileUrl} className="h-full w-full border-0" title="PDF Preview" />
            ) : (
              <p className="text-neutral-0 text-center">PDF file cannot be previewed</p>
            )}
          </div>
        ) : (
          <div className="flex-center flex-col py-5">
            <MdCloudUpload className="text-neutral-0" size={50} />
            <h4 className="mt-2 mb-2">Drag file here</h4>
            <p className="mb-4 text-[14px] leading-5 font-medium">
              {acceptTypes.join(', ')} (max {maxFileSize / (1024 * 1024)}MB)
            </p>
            <button type="button" className="bg-primary-1 text-neutral-0 rounded-full px-3 py-2">
              Select from computer
            </button>
          </div>
        )}
      </div>

      {errors && 'message' in errors && <p className="form-validation-error">{(errors as FieldError).message}</p>}
    </div>
  )
}
