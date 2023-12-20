import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import Button from "./ui/Button"
import Quantity from "./ui/Quantity"
import { useState } from "react"

const CardOrderDetail = ({ size, subTotal, children, qty, setQty }) => {
  return (
    <div className="h-fit border-2 p-5 flex flex-col gap-y-5">
      <div className="flex flex-col items-center  gap-y-3">
        <h1 className="font-semibold text-center">Order Details</h1>
        <Quantity qty={qty} setQty={setQty} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>Size</div>
        <div>{size}</div>
        <div>Sub Total</div>
        <div>Rp. {(subTotal * qty).toLocaleString("id-ID")}</div>
      </div>
      <div className="flex flex-col gap-y-3">
        {children}
        <Button color="text-orange-500 border-2 border-orange-500 hover:border-2 hover:border-orange-800">Buy</Button>
      </div>
    </div>
  )
}

export default CardOrderDetail
