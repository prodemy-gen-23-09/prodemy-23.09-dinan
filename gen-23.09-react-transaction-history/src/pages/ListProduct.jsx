import CardProduct from "../component/CardProduct"
import Categories from "../component/Categories"
import Button from "../component/ui/Button"
// import SearchBar from "../component/ui/SeacrhBar"
import axios from "axios"
import useSWR from "swr"
import { DotLoader } from "react-spinners"
import { useEffect, useState } from "react"

const ListProduct = () => {
  const [products, setProducts] = useState()

  const getProduct = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error } = useSWR("http://localhost:3000/products", getProduct, {
    //sort from latest products
    onSuccess: (data) => setProducts(data.sort((x, y) => new Date(y.date) - new Date(x.date))),
  })

  if (error) {
    console.log(error)
  }

  // useEffect(() => {}, [products])

  const onClickSortData = (sortType, data) => {
    if (sortType == "ascPrice") {
      setProducts([...data].sort((x, y) => x.harga - y.harga))
      console.log(data.map((a) => a.harga))
    } else if (sortType == "descPrice") {
      setProducts([...data].sort((x, y) => y.harga - x.harga))
      console.log(data.map((a) => a.harga))
    } else if (sortType == "oldestDate") {
      setProducts([...data].sort((x, y) => new Date(x.date) - new Date(y.date)))
      console.log(data.map((a) => a.data))
    } else if (sortType == "latestDate") {
      setProducts([...data].sort((x, y) => new Date(y.date) - new Date(x.date)))
      console.log(data.map((a) => a.data))
    }
  }

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
          <Button onClick={() => onClickSortData("ascPrice", data)} text="Ascending Price" />
          <Button onClick={() => onClickSortData("descPrice", data)} text="Descending Price" />
          <Button onClick={() => onClickSortData("oldestDate", data)} text="Oldest release date" />
          <Button onClick={() => onClickSortData("latestDate", data)} text="Latest release date" />
          {/* <SearchBar
            iconSize="h-5 w-5"
            customeStyle="w-32 text-sm"
            placeHolder="min Harga"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                handleKeyup(event)
              }
            }}
          /> */}
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-y-10">
          {isLoading ? <DotLoader color="orange" /> : products?.map((list) => <CardProduct key={list.id} image={list.image} namaProduct={list.name} harga={list.harga} date={list.date} id={list.id} />)}
        </div>
      </div>
    </>
  )
}

export default ListProduct
