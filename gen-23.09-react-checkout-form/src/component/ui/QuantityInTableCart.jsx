import { useEffect, useState } from "react"
import Button from "./Button"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, changeObject } from "../../store/reducers/cartSlice"
import axios from "axios"
import { mutate } from "swr"

const QuantityInTableCart = ({ quantity, id, mutate }) => {
  const [numberQuantity, setNumberQuantity] = useState(quantity)
  // const { dataCheckout } = useSelector((state) => state.checkout)
  // const dispatch = useDispatch()

  useEffect(() => {
    // const isExistInCheckout = dataCheckout.find((list) => list.id == id)
    // if (isExistInCheckout) {
    //   const updateQtyinDataCheckout = dataCheckout.filter((list) => list.id == id)[0]
    //   const dataNotUpdate = dataCheckout.filter((list) => list.id != id)
    //   const payload = [...dataNotUpdate, { ...updateQtyinDataCheckout, quantity: numberQuantity }]
    //   console.log(payload)
    //   dispatch(addToCart(payload))
    // }

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
