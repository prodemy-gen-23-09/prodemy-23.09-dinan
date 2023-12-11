import { UserIcon, ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline"
import SearchBar from "../component/ui/SeacrhBar"

const Header = () => (
  <header className="container flex justify-around p-3">
    <div className="flex items-center gap-3">
      <img src={`/src/assets/img/logo.png`} alt="logo" className="w-14"></img>
      <h1 className="font-semibold"> E-Commerce</h1>
    </div>
    <SearchBar iconSize="h-6 w-6" customeStyle="w-96 py-1" placeHolder="I am looking for..." />
    <nav className="flex items-center gap-3">
      <div className="flex items-center gap-1 group">
        <HomeIcon className="inconHover" />
        <p className="anchorHover">Home</p>
      </div>
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
