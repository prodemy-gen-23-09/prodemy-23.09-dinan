const Card = ({ children }) => <div className="flex flex-col gap-2 border-2 border-black p-2">{children}</div>

const image = ({ url }) => <img src={url}></img>

const body = ({ namaProduct, desc, harga }) => (
  <div>
    <h1 className="font-semibold text-center">{namaProduct}</h1>
    <p>{desc}</p>
    <h3 className="text-green-500 font-semibold">{harga}</h3>
  </div>
)

const footer = ({ children }) => <div>{children}</div>

Card.Image = image
Card.Body = body
Card.Footer = footer

export default Card
