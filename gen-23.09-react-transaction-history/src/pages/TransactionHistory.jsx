import axios from "axios"
import useSWR from "swr"
import { DotLoader } from "react-spinners"

export default function TransactionHistoty() {
  const getTransaction = (url) => axios.get(url).then((response) => response.data)
  const { data, isLoading, error } = useSWR("http://localhost:3000/transaction", getTransaction)

  if (error) {
    console.log(error)
  }
  return (
    <div className="flex justify-center">
      <div className="w-[95%]">
        {isLoading ? (
          <div className="flex justify-center">
            <DotLoader color="orange" />
          </div>
        ) : (
          <table cellPadding={10} className="table-auto w-full bg-orange-100 border-separate">
            <thead>
              <tr className="bg-orange-300 text-sm">
                <th>Date</th>
                <th>Customer</th>
                <th>Metode Pembayaran</th>
                <th>Metode Pengiriman</th>
                <th>Alamat</th>
                <th>Product yang dibeli</th>
                <th>Total Harga</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((list) => (
                <tr key={list.id} className="bg-white">
                  <td className="text-center text-sm">{list.date}</td>
                  <td className="text-sm">
                    <h1>ID : {list.userId}</h1>
                    <h1>Name : {list.name}</h1>
                  </td>
                  <td className="text-center">
                    <h1>{list.metodePembayaran}</h1>
                  </td>
                  <td className="text-center">
                    <h1>{list.metodePengiriman}</h1>
                  </td>
                  <td className="text-center">
                    <h1>{list.alamat}</h1>
                  </td>
                  <td className="flex justify-around">
                    <table className="text-xs w-full">
                      <thead>
                        <tr className="font-semibold">
                          <td>Nama Produk</td>
                          <td className="text-center w-12">Qty</td>
                          <td>Sub Total</td>
                        </tr>
                      </thead>
                      <tbody>
                        {list.product.map((p, index) => (
                          <tr key={index}>
                            <td className="w-40">{p.product.name}</td>
                            <td className="text-center">{p.quantity}</td>
                            <td>Rp. {(p.quantity * p.product.harga).toLocaleString("ID-id")}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <h1>Rp. {list.totalHarga.toLocaleString("ID-id")}</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
