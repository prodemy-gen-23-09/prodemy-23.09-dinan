let listCategories = [
  {
    id: 1,
    name: "Mens Wear",
    url: "./src/assets/img/categories/mens.png",
  },
  {
    id: 2,
    name: "Womens Wear",
    url: "./src/assets/img/categories/womens.png",
  },
  {
    id: 3,
    name: "Kids Wear",
    url: "./src/assets/img/categories/kids.png",
  },
  {
    id: 4,
    name: "Electronic",
    url: "./src/assets/img/categories/electronics.png",
  },
  {
    id: 5,
    name: "Home Appiliance",
    url: "./src/assets/img/categories/home.png",
  },
  {
    id: 6,
    name: "Mobiles",
    url: "./src/assets/img/categories/mobiles.png",
  },
  {
    id: 7,
    name: "Beauty Product",
    url: "./src/assets/img/categories/beauty.png",
  },
]

const Categories = () =>
  listCategories.map((list) => (
    <div key={list.id} className="flex flex-col items-center transition duration-150 ease-out hover:ease-in hover:scale-150">
      <img src={list.url} alt={list.name} className="w-24"></img>
      <h1 className="font-semibold">{list.name}</h1>
    </div>
  ))

export default Categories
