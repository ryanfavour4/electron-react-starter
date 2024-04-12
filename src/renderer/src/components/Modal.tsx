type props = {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  isModalClosed: boolean
  closeModal: () => void
}

const Modal = ({ children, isModalClosed, closeModal }: props) => {
  return (
    <div
      onClick={closeModal}
      className={`fixed top-0 z-50 h-screen w-full bg-black/50 py-28 transition-all delay-75 ${
        isModalClosed && 'invisible opacity-0'
      }`}
    >
      <div onClick={(e) => e.stopPropagation()} className="mx-auto w-[96%] max-w-[1000px]">
        {children}
      </div>
    </div>
  )
}

export default Modal
