const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null
  }

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose(false)
    }
  }
  return (
    <div id="wrapper" className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm overflow-y-scroll">
      <div className="w-[450px] h-full flex flex-col">
        <button id="wrapper" className="text-white text-xl place-self-end" onClick={handleClose}>
          X
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  )
}

export default Modal
