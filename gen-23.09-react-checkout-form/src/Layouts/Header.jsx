import { UserIcon, ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline"
import { Link, useNavigate } from "react-router-dom"
import SearchBar from "../component/ui/SeacrhBar"
import { useDispatch, useSelector } from "react-redux"
import { resetAuthData } from "../store/reducers/authSlice"
import { useState } from "react"

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

  const onClickLogout = () => {
    dispatch(resetAuthData())
  }

  return (
    <header className="container flex justify-between p-3">
      <div className="flex items-center gap-3">
        <img src={`/./src/assets/img/logo.png`} alt="logo" className="w-14"></img>
        <h1 className="font-semibold"> E-Commerce</h1>
      </div>
      <SearchBar iconSize="h-6 w-6" customeStyle="w-96 py-1" placeHolder="I am looking for..." />
      <nav className="flex items-center gap-3">
        <Link to="/home" className="flex items-center gap-1 group">
          <HomeIcon className="inconHover" />
          <h3 className="anchorHover">Home</h3>
        </Link>
        <Link to="/shoppingCart" className="flex items-center gap-1 group">
          {/* <div className="relative p-2"> */}
          <ShoppingCartIcon className="inconHover" />
          {/* <div className="absolute top-0 right-0 rounded-full bg-orange-500 bg-opacity-90 flex items-center justify-center w-5 h-5 text-xs font-semibold">5</div> */}
          {/* </div> */}
          <h3 className="anchorHover">Cart</h3>
        </Link>
        <div className="flex items-center gap-1 group" onClick={() => console.log(user.role)}>
          <UserIcon className="inconHover" />
          <h3 className="anchorHover">Hi, {user.name} </h3>
        </div>
        <div className="hover:text-orange-400" onClick={onClickLogout}>
          Logout
        </div>
      </nav>
    </header>
  )
}

export default Header
