import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Header = () => (
  <header className="container flex justify-between p-3">
    <div className="flex items-center gap-3">
      <img src="./src/assets/img/logo.png" alt="logo" className="w-14"></img>
      <h1 className="font-semibold"> E-Commerce</h1>
    </div>
    <div className="flex items-center relative text-gray-400 focus-within:text-gray-600">
      <MagnifyingGlassIcon className="h-6 w-6 absolute ml-3 pointer-events-none" />
      <input
        className="pr-3 pl-10 py-1 font-normal w-96 placeholder-gray-400 rounded-2xl ring-2 ring-orange-300 focus:outline-none focus:ring-orange-500 focus:ring-2"
        type="text"
        placeholder="I am looking for..."
      ></input>
    </div>
    <nav className="flex items-center gap-3">
      <div className="flex items-center gap-1 group">
        <UserIcon className="inconHover" />
        <a className="anchorHover">Login</a>
      </div>
      <div className="flex items-center gap-1 group">
        <ShoppingCartIcon className="inconHover" />
        <a className="anchorHover">Cart</a>
      </div>
    </nav>
  </header>
)

export default Header
