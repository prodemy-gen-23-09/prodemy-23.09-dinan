import CardProduct from "../component/CardProduct"
import Categories from "../component/Categories"
import Product from "../data/product"

const ListProduct = () => (
  <>
    <img src="./src/assets/img/clothing.png" alt="Clothing" width="100%"></img>
    <div className="flex flex-col gap-y-3">
      <h1 className="font-bold text-lg ml-5">Browse by Categories</h1>
      <div className="flex justify-around">
        <Categories />
      </div>
    </div>
    <div className="flex flex-col gap-y-3">
      <h1 className="font-bold text-lg ml-5">List Product</h1>
      <div className="grid grid-cols-4 justify-items-center gap-y-10">
        {Product.map((list) => (
          <CardProduct key={list.id} urlFront={list.urlImg1} urlBack={list.urlImg2} namaProduct={list.name} harga={list.harga} />
        ))}
      </div>
    </div>
  </>
)

export default ListProduct
