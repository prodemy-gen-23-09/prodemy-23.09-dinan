import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import { PacmanLoader } from "react-spinners"
import CardOrderDetail from "../component/CardOrderDetail"
import { useEffect, useState } from "react"
import Button from "../component/ui/Button"
import ImageMagnifier from "../component/ImageMagnifier"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import useSWR from "swr"
import axios from "axios"
import { addToCart } from "../store/actions/cartAction"
import { useSelector } from "react-redux"

const DetailProduct = () => {
  const { id } = useParams()
  const [addSize, setAddSize] = useState("-")
  const [productImage, setProductImage] = useState("")
  const [number, setNumber] = useState(0)
  const dispatch = useDispatch()
  const { dataCart } = useSelector((state) => state.cart)

  const getProduct = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error } = useSWR(`http://localhost:3000/products/${id}`, getProduct)

  if (error) {
    console.log(error)
  }

  useEffect(() => {
    setProductImage(data?.urlImg1)
  }, [data])

  const changeImage = (event) => {
    setProductImage(event.target.src)
    console.log(event.target.src)
  }

  const selectSize = (event) => {
    setAddSize(event.target.value)
  }

  const onClickCard = () => {
    let payload
    dataCart.length != 0
      ? (payload = [
          ...dataCart,
          {
            ...data,
            quantity: number,
            size: addSize,
          },
        ])
      : (payload = [
          {
            ...data,
            quantity: number,
            size: addSize,
          },
        ])

    dispatch(addToCart(payload))
    alert("product has been add to cart")
  }

  return (
    <>
      {isLoading ? (
        <PacmanLoader />
      ) : (
        <div className="container flex justify-center gap-8">
          <div className="w-fit">
            <ImageMagnifier imgUrl={productImage} />
            <div className="flex gap-3 justify-center">
              <img onClick={changeImage} src={data.urlImg1} alt="gambarProduct" className="imgDetailProdict" />
              <img onClick={changeImage} src={data.urlImg2} alt="gambarProduct" className="imgDetailProdict" />
            </div>
          </div>
          <div className="flex flex-col justify-start gap-y-3 w-[500px]">
            <h1 className="font-bold text-4xl">{data.name}</h1>
            <div className="flex items-center">
              <StarIcon className="fill-orange-400 w-4 h-4 stroke-none" />
              <p className="text-xs">
                3.75 (2k rating) <span className="text-orange-500 font-semibold ml-4">623 Reviews</span>
              </p>
            </div>
            <h1 className="font-bold text-2xl text-green-400">Rp. {JSON.parse(data.harga).toLocaleString("id-ID")}</h1>
            <p>Select Size</p>
            <div className="flex gap-3">
              {data.size.map((size, index) => (
                <Button onClick={selectSize} color="border-2 hover:border-2 hover:border-gray-500 w-8" key={index} value={size} text={size}></Button>
              ))}
            </div>
            <div className="text-justify">
              <h3 className="font-semibold">Description</h3>
              <ul className="list-inside list-disc" id="list"></ul>
              <p>{data.desc}</p>
            </div>
          </div>
          <CardOrderDetail size={addSize} subTotal={data.harga} number={number} setNumber={setNumber}>
            <Button onClick={onClickCard}>
              <ShoppingBagIcon className="h-4 w-4" />
              Add to Cart
            </Button>
          </CardOrderDetail>
        </div>
      )}
    </>
  )
}

export default DetailProduct
