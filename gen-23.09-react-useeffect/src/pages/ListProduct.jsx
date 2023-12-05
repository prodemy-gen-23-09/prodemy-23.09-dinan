import { useEffect, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import CardProduct from "../component/CardProduct"
import Categories from "../component/Categories"
import Product from "../data/product"
import Button from "../component/ui/Button"

const ListProduct = () => {
  const [product, setProduct] = useState([])
  const [sortProduct, setSortProduct] = useState("latestDate")
  const [filterPrice, setFilterPrice] = useState()

  const handleKeyup = (event) => {
    setFilterPrice(event.target.value)
  }

  useEffect(() => {
    console.log(sortProduct)
    const listProduct = Product.slice()

    let sortType
    if (sortProduct == "ascPrice") {
      sortType = listProduct.sort((x, y) => x.harga - y.harga)
    } else if (sortProduct == "descPrice") {
      sortType = listProduct.sort((x, y) => y.harga - x.harga)
    } else if (sortProduct == "oldestDate") {
      sortType = listProduct.sort((x, y) => new Date(x.date) - new Date(y.date))
    } else if (sortProduct == "latestDate") {
      sortType = listProduct.sort((x, y) => new Date(y.date) - new Date(x.date))
    }
    setProduct(sortType)
    if (filterPrice != null) {
      setProduct(() => {
        const newListProduct = listProduct.filter((item) => item.harga >= filterPrice)
        return newListProduct
      })
    }
  }, [sortProduct, filterPrice])

  return (
    <>
      <img src="./src/assets/img/clothing.png" alt="Clothing" width="100%"></img>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-bold text-lg ml-5">Browse by Categories</h1>
        <div className="flex justify-around">
          <Categories />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-bold text-lg ml-5">List Product</h1>
        <div className="flex gap-3 ml-5">
          {/* mengurutkan dari harga terkecil ke terbesar */}
          <Button
            onClick={() => {
              setSortProduct("ascPrice")
            }}
            text="Ascending Price"
          />
          {/* mengurutkan dari harga terbesa ke terkecil */}
          <Button
            onClick={() => {
              setSortProduct("descPrice")
            }}
            text="Descending Price"
          />
          {/* mengurutkan dari tanggal terlama ke terbaru*/}
          <Button
            onClick={() => {
              setSortProduct("oldestDate")
            }}
            text="Oldest release date"
          />
          <Button
            onClick={() => {
              setSortProduct("latestDate")
            }}
            text="Latest release date"
          />
          <div className="flex items-center relative text-gray-400 focus-within:text-gray-600">
            <MagnifyingGlassIcon className="h-5 w-5 absolute ml-3 pointer-events-none" />
            <input
              className="pr-3 pl-10 font-normal w-32 placeholder-gray-400 text-sm rounded-2xl ring-2 ring-orange-300 focus:outline-none focus:ring-orange-500 focus:ring-2"
              type="text"
              placeholder="min Harga"
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  handleKeyup(event)
                }
              }}
            ></input>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-y-10">
          {product.map((list) => (
            <CardProduct key={list.id} urlFront={list.urlImg1} urlBack={list.urlImg2} namaProduct={list.name} harga={list.harga} date={list.date} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ListProduct
