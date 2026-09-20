'use client'
import { useState } from 'react'
import Modal from '../ui/Modal'

interface ExperienceDescListProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (desc: { text: string; highlight?: string }) => void
}

const ExperienceDescList = ({ isOpen, onClose, onSubmit }: ExperienceDescListProps) => {
  const [desc, setDesc] = useState('')
  const [highlight, setHighlight] = useState('')
  const [error, setError] = useState('')

  const handleSave = () => {
    if (!desc.trim()) {
      setError('Description is required')
      return
    }
    setError('')

    onSubmit({ text: desc, highlight: highlight || undefined })
    setDesc('')
    setHighlight('')
    onClose()
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value)
    if (error) setError('')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h5>Add Description</h5>

      <textarea
        className="form-control w-full rounded border p-2"
        placeholder="Enter description"
        value={desc}
        onChange={handleTextChange}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}

      <input
        className="form-control mt-2 w-full rounded border p-2"
        placeholder="Highlight (optional)"
        value={highlight}
        onChange={(e) => setHighlight(e.target.value)}
      />

      <button
        type="button"
        onClick={handleSave}
        className="bg-primary-2 text-neutral-1000 mt-4 w-full rounded-lg px-4 py-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Add
      </button>
    </Modal>
  )
}

export default ExperienceDescList
