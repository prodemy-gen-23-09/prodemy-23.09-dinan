import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const Button = ({ children }) => (
  <button className="flex items-center gap-1 p-1 rounded-lg text-xs font-semibold bg-orange-400 hover:bg-orange-800">
    <ShoppingBagIcon className="h-4 w-4" />
    {children}
  </button>
)

export default Button
