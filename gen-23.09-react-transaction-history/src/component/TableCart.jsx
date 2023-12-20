import Button from "./ui/Button"
import QuantityInTableCart from "./ui/QuantityInTableCart"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addToCheckout, deleteFromCheckout } from "../store/reducers/checkoutSlice"
import { useSWRConfig } from "swr"

const TableCart = ({ data, userId }) => {
  const { mutate } = useSWRConfig()
  const dispatch = useDispatch()
  const { dataCheckout } = useSelector((state) => state.checkout)

  const deleteFromCart = (id) => {
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        alert("Successfully delete product!")
        mutate(`http://localhost:3000/cart?userId=${userId}&_expand=product`)
      })
      .catch((error) => console.log(error))
  }

  const productCheckout = (event) => {
    const productInCheckout = data.filter((list) => list.id == event.target.value)[0]
    if (event.target.checked == true) {
      let payload
      if (dataCheckout.length != 0) {
        payload = [...dataCheckout, { ...productInCheckout }]
      } else {
        payload = [{ ...productInCheckout }]
      }

      dispatch(addToCheckout(payload))
    } else if (event.target.checked == false) {
      dispatch(deleteFromCheckout(productInCheckout.id))
    }
  }

  return (
    <table cellPadding={5} className="table-auto w-[80%]">
      <thead>
        <tr className="bg-orange-300">
          <th className="text-sm">Checkout</th>
          <th>Nama Product</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Harga</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((list) => (
          <tr key={list.id} className="shadow-md">
            <td className="text-center">
              <input type="checkbox" defaultChecked={[...dataCheckout].find((data) => data.id == list.id)} value={list.id} onClick={productCheckout} />
            </td>
            <td>
              <div className="flex gap-2 items-center">
                <img src={list.product.image[0]} className="w-44 h-44" />
                <h1 className="font-semibold">{list.name}</h1>
              </div>
            </td>
            <td className="text-center">
              <h1>{list.size}</h1>
            </td>
            <td>
              <div className="flex justify-center">
                <QuantityInTableCart quantity={list.quantity} id={list.id} userId={userId} />
              </div>
            </td>
            <td className="text-center">
              <h1>Rp. {JSON.parse(list.product.harga * list.quantity).toLocaleString("ID-id")}</h1>
            </td>
            <td>
              <div className="flex justify-center">
                <Button custom="rounded w-16 text-xs font-medium" color="bg-red-600 hover:bg-red-700 text-white" onClick={() => deleteFromCart(list.id)}>
                  Hapus
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableCart
