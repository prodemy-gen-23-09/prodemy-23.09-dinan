import { useDispatch, useSelector } from "react-redux"
import Button from "./ui/Button"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { formatDateWithTime } from "../utils/formatDate"
import { useSWRConfig } from "swr"
import { deleteFromCheckout } from "../store/reducers/checkoutSlice"
import { useNavigate } from "react-router-dom"

const CardPayment = ({ dataProduct }) => {
  const totalHarga = dataProduct.reduce((accumulator, hitungHarga) => accumulator + hitungHarga.product.harga * hitungHarga.quantity, 0)
  const user = useSelector((state) => state.auth.user)
  const { dataCheckout } = useSelector((state) => state.checkout)
  const { mutate } = useSWRConfig()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required("Metode pembayaran wajib di isi"),
    metodePembayaran: yup.string().required("Metode pembayaran wajib di isi"),
    metodePengiriman: yup.string().required("Metode pengiriman wajib di isi"),
    alamat: yup.string().required("Alamat wajib diisi"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const onInvalid = (errors) => console.error(errors)

  const onSubmitForm = (data) => {
    const payload = {
      userId: user.id,
      name: user.name,
      metodePembayaran: data.metodePembayaran,
      metodePengiriman: data.metodePengiriman,
      alamat: data.alamat,
      product: dataCheckout,
      totalHarga: totalHarga,
      date: formatDateWithTime(new Date()),
    }

    axios.post("http://localhost:3000/transaction", payload).catch((error) => console.log(error))

    for (let obj of dataCheckout) {
      axios.delete(`http://localhost:3000/cart/${obj.id}`).catch((error) => console.log(error))
      dispatch(deleteFromCheckout(obj.id))
    }

    alert("Transaksi Sukses")
    navigate("/home")
    reset()
  }

  return (
    <div className="border-2 border-orange-100 rounded-lg p-5 flex flex-col gap-5">
      <form className="flex flex-col gap-3 p-3" onSubmit={handleSubmit(onSubmitForm, onInvalid)}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold">
            Nama
          </label>
          <input type="text" className="inputForm" defaultValue={user.name} id="name" {...register("name")}></input>
          <p className="text-xs text-red-500">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="metodePembayaran" className="text-sm font-semibold">
            Metode Pembayaran
          </label>
          <select className="inputForm" id="metodePembayaran" {...register("metodePembayaran")}>
            <option value="" className="text-xs">
              Pilih Metode Pembayaran
            </option>
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="Dana">Dana</option>
            <option value="COD">COD</option>
          </select>
          <p className="text-xs text-red-500">{errors.metodePembayaran?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="metodePengiriman" className="text-sm font-semibold">
            Metode Pengiriman
          </label>
          <select className="inputForm" id="metodePengiriman" {...register("metodePengiriman")}>
            <option value="" className="text-xs">
              Pilih Metode Pengiriman
            </option>
            <option value="JNE">JNE</option>
            <option value="J&T">J&T</option>
            <option value="SiCepat">SiCepat</option>
          </select>
          <p className="text-xs text-red-500">{errors.metodePengiriman?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="alamat" className="text-sm font-semibold">
            Alamat
          </label>
          <textarea className="textArea" id="alamat" rows="2" placeholder="Alamat rumah...." {...register("alamat")}></textarea>
          <p className="text-xs text-red-500">{errors.alamat?.message}</p>
        </div>
        <div className="flex gap-5">
          <h1 className="font-semibold">Total Pembayaran : </h1>
          <h1 className="font-semibold text-orange-500">Rp. {totalHarga.toLocaleString("ID-id")}</h1>
        </div>
        <Button text="proses" type="submit" />
      </form>
    </div>
  )
}

export default CardPayment
