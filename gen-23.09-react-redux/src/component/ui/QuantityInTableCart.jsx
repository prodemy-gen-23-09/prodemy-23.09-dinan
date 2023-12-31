import { useEffect, useState } from "react"
import Button from "./Button"
import { useDispatch, useSelector } from "react-redux"

const QuantityInTableCart = ({ quantity, id }) => {
  const [numberQuantity, setNumberQuantity] = useState(quantity)
  // const { dataCart } = useSelector((state) => state.cart)
  // const specifyData = dataCart.filter((list) => list.id == id)[0]
  // const dispatch = useDispatch()
  // console.log(specifyData)
  //   const { setDataCart } = useContext(CartContext)

  // useEffect(() => {
  //   specifyData.quantity = numberQuantity
  //   let payload = [{ ...dataCart, specifyData }]
  //   console.log(payload)
  //   // dispatch(payload)
  // }, [numberQuantity])

  const sendData = (event) => {
    jumlah(event.target.value)
  }

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
        <input className="w-10 text-center" type="text" onChange={sendData} value={numberQuantity} />
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
