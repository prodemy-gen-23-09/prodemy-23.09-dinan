import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import useSWR from "swr"
import { DotLoader } from "react-spinners"
import Button from "./Button"
import { formatDate } from "../../utils/formatDate"

const Form = ({ text, typeSubmit, dataProduct }) => {
  const getCategory = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error } = useSWR(" http://localhost:3000/categories", getCategory)
  if (error) {
    console.log(error)
  }

  const schema = yup.object().shape({
    name: yup.string().required("Name product is required"),
    image: yup.string().required("Image product is required"),
    harga: yup.number().typeError("Price product is required"),
    size: yup.string().required("Size product is required"),
    category: yup.string().required("Category product is required"),
    stock: yup.number().typeError("Stock product is required"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmitNewData = (data) => {
    const payload = {
      name: data.name,
      image: [data.image],
      harga: data.harga,
      size: data.size.split(" "),
      categoryId: data.category,
      stock: data.stock,
      date: formatDate(new Date()),
      desc: data.desc,
    }

    axios
      .post("http://localhost:3000/products", payload)
      .then(() => {
        alert("Successfully add product!")
        reset()
      })
      .catch((error) => console.log(error))
  }

  const onUpdateData = (data) => {
    console.log(data)
    const payload = {
      name: data.name,
      image: [data.image],
      harga: data.harga,
      size: data.size.split(","),
      categoryId: data.category,
      stock: data.stock,
      date: dataProduct.date,
      desc: dataProduct.desc,
    }

    axios
      .put(`http://localhost:3000/products/${dataProduct.id}`, payload)
      .then(() => {
        alert("Successfully add product!")
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h1 className="text-lg font-semibold text-center">{text}</h1>
      <form onSubmit={handleSubmit(eval(typeSubmit))} className="flex flex-col gap-3 p-3">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input defaultValue={dataProduct?.name} type="text" placeholder="Name" className="inputForm" {...register("name")} id="name" />
          <p className="text-xs text-red-500">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="image">Image</label>
          <input defaultValue={dataProduct?.image[0]} type="text" placeholder="Image" className="inputForm" {...register("image")} id="image" />
          <p className="text-xs text-red-500">{errors.image?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="harga">Price</label>
          <input defaultValue={dataProduct?.harga} type="text" placeholder="Price" className="inputForm" {...register("harga")} id="harga" />
          <p className="text-xs text-red-500">{errors.harga?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="size">Size</label>
          <input defaultValue={dataProduct?.size} type="text" placeholder="size" className="inputForm" {...register("size")} id="size" />
          <p className="text-xs text-red-500">{errors.size?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Category</label>
          {isLoading ? (
            <DotLoader />
          ) : (
            <>
              <select defaultValue={dataProduct?.categoryId} placeholder="Category" className="inputForm" {...register("category")}>
                <option value="">Please select</option>
                {data.map((list) => (
                  <option key={list.id} value={list.id}>
                    {list.name}
                  </option>
                ))}
              </select>
            </>
          )}
          <p className="text-xs text-red-500">{errors.category?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="stock">Stock</label>
          <input type="text" placeholder="Stock" defaultValue={dataProduct?.stock} className="inputForm" {...register("stock")} id="stock" />
          <p className="text-xs text-red-500">{errors.stock?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Description</label>
          <textarea defaultValue={dataProduct?.desc} id="desc" rows="2" className="inputForm" placeholder="Write your thoughts here..." {...register("desc")}></textarea>
        </div>
        <Button type="submit" text="Submit" />
      </form>
    </>
  )
}

export default Form
