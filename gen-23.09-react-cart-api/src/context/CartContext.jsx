import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [dataCart, setDataCart] = useState([])
  return (
    <CartContext.Provider value={{ dataCart, setDataCart }}>
      {children}
    </CartContext.Provider>
  )
}
