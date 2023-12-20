import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios"
import { useSWRConfig } from "swr"

const QuantityInTableCart = ({ quantity, id, userId }) => {
  const { mutate } = useSWRConfig()

  console.log("cart id yang dihapus : " + id)

  function handleChange(operation) {
    let payload
    operation == "+" ? (payload = { quantity: quantity + 1 }) : (payload = { quantity: quantity - 1 })
    axios
      .patch(`http://localhost:3000/cart/${id}`, payload)
      .then(() => {
        mutate(`http://localhost:3000/cart?userId=${userId}`)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="w-fit flex border-2 border-orange-300 rounded-xl items-center overflow-hidden">
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="-"
          onClick={() => {
            handleChange("-")
          }}
        />
        <input className="w-10 text-center" type="text" value={quantity} onChange={(event) => event.target.value} />
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="+"
          onClick={() => {
            handleChange("+")
          }}
        />
      </div>
    </>
  )
}

export default QuantityInTableCart
