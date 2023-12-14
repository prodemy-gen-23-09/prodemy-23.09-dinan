import { useEffect, useState } from "react"
import Button from "./Button"
import { useDispatch } from "react-redux"
import { changeObject } from "../../store/reducers/cartSlice"

const QuantityInTableCart = ({ quantity, id }) => {
  const [numberQuantity, setNumberQuantity] = useState(quantity)
  const dispatch = useDispatch()

  useEffect(() => {
    let payload = { id: id, quantity: numberQuantity }
    dispatch(changeObject(payload))
  }, [numberQuantity])

  return (
    <>
      <div className="w-fit flex border-2 border-orange-300 rounded-xl items-center overflow-hidden">
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="+"
          onClick={() => {
            setNumberQuantity((n) => n + 1)
          }}
        />
        <input className="w-10 text-center" type="text" value={numberQuantity} onChange={() => quantity(numberQuantity)} />
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="-"
          onClick={() => {
            numberQuantity == 0 ? setNumberQuantity(0) : setNumberQuantity((n) => n - 1)
          }}
        />
      </div>
    </>
  )
}

export default QuantityInTableCart
