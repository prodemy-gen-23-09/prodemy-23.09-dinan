const ButtonSize = ({ children, text }) => (
  <button text={text} className="border-2 p-1 font-semibold w-8 hover:border-solid hover:border-2 hover:border-gray-500">
    {children || text}
  </button>
)

export default ButtonSize
