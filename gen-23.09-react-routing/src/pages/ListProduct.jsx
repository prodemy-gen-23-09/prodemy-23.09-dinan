import { useEffect, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import CardProduct from "../component/CardProduct"
import Categories from "../component/Categories"
import Product from "../data/product"
import Button from "../component/ui/Button"
import SearchBar from "../component/ui/SeacrhBar"

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
          <Button
            onClick={() => {
              setSortProduct("ascPrice")
            }}
            text="Ascending Price"
          />
          <Button
            onClick={() => {
              setSortProduct("descPrice")
            }}
            text="Descending Price"
          />
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
          <SearchBar
            iconSize="h-5 w-5"
            customeStyle="w-32 text-sm"
            placeHolder="min Harga"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                handleKeyup(event)
              }
            }}
          />
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-y-10">
          {product.map((list) => (
            <CardProduct key={list.id} urlFront={list.urlImg1} urlBack={list.urlImg2} namaProduct={list.name} harga={list.harga} date={list.date} id={list.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ListProduct
