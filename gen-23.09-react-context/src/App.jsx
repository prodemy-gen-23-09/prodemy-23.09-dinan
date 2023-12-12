import Footer from "./Layouts/Footer"
import Header from "./Layouts/Header"
import { CartProvider } from "./context/CartContext"
import DetailProduct from "./pages/DetailProduct"
import ListProduct from "./pages/ListProduct"
import { Routes, Route, Navigate } from "react-router-dom"
import ShoopingCart from "./pages/ShoopingCart"

function App() {
  return (
    <div className="flex flex-col gap-y-12">
      <Header />
      <CartProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ListProduct />} />
          <Route path="/productDetail/:id" element={<DetailProduct />} />
          <Route path="/shoppingCart" element={<ShoopingCart />} />
        </Routes>
      </CartProvider>
      <Footer />
    </div>
  )
}

export default App
