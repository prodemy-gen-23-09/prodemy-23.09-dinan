import { useNavigate } from "react-router-dom"
import Button from "./ui/Button"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

const CardProduct = ({ urlFront, urlBack, namaProduct, harga, date, id }) => {
  const navigate = useNavigate()

  const onClickCard = (id) => {
    navigate(`/productDetail/${id}`)
  }

  return (
    <div className="flex flex-col items-center gap-y-1 p-1 shadow-lg hover:shadow-2xl" onClick={() => onClickCard(id)}>
      <div className="group w-fit [perspective:1000px]">
        <div className="w-52 h-52 relative transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <img className="absolute top-0 left-0 w-52 h-52 [backface-visibility:hidden]" src={urlFront}></img>
          <img className="absolute top-0 left-0 w-52 h-52 [backface-visibility:hidden] [transform:rotateY(180deg)]" src={urlBack}></img>
        </div>
      </div>
      <h1 className="font-semibold">{namaProduct}</h1>
      <h3 className="text-green-500">RP. {harga}</h3>
      <div>
        <Button>
          <ShoppingBagIcon className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
      <h3 className="text-xs w-full mt-3">{date}</h3>
    </div>
  )
}

export default CardProduct
