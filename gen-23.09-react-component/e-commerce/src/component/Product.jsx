import Button from "./Button"

const Product = ({ urlFront, urlBack, namaProduct, harga }) => (
  <div className="flex flex-col items-center gap-y-1 p-1 shadow-lg">
    <div className="group w-fit [perspective:1000px]">
      <div className="w-52 h-52 relative transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <img className="absolute top-0 left-0 w-52 h-52 [backface-visibility:hidden]" src={urlFront}></img>
        <img className="absolute top-0 left-0 w-52 h-52 [backface-visibility:hidden] [transform:rotateY(180deg)]" src={urlBack}></img>
      </div>
    </div>
    <h1 className="font-semibold">{namaProduct}</h1>
    <h3 className="text-green-500">{harga}</h3>
    <div>
      <Button> Add to Cart </Button>
    </div>
  </div>
)

export default Product
