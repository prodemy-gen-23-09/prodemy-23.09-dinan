import { StarIcon } from "@heroicons/react/24/outline"
import CardOrderDetail from "../component/CardOrderDetail"
import ButtonSize from "../component/ui/ButtonSize"
import Product from "../data/product"
import { useState } from "react"
import Button from "../component/ui/Button"
import ImageMagnifier from "../component/ImageMagnifier"

const DetailProduct = () => {
  let getProduct = Product[0]
  const [productImage, setProductImage] = useState(getProduct.urlImg1)

  const [addSize, setAddSize] = useState("-")

  const changeImage = (event) => {
    setProductImage(event.target.src)
    console.log(getProduct)
  }

  const selectSize = (event) => {
    setAddSize(event.target.value)
  }

  return (
    <>
      <div className="container flex justify-center gap-8">
        <div className="w-fit">
          <ImageMagnifier imgUrl={productImage} />
          <div className="flex gap-3 justify-center">
            <img onClick={changeImage} src={getProduct.urlImg1} alt="gambarProduct" className="imgDetailProdict" />
            <img onClick={changeImage} src={getProduct.urlImg2} alt="gambarProduct" className="imgDetailProdict" />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-y-3 w-[500px]">
          <h1 className="font-bold text-4xl">{getProduct.name}</h1>
          <div className="flex items-center">
            <StarIcon className="fill-orange-400 w-4 h-4 stroke-none" />
            <p className="text-xs">
              3.75 (2k rating) <span className="text-orange-500 font-semibold ml-4">623 Reviews</span>
            </p>
          </div>
          <h1 className="font-bold text-2xl text-green-400">Rp. {getProduct.harga.toLocaleString("id-ID")}</h1>
          <p>Select Size</p>
          <div className="flex gap-3">
            {getProduct.size.map((size, index) => (
              <Button onClick={selectSize} color="border-2 hover:border-2 hover:border-gray-500 w-8" key={index} value={size} text={size}></Button>
            ))}
          </div>
          <div className="text-justify">
            <h3 className="font-semibold">Description</h3>
            <ul className="list-inside list-disc" id="list"></ul>
            <p>{getProduct.desc}</p>
          </div>
        </div>
        <CardOrderDetail size={addSize} subTotal={getProduct.harga} />
      </div>
    </>
  )
}

export default DetailProduct
