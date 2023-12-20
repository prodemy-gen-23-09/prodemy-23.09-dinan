import { useSelector } from "react-redux"
import CardPayment from "../component/CardPayment"
import CardProductCheckout from "../component/CardProductCheckout"

export default function Checkout() {
  // const user = useSelector((state) => state.auth.user)
  const { dataCheckout } = useSelector((state) => state.checkout)

  // const checkoutWithUserId = dataCheckout.filter((list) => list.userId == user.id)
  return (
    <div className="flex justify-around">
      <div>
        {dataCheckout?.map((data) => (
          <CardProductCheckout key={data.id} data={data} />
        ))}
      </div>
      <CardPayment dataProduct={dataCheckout} />
    </div>
  )
}
