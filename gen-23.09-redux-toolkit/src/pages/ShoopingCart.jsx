import { useEffect } from "react"
import TableCart from "../component/TableCart"
import { useSelector } from "react-redux"

const ShoopingCart = () => {
  // const { dataCart } = useContext(CartContext)
  const { dataCart } = useSelector((state) => state.cart)
  console.log(dataCart)

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="font-bold">Shopping Cart</h1>
      <TableCart data={dataCart} />
    </div>
  )
}

export default ShoopingCart
