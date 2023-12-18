import useSWR from "swr"
import axios from "axios"
import { DotLoader } from "react-spinners"
import { useState } from "react"
import Modal from "../component/Modal"
import Form from "../component/ui/Form"
import Button from "../component/ui/Button"
import TableCRUD from "../component/TableCRUD"

const AdminPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [id, setId] = useState()
  const getProduct = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error, mutate } = useSWR("http://localhost:3000/products", getProduct)

  if (error) {
    console.log(error)
  }

  return (
    <div className="flex flex-col gap-24 items-center">
      <div className="w-[90%] flex flex-col items-center justify-between">
        <div className="w-[90%]">
          <Button text="Add Product" custom="font-semibold text-xs w-24 mb-3 rounded" onClick={() => setShowModal(true)} />
          {isLoading ? (
            <div className="flex justify-center">
              <DotLoader color="orange" />
            </div>
          ) : (
            <TableCRUD data={data} setShowModalUpdate={setShowModalUpdate} setId={setId} mutate={mutate} />
          )}
        </div>
      </div>
      <Modal isVisible={showModal} onClose={setShowModal}>
        <Form typeSubmit="onSubmitNewData" text={"Input New Product"} mutate={mutate} />
      </Modal>
      <Modal isVisible={showModalUpdate} onClose={setShowModalUpdate}>
        <Form dataProduct={id != null ? data.filter((list) => list.id == id)[0] : id} typeSubmit="onUpdateData" text={"Update Product"} mutate={mutate} />
      </Modal>
    </div>
  )
}

export default AdminPage
