import { useEffect, useState } from "react"
import Button from "./Button"
import { useDispatch } from "react-redux"
import { changeObject } from "../../store/reducers/cartSlice"
import axios from "axios"
import { mutate } from "swr"

const QuantityInTableCart = ({ quantity, id, mutate }) => {
  const [numberQuantity, setNumberQuantity] = useState(quantity)

  useEffect(() => {
    const payload = { quantity: numberQuantity }
    axios
      .patch(`http://localhost:3000/cart/${id}`, payload)
      .then(() => {
        mutate()
      })
      .catch((error) => console.log(error))
  }, [numberQuantity])

  return (
    <>
      <div className="w-fit flex border-2 border-orange-300 rounded-xl items-center overflow-hidden">
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="-"
          onClick={() => {
            numberQuantity == 0 ? setNumberQuantity(0) : setNumberQuantity((n) => n - 1)
          }}
        />
        <input className="w-10 text-center" type="text" value={numberQuantity} onChange={() => quantity(numberQuantity)} />
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="+"
          onClick={() => {
            setNumberQuantity((n) => n + 1)
          }}
        />
      </div>
    </>
  )
}

export default QuantityInTableCart
