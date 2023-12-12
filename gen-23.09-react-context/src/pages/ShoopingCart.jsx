import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import TableCart from "../component/TableCart"

const ShoopingCart = () => {
  const { dataCart } = useContext(CartContext)
  console.log(dataCart)
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="font-bold">Shopping Cart</h1>
      <TableCart data={dataCart} />
    </div>
  )
}

export default ShoopingCart
