import { useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import Modal from '../ui/Modal'

interface MySkillDropdownProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (newItem: string) => Promise<void>
  title?: string
  placeholder?: string
  addButtonText?: string
}

const MySkillDropdown: React.FC<MySkillDropdownProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = 'New Item',
  placeholder = 'Enter item name',
  addButtonText = 'Add',
}) => {
  const [newItem, setNewItem] = useState<string>('')
  const [isPending, startTransition] = useTransition()

  const handleAddNewItem = async () => {
    if (!newItem.trim()) {
      toast.error('Item name cannot be empty.')
      return
    }

    try {
      await onSubmit(newItem)
      setNewItem('')
      onClose()
    } catch (error) {
      console.error('Failed to add new item:', error)
      toast.error('An error occurred while adding the item.')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h5>{title}</h5>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder={placeholder}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <div className="mt-6 flex justify-end gap-6 text-base">
          <button type="button" className="text-neutral-0" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="bg-primary-2 text-neutral-1000 rounded-lg px-4 py-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={() => startTransition(handleAddNewItem)}
            disabled={isPending}
          >
            {isPending ? 'Adding...' : addButtonText}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default MySkillDropdown
