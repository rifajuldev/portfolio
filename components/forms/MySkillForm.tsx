'use client'
import { mySkillDefaultValues } from '@/constants'
import { updateSkills } from '@/lib/actions/mySkill.action'
import { useAppContext } from '@/lib/context/appContext'
import { mySkillFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import DisplayMySkill from '../shared/DisplayMySkill'
import MySkillDropdown from '../shared/MySkillDropdown'

const MySkillForm: React.FC = () => {
  const { skills, fetchSkills } = useAppContext()
  const router = useRouter()
  const initialValues = skills ? skills : mySkillDefaultValues

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<z.infer<typeof mySkillFormSchema>>({
    resolver: zodResolver(mySkillFormSchema),
    defaultValues: initialValues,
  })

  // skills data dynamically set in form because it's not showing the data from db after refreshing the page
  useEffect(() => {
    if (skills) {
      reset(skills)
    }
  }, [skills, reset])

  const [isFrontEndModalOpen, setFrontEndModalOpen] = useState(false)
  const [isBackEndModalOpen, setBackEndModalOpen] = useState(false)
  const [isDatabaseModalOpen, setDatabaseModalOpen] = useState(false)
  const [isToolsModalOpen, setToolsModalOpen] = useState(false)
  const [isOthersModalOpen, setOthersModalOpen] = useState(false)

  const handleAddTechnology = async (
    category: keyof z.infer<typeof mySkillFormSchema>,
    newTech: string
  ): Promise<void> => {
    const currentTechnologies = watch(category)
    const updatedTechnologies = [...currentTechnologies, newTech]
    setValue(category, updatedTechnologies, { shouldDirty: true })
    trigger(category)
  }

  async function onSubmit(values: z.infer<typeof mySkillFormSchema>) {
    try {
      if (!isDirty) {
        toast.error('No changes detected.')
        return
      }

      await updateSkills(values)

      await fetchSkills()
      reset()
      router.push('/#skills')
      toast.success('Skills updated successfully!')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while saving the skills.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Frontend Technology */}
        <div>
          <p className="form-label">Front-End: </p>
          <button
            type="button"
            onClick={() => setFrontEndModalOpen(true)}
            className="border-border-1 text-secondary-2 bg-bg-2 w-full cursor-pointer rounded-md border px-6 py-4"
          >
            Add Front-End Technology
          </button>
          <MySkillDropdown
            isOpen={isFrontEndModalOpen}
            onClose={() => setFrontEndModalOpen(false)}
            onSubmit={(newTech) => handleAddTechnology('front_end_technologies', newTech)}
            title="Add Front-End Technology"
            placeholder="Enter technology name"
            addButtonText="Add Technology"
          />
          <DisplayMySkill
            data={watch('front_end_technologies') || []}
            setData={(data: string[]) => {
              setValue('front_end_technologies', data, { shouldDirty: true })
              trigger('front_end_technologies')
            }}
          />

          {errors.front_end_technologies && (
            <p className="form-validation-error">{errors.front_end_technologies.message}</p>
          )}
        </div>

        {/* Backend Technology */}
        <div>
          <p className="form-label">Back-End: </p>
          <button
            type="button"
            onClick={() => setBackEndModalOpen(true)}
            className="border-border-1 text-secondary-2 bg-bg-2 w-full cursor-pointer rounded-md border px-6 py-4"
          >
            Add Back-End Technology
          </button>
          <MySkillDropdown
            isOpen={isBackEndModalOpen}
            onClose={() => setBackEndModalOpen(false)}
            onSubmit={(newTech) => handleAddTechnology('back_end_technologies', newTech)}
            title="Add Back-End Technology"
            placeholder="Enter technology name"
            addButtonText="Add Technology"
          />
          <DisplayMySkill
            data={watch('back_end_technologies') || []}
            setData={(data: string[]) => {
              setValue('back_end_technologies', data, { shouldDirty: true })
              trigger('back_end_technologies')
            }}
          />

          {errors.back_end_technologies && (
            <p className="form-validation-error">{errors.back_end_technologies.message}</p>
          )}
        </div>

        {/* Database Technology */}
        <div>
          <p className="form-label">Database: </p>
          <button
            type="button"
            onClick={() => setDatabaseModalOpen(true)}
            className="border-border-1 text-secondary-2 bg-bg-2 w-full cursor-pointer rounded-md border px-6 py-4"
          >
            Add Database Technology
          </button>
          <MySkillDropdown
            isOpen={isDatabaseModalOpen}
            onClose={() => setDatabaseModalOpen(false)}
            onSubmit={(newTech) => handleAddTechnology('database_technologies', newTech)}
            title="Add Database Technology"
            placeholder="Enter technology name"
            addButtonText="Add Technology"
          />
          <DisplayMySkill
            data={watch('database_technologies') || []}
            setData={(data: string[]) => {
              setValue('database_technologies', data, { shouldDirty: true })
              trigger('database_technologies')
            }}
          />

          {errors.database_technologies && (
            <p className="form-validation-error">{errors.database_technologies.message}</p>
          )}
        </div>

        {/* Tools & Platforms Technology */}
        <div>
          <p className="form-label">Tools & Platforms: </p>
          <button
            type="button"
            onClick={() => setToolsModalOpen(true)}
            className="border-border-1 text-secondary-2 bg-bg-2 w-full cursor-pointer rounded-md border px-6 py-4"
          >
            Add Tools & Platforms Technology
          </button>
          <MySkillDropdown
            isOpen={isToolsModalOpen}
            onClose={() => setToolsModalOpen(false)}
            onSubmit={(newTech) => handleAddTechnology('tools_platform_technologies', newTech)}
            title="Add Tools & Platforms Technology"
            placeholder="Enter technology name"
            addButtonText="Add Technology"
          />
          <DisplayMySkill
            data={watch('tools_platform_technologies') || []}
            setData={(data: string[]) => {
              setValue('tools_platform_technologies', data, {
                shouldDirty: true,
              })
              trigger('tools_platform_technologies')
            }}
          />

          {errors.tools_platform_technologies && (
            <p className="form-validation-error">{errors.tools_platform_technologies.message}</p>
          )}
        </div>

        {/* Others Technology */}
        <div>
          <p className="form-label">Others: </p>
          <button
            type="button"
            onClick={() => setOthersModalOpen(true)}
            className="border-border-1 text-secondary-2 bg-bg-2 w-full cursor-pointer rounded-md border px-6 py-4"
          >
            Add Others Technology
          </button>
          <MySkillDropdown
            isOpen={isOthersModalOpen}
            onClose={() => setOthersModalOpen(false)}
            onSubmit={(newTech) => handleAddTechnology('others_technologies', newTech)}
            title="Add Others Technology"
            placeholder="Enter technology name"
            addButtonText="Add Technology"
          />
          <DisplayMySkill
            data={watch('others_technologies') || []}
            setData={(data: string[]) => {
              setValue('others_technologies', data, { shouldDirty: true })
              trigger('others_technologies')
            }}
          />

          {errors.others_technologies && <p className="form-validation-error">{errors.others_technologies.message}</p>}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : 'Update My Skills'}
      </button>
    </form>
  )
}

export default MySkillForm
