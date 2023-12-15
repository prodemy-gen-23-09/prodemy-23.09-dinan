import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import useSWR from "swr"
import { DotLoader } from "react-spinners"
import Button from "./Button"
import { useState } from "react"

const Form = ({ typeSubmit, getId, dataProduct }) => {
  //   const [selectedImage, setSelectedImage] = useState([])

  const getCategory = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error } = useSWR(" http://localhost:3000/categories", getCategory)
  if (error) {
    console.log(error)
  }

  const schema = yup.object().shape({
    name: yup.string().required("nama product is required"),
    harga: yup.number().typeError("harga product is required"),
    stock: yup.number().typeError("stock product is required"),
    size: yup.string().required("size product is required"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  // let dataProductSpecific
  // if (dataProduct != null) {
  //   dataProductSpecific = dataProduct.filter((list) => list.id == getId)[0]
  // }

  // console.log(dataProductSpecific.name)

  return (
    <form id={getId} onSubmit={handleSubmit(typeSubmit)} className="flex flex-col gap-3 p-3">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input defaultValue={dataProduct?.name} type="text" placeholder="Name" className="border-2 border-gray-200 focus:outline-sky-200" {...register("name")} id="name" />
        <p className="error">{errors.name?.message}</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="image">Image</label>
        <input defaultValue={dataProduct?.image} type="text" placeholder="Image" className="border-2 border-gray-200 focus:outline-sky-200" {...register("image")} id="image" />
        <p className="error">{errors.image?.message}</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <input defaultValue={dataProduct?.price} type="text" placeholder="Price" className="border-2 border-gray-200 focus:outline-sky-200" {...register("price")} id="price" />
        <p className="error">{errors.price?.message}</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="size">Size</label>
        <input defaultValue={dataProduct?.size} type="text" placeholder="size" className="border-2 border-gray-200 focus:outline-sky-200" {...register("size")} id="size" />
        <p className="error">{errors.size?.message}</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="category">Category</label>
        {isLoading ? (
          <DotLoader />
        ) : (
          <>
            <select defaultValue={dataProduct?.categoryId} placeholder="Category" className="border-[1px] border-gray-300 text-gray-700" {...register("category")}>
              <option value="">Please select</option>
              {data.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.name}
                </option>
              ))}
            </select>
          </>
        )}
        <p className="error">{errors.category?.message}</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="stock">Stock</label>
        <input type="text" placeholder="Stock" defaultValue={dataProduct?.stock} className="border-2 border-gray-200 focus:outline-sky-200" {...register("stock")} id="stock" />
        <p className="error">{errors.stock?.message}</p>
      </div>
      <Button type="submit" text="Submit" />
    </form>
  )
}

export default Form
