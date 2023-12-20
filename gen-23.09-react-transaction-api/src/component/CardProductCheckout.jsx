import { useDispatch } from "react-redux"
import Button from "./ui/Button"
import { deleteFromCheckout } from "../store/reducers/checkoutSlice"

export default function CardProductCheckout({ data }) {
  const dispatch = useDispatch()

  function handleDelete(id) {
    dispatch(deleteFromCheckout(id))
  }

  return (
    <div className="flex gap-10 items-center shadow-lg p-3 min-w-max rounded-lg">
      <div className="flex items-center gap-3">
        <img src={data.image[0]} className="w-40 h-40"></img>
        <h1 className="font-semibold">{data.name}</h1>
      </div>
      <div className="flex-col text-center font-semibold">
        <h1>Harga satuan</h1>
        <h1 className="text-orange-400">{data.harga}</h1>
      </div>
      <div className="flex-col text-center font-semibold">
        <h1>Jumlah</h1>
        <h1 className="text-orange-400">{data.quantity}</h1>
      </div>
      <div className="flex-col text-center font-semibold">
        <h1>Size</h1>
        <h1 className="text-orange-400">{data.size}</h1>
      </div>
      <div className="flex-col text-center font-semibold">
        <h1>Sub Total</h1>
        <h1 className="text-orange-400">Rp. {(data.harga * data.quantity).toLocaleString("ID-id")}</h1>
      </div>
      <div>
        <Button color="bg-red-500 hover:bg-red-700" text="delete" onClick={() => handleDelete(data.id)} />
      </div>
    </div>
  )
}
