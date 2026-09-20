import { RiCloseLargeFill } from 'react-icons/ri'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className={`bg-bg-5 relative w-full max-w-2xl transform rounded-lg p-10 shadow-xl transition-all ${
          isOpen ? 'animate-fadeIn visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          className="text-neutral-0 absolute top-4 right-4 transition"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <RiCloseLargeFill size={24} />
        </button>

        {/* Modal Content */}
        <div className="mt-2 text-gray-800">{children}</div>
      </div>
    </div>
  )
}

export default Modal
