import Button from "./ui/Button"

export default function CardPayment({ data }) {
  const totalHarga = data.reduce((accumulator, hitungHarga) => accumulator + hitungHarga.harga * hitungHarga.quantity, 0)

  return (
    <div className="border-2 border-orange-100 rounded-lg p-5 flex flex-col gap-5">
      <div className="flex flex-col">
        <label htmlFor="metodePembayaran" className="text-sm font-semibold">
          Metode Pembayaran
        </label>
        <select className="inputForm" id="metodePembayaran">
          <option value="" className="text-xs">
            Pilih Metode Pembayaran
          </option>
          <option value="Transfer Bank">Transfer Bank</option>
          <option value="Dana">Dana</option>
          <option value="COD">COD</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="metodePengiriman" className="text-sm font-semibold">
          Metode Pengiriman
        </label>
        <select className="inputForm" id="metodePengiriman">
          <option value="" className="text-xs">
            Pilih Metode Pengiriman
          </option>
          <option value="JNE">JNE</option>
          <option value="J&T">J&T</option>
          <option value="SiCepat">SiCepat</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="alamat" className="text-sm font-semibold">
          Alamat
        </label>
        <textarea className="textArea" id="desc" rows="2" placeholder="Alamat rumah...."></textarea>
      </div>
      <div className="flex gap-5">
        <h1 className="font-semibold">Total Pembayaran : </h1>
        <h1 className="font-semibold text-orange-500">Rp. {totalHarga.toLocaleString("ID-id")}</h1>
      </div>
      <Button custom="w-full rounded-md font-semibold">Proses</Button>
    </div>
  )
}
