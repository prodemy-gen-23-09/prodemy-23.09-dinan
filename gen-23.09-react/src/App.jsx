import Button from "./component/Button"
import Card from "./component/Card"
import Product from "./object/product"

function App() {
  const vans = new Product(1, "./src/assets/img/vans-front.jpeg", "Vans Old School", "The Old Skool, Vans classic skate shoe", "Rp. 1.090.000")
  const monseur = new Product(2, "./src/assets/img/monseur-front.jpeg", "The Monseur Gallery T-shirt", "The Monseur Gallery Oversize BANSHEES", "Rp. 300.000")
  const jacket = new Product(3, "./src/assets/img/jacket.jpg", "Bikers Leather Jacket", "Features inner pocket & 3M Reflektor", "Rp. 1.000.000")
  const jacket2 = new Product(4, "./src/assets/img/jacket.jpg", "Bikers Leather Jacket", "Features inner pocket & 3M Reflektor", "Rp. 1.000.000")

  const daftarProduct = [vans, monseur, jacket, jacket2]
  return (
    <div className="bg-slate-100 min-h-screen grid items-center justify-center gap-7 p-10">
      <h1 className="font-bold text-3xl text-center">Daftar Product</h1>
      <div className="max-w-3xl border-2 grid grid-cols-3 gap-5 ">
        {daftarProduct.map((product) => (
          <Card key={product.id}>
            <Card.Image url={product.img}></Card.Image>
            <Card.Body namaProduct={product.namaProduct} desc={product.desc} harga={product.harga}></Card.Body>
            <div className="flex justify-center">
              <Card.Footer>
                <Button>Add to Cart</Button>
              </Card.Footer>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default App
