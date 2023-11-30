import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const Button = ({ children }) => (
  <button className="flex items-center gap-1 px-2 py-1 rounded-lg font-medium bg-orange-400 hover:bg-orange-800">
    <ShoppingBagIcon className="h-6 w-6" />
    {children}
  </button>
)

export default Button
