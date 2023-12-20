import { useSelector } from "react-redux"
import Button from "./ui/Button"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const CardCheckout = () => {
  const { dataCheckout } = useSelector((state) => state.checkout)
  const navigate = useNavigate()
  // console.log(checkoutProduct)

  const totalHarga = dataCheckout.reduce((accumulator, hitungHarga) => accumulator + hitungHarga.product.harga * hitungHarga.quantity, 0)
  const totalProduk = dataCheckout.reduce((accumulator) => accumulator + 1, 0)

  function handleOnClick() {
    navigate("/checkout")
  }

  return (
    <div className="flex items-center justify-center shadow-lg bg-orange-50 w-[80%] p-3 gap-3 sticky bottom-0">
      <div className="flex gap-5">
        <div className="flex gap-3">
          <h1 className="font-semibold">Total Produk : </h1>
          <h1 className="font-semibold text-orange-400">{totalProduk} Produk</h1>
        </div>
        <div className="flex gap-3">
          <h1 className="font-semibold">Total Harga : </h1>
          <h1 className="font-semibold text-orange-400">Rp. {totalHarga.toLocaleString("ID-id")}</h1>
        </div>
      </div>
      <Button custom="font-semibold text-sm rounded" onClick={handleOnClick}>
        Checkout
      </Button>
    </div>
  )
}

export default CardCheckout
