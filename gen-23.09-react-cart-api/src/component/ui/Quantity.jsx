import Button from "./Button"

const Quantity = ({ qty, setQty }) => {
  const sendData = (event) => {
    jumlah(event.target.value)
  }

  return (
    <>
      <div className="w-fit flex border-2 border-orange-300 rounded-xl items-center overflow-hidden">
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="-"
          onClick={() => {
            qty == 0 ? setQty(0) : setQty((n) => n - 1)
          }}
        />
        <input className="w-10 text-center" type="text" onChange={sendData} value={qty} />
        <Button
          color="hover:bg-orange-200"
          custom="rounded-none w-5 text-sm font-semibold"
          text="+"
          onClick={() => {
            setQty((n) => n + 1)
          }}
        />
      </div>
    </>
  )
}

export default Quantity
