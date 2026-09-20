'use client'
import { CreateFormTechnologyParams, DropdownProps } from '@/types'
import { useEffect, useState, useTransition } from 'react'
import { FieldError } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaAngleDown } from 'react-icons/fa6'
import { RiCloseFill } from 'react-icons/ri'
import Modal from '../ui/Modal'

import { createFormTechnology, getAllFormTechnologies } from '@/lib/actions/formTechnology.action'
import { IFormTechnology } from '@/lib/database/models/formTechnology.model'

const Dropdown = ({ register, setValue, errors, setSelectedOptions, selectedOptions }: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [newTechnology, setNewTechnology] = useState('')
  const [technologies, setTechnologies] = useState<IFormTechnology[]>([])
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const formTechnologies: IFormTechnology[] = await getAllFormTechnologies()
        setTechnologies(formTechnologies)
      } catch (error) {
        console.error('Failed to fetch technologies:', error)
      }
    }

    fetchTechnologies()
  }, [setTechnologies])

  const handleCloseModal = () => {
    setNewTechnology('')
    setModalOpen(false)
  }

  // Handling the selection of technology
  const handleOptionSelect = (option: string) => {
    if (!selectedOptions.includes(option)) {
      const updatedOptions = [...selectedOptions, option]
      setSelectedOptions(updatedOptions)
      setValue('technologies', updatedOptions, { shouldValidate: true, shouldDirty: true })
    }
    setDropdownOpen(false)
  }

  const handleRemoveOption = (option: string) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option)
    setSelectedOptions(updatedOptions)
    setValue('technologies', updatedOptions, { shouldValidate: true, shouldDirty: true })
  }

  const handleAddNewTechnology = async () => {
    if (!newTechnology.trim()) {
      toast.error('Technology name cannot be empty.')
      return
    }

    if (technologies.some((tech) => tech.name === newTechnology)) {
      toast.error('Technology already exists.')
      return
    }

    try {
      const newTechObject: CreateFormTechnologyParams = {
        formTechnology: { name: newTechnology },
      }

      const createdTechnology: IFormTechnology = await createFormTechnology(newTechObject)

      setTechnologies((prev) => [...prev, createdTechnology])
      setNewTechnology('')
      setModalOpen(false)
      toast.success('New technology added successfully.')
    } catch (error) {
      console.error('Failed to add new technology:', error)
      toast.error('An error occurred while adding the technology.')
    }
  }

  return (
    <div className="relative">
      <input type="hidden" {...register('technologies')} />
      {/* Dropdown trigger button */}
      <button
        type="button"
        className={`bg-bg-3 flex-between h-[58px] w-full rounded-lg border px-4 ${
          dropdownOpen ? 'border-neutral-800' : 'border-border-1'
        }`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Technologies
        <FaAngleDown />
      </button>

      {/* The dropdown */}
      {dropdownOpen && (
        <div>
          <ul className="bg-neutral-1000 dark:bg-bg-3 border-border-1 absolute z-20 mt-2 w-full rounded-lg border bg-[#333a32] shadow-lg">
            {technologies.map((technology: IFormTechnology) => (
              <li
                key={technology._id}
                className="hover:text-primary-2 hover:bg-border-1 cursor-pointer rounded-md px-4 py-2"
                onClick={() => handleOptionSelect(technology.name)}
              >
                {technology.name}
              </li>
            ))}
            <li
              onClick={() => setModalOpen(true)}
              className="hover:bg-border-1 text-secondary-2 cursor-pointer rounded-md px-4 py-2"
            >
              Add new technology
            </li>
          </ul>
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h5>New Technology</h5>

        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Technology Name"
            value={newTechnology}
            onChange={(e) => setNewTechnology(e.target.value)}
          />
          <div className="mt-6 flex justify-end gap-6 text-base">
            <button type="button" className="text-neutral-0" onClick={handleCloseModal}>
              Cancel
            </button>
            <button
              type="button"
              className="bg-primary-2 text-neutral-1000 rounded-lg px-4 py-2 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => startTransition(handleAddNewTechnology)}
              disabled={isPending}
            >
              {isPending ? 'Adding' : 'Add'}
            </button>
          </div>
        </div>
      </Modal>

      {errors && 'message' in errors && <p className="form-validation-error">{(errors as FieldError).message}</p>}

      {/* Selected technologies */}
      {selectedOptions.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {selectedOptions.map((option) => (
            <div
              key={option}
              className="flex-center bg-bg-3 border-border-1 text-neutral-0 gap-2 rounded-full border px-3 py-1 shadow-sm"
            >
              <span>{option}</span>
              <button
                type="button"
                className="text-gray-500 hover:text-red-500"
                onClick={() => handleRemoveOption(option)}
              >
                <RiCloseFill />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
