import { useContext } from "react"
import Button from "./ui/Button"
import { CartContext } from "../context/CartContext"
import QuantityInTableCart from "./ui/QuantityInTableCart"

const TableCart = ({ data }) => {
  const { setDataCart } = useContext(CartContext)

  return (
    <table className="table-auto border-2 w-[80%]">
      <thead>
        <tr className="border-2">
          <th className="border-2">Nama Product</th>
          <th className="border-2">Size</th>
          <th className="border-2">Quantity</th>
          <th className="border-2">Harga</th>
          <th className="border-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((list) => (
          <tr key={list?.id} className="border-2">
            <td>
              <div className="flex gap-2 items-center">
                <img src={list.urlImg1} className="w-44 h-44" />
                <h1 className="font-semibold">{list.name}</h1>
              </div>
            </td>
            <td className="text-center">
              <h1>{list.size}</h1>
            </td>
            <td>
              <div className="flex justify-center">
                <QuantityInTableCart quantity={list.quantity} />
              </div>
            </td>
            <td className="text-center">
              <h1>
                Rp. {JSON.parse(list.harga * list.quantity).toLocaleString("ID-id")}
              </h1>
            </td>
            <td>
              <div className="flex justify-center">
                <Button
                  custom="rounded w-16 text-xs font-medium"
                  color="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => setDataCart(data.filter((a) => a.id != list.id))}
                >
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
