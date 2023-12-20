import TableCart from "../component/TableCart"
import { useSelector } from "react-redux"
import axios from "axios"
import useSWR from "swr"
import { DotLoader } from "react-spinners"
import CardCheckout from "../component/CardCheckout"

const ShoopingCart = () => {
  // const { dataCart } = useContext(CartContext)
  const user = useSelector((state) => state.auth.user)

  const getCart = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error } = useSWR(`http://localhost:3000/cart?userId=${user.id}`, getCart)

  if (error) {
    console.log(error)
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="font-bold">Shopping Cart</h1>
      {isLoading ? (
        <div className="flex justify-center">
          <DotLoader color="orange" />
        </div>
      ) : (
        <>
          <TableCart data={data} userId={user.id} />
          <CardCheckout />
        </>
      )}
    </div>
  )
}

export default ShoopingCart
