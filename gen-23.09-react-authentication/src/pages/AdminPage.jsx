import useSWR from "swr"
import axios from "axios"
import { DotLoader } from "react-spinners"
import { useState } from "react"
import Modal from "../component/Modal"
import Form from "../component/ui/Form"
import Table from "../component/table"
import Button from "../component/ui/Button"

const AdminPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [id, setId] = useState()
  const getProduct = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error, mutate } = useSWR("http://localhost:3000/products", getProduct)

  let dataProductSpecific
  if (data) {
    dataProductSpecific = data.filter((list) => list.id == id)[0]
  }

  if (error) {
    console.log(error)
  }

  const onSubmitNewData = (data) => {
    console.log(data)

    const payload = {
      id: data.id,
      name: data.name,
      image: [data.image],
      price: data.price,
      size: data.size.split(" "),
      categoryId: data.category,
      stock: data.stock,
    }

    axios
      .post("http://localhost:3000/products", payload)
      .then(() => {
        alert("Successfully add product!")
      })
      .catch((error) => console.log(error))
  }

  const onUpdateData = (data) => {
    const payload = {
      name: data.name,
      image: [data.image],
      price: data.price,
      size: data.size.split(","),
      categoryId: data.category,
      stock: data.stock,
    }

    axios
      .put(`http://localhost:3000/products/${id}`, payload)
      .then(() => {
        alert("Successfully add product!")
      })
      .catch((error) => console.log(error))
  }

  const getLatestId = () => {
    const getId = (url) => axios.get(url).then((response) => response.data)
    const { data, isLoading, error } = useSWR("http://localhost:3000/products?_sort=id&_order=desc", getId)

    if (error) {
      console.log(error)
    }

    if (isLoading) {
      return console.log("Loading")
    } else {
      if (data.length != 0) {
        const getLastId = data.map((list) => list.id)[0]
        return getLastId + 1
      } else {
        return 1
      }
    }
  }

  return (
    <div className="flex flex-col gap-24 items-center">
      <div className="w-[90%] relative flex flex-col items-center justify-between">
        <div className="w-[90%]">
          <Button text="Add Product" custom="font-semibold text-xs w-24" onClick={() => setShowModal(true)} />
          {isLoading ? <DotLoader /> : <Table data={data} mutate={mutate} setShowModalUpdate={setShowModalUpdate} setId={setId} />}
        </div>
      </div>
      <Modal isVisible={showModal} onClose={setShowModal}>
        <Form getId={getLatestId} typeSubmit={onSubmitNewData} />
      </Modal>
      <Modal isVisible={showModalUpdate} onClose={setShowModalUpdate}>
        <Form dataProduct={dataProductSpecific} getId={id} typeSubmit={onUpdateData} />
      </Modal>
    </div>
  )
}

export default AdminPage
