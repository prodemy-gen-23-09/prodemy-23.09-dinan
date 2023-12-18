import ListCategories from "../data/categories"

const Categories = () =>
  ListCategories.map((list) => (
    <div key={list.id} className="flex flex-col items-center transition duration-150 ease-out hover:ease-in hover:scale-150">
      <img src={list.url} alt={list.name} className="w-24"></img>
      <h1 className="font-semibold">{list.name}</h1>
    </div>
  ))

export default Categories
