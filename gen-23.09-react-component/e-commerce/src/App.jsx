import Categories from "./component/Categories"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Product from "./component/Product"

function App() {
  let listProduct = [
    {
      id: 1,
      urlImg1: "./src/assets/img/product/vans-front.jpeg",
      urlImg2: "./src/assets/img/product/vans-back.jpeg",
      name: "Vans Old School",
      harga: "Rp. 1.090.000",
    },
    {
      id: 2,
      urlImg1: "./src/assets/img/product/monseur-front.jpeg",
      urlImg2: "./src/assets/img/product/monseur-back.jpeg",
      name: "The Monseur Gallery T-shirt",
      harga: "Rp. 300.000",
    },
    {
      id: 3,
      urlImg1: "./src/assets/img/product/jacket-front.jpg",
      urlImg2: "./src/assets/img/product/jacket-back.jpg",
      name: "Jacket",
      harga: "Rp. 300.000",
    },
    {
      id: 4,
      urlImg1: "./src/assets/img/product/dcSendal-front.jpg",
      urlImg2: "./src/assets/img/product/dcSendal-back.jpg",
      name: "DC Sendal",
      harga: "Rp. 450.000",
    },
    {
      id: 5,
      urlImg1: "./src/assets/img/product/dcSepatu-front.jpg",
      urlImg2: "./src/assets/img/product/dcSepatu-back.jpg",
      name: "DC Shoes",
      harga: "Rp. 900.000",
    },
    {
      id: 6,
      urlImg1: "./src/assets/img/product/dreamTheater-front.jpg",
      urlImg2: "./src/assets/img/product/dreamTheater-back.jpg",
      name: "Dream Thater T-shirt",
      harga: "Rp. 400.000",
    },
    {
      id: 7,
      urlImg1: "./src/assets/img/product/flanel-front.jpg",
      urlImg2: "./src/assets/img/product/flanel-back.jpg",
      name: "Flanel",
      harga: "Rp. 300.000",
    },
    {
      id: 8,
      urlImg1: "./src/assets/img/product/hoodie-front.jpg",
      urlImg2: "./src/assets/img/product/hoodie-back.jpg",
      name: "Hoodie Troops",
      harga: "Rp. 400.000",
    },
    {
      id: 9,
      urlImg1: "./src/assets/img/product/jeans-front.jpeg",
      urlImg2: "./src/assets/img/product/jeans-back.jpeg",
      name: "Jeans",
      harga: "Rp. 420.000",
    },
    {
      id: 10,
      urlImg1: "./src/assets/img/product/screamous-front.jpg",
      urlImg2: "./src/assets/img/product/screamous-back.jpg",
      name: "Screamous T-shirt",
      harga: "Rp. 220.000",
    },
    {
      id: 11,
      urlImg1: "./src/assets/img/product/trucker-front.jpg",
      urlImg2: "./src/assets/img/product/trucker-back.jpg",
      name: "Trucker T-shirt",
      harga: "Rp. 200.000",
    },
    {
      id: 12,
      urlImg1: "./src/assets/img/product/kemeja-front.jpg",
      urlImg2: "./src/assets/img/product/kemeja-back.jpg",
      name: "Kemeja",
      harga: "Rp. 300.000",
    },
  ]
  return (
    <div className="flex flex-col gap-y-12">
      <Header />
      <img src="./src/assets/img/clothing.jpg" alt="Clothing" width="100%"></img>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-bold text-lg ml-5">Browse by Categories</h1>
        <div className="flex justify-around">
          <Categories />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-bold text-lg ml-5">List Product</h1>
        <div className="grid grid-cols-4 justify-items-center gap-y-10">
          {listProduct.map((list) => (
            <Product key={list.id} urlFront={list.urlImg1} urlBack={list.urlImg2} namaProduct={list.name} harga={list.harga} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
