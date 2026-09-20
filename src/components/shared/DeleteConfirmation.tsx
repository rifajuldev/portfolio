import { useState, useTransition } from 'react'
import { MdDelete } from 'react-icons/md'
import Modal from '../ui/Modal'

interface DeleteConfirmationProps {
  onConfirm: () => void
  title: string
}

const DeleteConfirmation = ({ onConfirm, title = 'Are you sure want to delete?' }: DeleteConfirmationProps) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  const handleConfirm = async () => {
    startTransition(() => {
      onConfirm()
      handleCloseModal()
    })
  }

  return (
    <>
      <button className="text-neutral-0 hover:text-red-700" onClick={handleOpenModal}>
        <MdDelete size={24} />
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h4>{title}</h4>

        <div className="mt-6 flex justify-end gap-6 text-base">
          <button onClick={handleCloseModal} className="text-neutral-0">
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:pointer-events-none disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? 'Deleting' : 'Delete'}
          </button>
        </div>
      </Modal>
    </>
  )
}

export default DeleteConfirmation
