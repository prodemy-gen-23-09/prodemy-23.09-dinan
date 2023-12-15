import Button from "../component/ui/Button"
import { DotLoader } from "react-spinners"
import useSWR, { mutate } from "swr"
import axios from "axios"

const Table = ({ data, setId, setShowModalUpdate, mutate }) => {
  const GetCategory = ({ id }) => {
    const getProductSpecific = (url) => axios.get(url).then((response) => response.data)
    const { data, isLoading, error } = useSWR(`http://localhost:3000/products/${id}?_expand=category`, getProductSpecific)
    if (error) {
      console.log(error)
    }

    return <>{isLoading ? <DotLoader /> : data.category.name}</>
  }

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
      <table className="table-auto border-2 w-[100%]">
        <thead>
          <tr className="border-2">
            <th className="border-2">Id</th>
            <th className="border-2">Nama Product</th>
            <th className="border-2">Category</th>
            <th className="border-2">Size</th>
            <th className="border-2">Price</th>
            <th className="border-2">Stock</th>
            <th className="border-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((list) => (
            <tr key={list?.id}>
              <td className="border-2">{list.id}</td>
              <td className="border-2">
                <div className="flex gap-2 items-center">
                  <img src={list?.urlImg1} className="w-28 h-28" />
                  {list?.name}
                </div>
              </td>
              <td className="border-2">
                <GetCategory id={list.id} />
              </td>
              <td className="border-2">
                <div className="flex gap-1">
                  {list?.size.map((s, index) => (
                    <div key={index}>
                      {s}
                      {index == list.size.length - 1 ? "" : ","}
                    </div>
                  ))}
                </div>
              </td>
              <td className="border-2">Rp. {list?.harga}</td>
              <td className="border-2">{list?.stock}</td>
              <td>
                <div className="flex gap-2 justify-center">
                  <Button
                    text="update"
                    custom="font-semibold text-xs"
                    onClick={() => {
                      setShowModalUpdate(true)
                      setId(list.id)
                    }}
                  />
                  <Button text="delete" color="bg-red-400 hover:bg-red-700" custom="font-semibold text-xs" onClick={() => onDeleteData(list.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
