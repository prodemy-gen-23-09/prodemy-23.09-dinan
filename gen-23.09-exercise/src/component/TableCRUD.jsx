import Button from "./ui/Button"
import { DotLoader } from "react-spinners"
import useSWR from "swr"
import axios from "axios"

const GetCategory = ({ id }) => {
  const getProductSpecific = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error } = useSWR(`http://localhost:3000/products/${id}?_expand=category`, getProductSpecific)
  if (error) {
    console.log(error)
  }

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <DotLoader color="orange" />
        </div>
      ) : (
        data.category.name
      )}
    </>
  )
}

const TableCRUD = ({ data, setId, setShowModalUpdate, mutate }) => {
  const onDeleteData = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        alert("Successfully delete product!")
        mutate()
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <table cellPadding={10} className="table-auto w-[100%] shadow-lg">
        <thead>
          <tr className=" bg-orange-300">
            <th>Id</th>
            <th>Nama Product</th>
            <th>Category</th>
            <th>Size</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.map((list) => (
            <tr key={list.id} className="shadow-md hover:scale-105 transition duration-75 active:bg-orange-200">
              <td>{list.id}</td>
              <td>
                <div className="flex gap-2 items-center">
                  <img src={list.image[0]} className="w-28 h-28" />
                  {list.name}
                </div>
              </td>
              <td>
                <GetCategory id={list.id} />
              </td>
              <td>
                <div className="flex gap-1 justify-center">
                  {list.size.map((s, index) => (
                    <div key={index}>
                      {s}
                      {index == list.size.length - 1 ? "" : ","}
                    </div>
                  ))}
                </div>
              </td>
              <td>Rp. {JSON.parse(list.harga).toLocaleString("id-ID")}</td>
              <td>{list.stock}</td>
              <td>
                <div className="flex gap-2 justify-center">
                  <Button
                    text="update"
                    custom="font-semibold text-xs rounded"
                    onClick={() => {
                      setShowModalUpdate(true)
                      setId(list.id)
                    }}
                  />
                  <Button text="delete" color="bg-red-400 hover:bg-red-700" custom="font-semibold text-xs rounded" onClick={() => onDeleteData(list.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableCRUD
