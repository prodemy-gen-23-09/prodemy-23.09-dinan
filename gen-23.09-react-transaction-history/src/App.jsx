import Footer from "./Layouts/Footer"
import Header from "./Layouts/Header"
import { CartProvider } from "./context/CartContext"
import DetailProduct from "./pages/DetailProduct"
import ListProduct from "./pages/ListProduct"
import { Routes, Route, Navigate } from "react-router-dom"
import ShoopingCart from "./pages/ShoopingCart"
import Login from "./pages/Login"
import AdminPage from "./pages/AdminPage"
import PrivateRoutes from "./component/route/privateRoutes"
import GuestRoutes from "./component/route/GuestRoutes"
import AdminRoutes from "./component/route/AdminRoutes"
import Checkout from "./pages/Checkout"
import useSWR from "swr"
import { useSelector } from "react-redux"
import axios from "axios"
import TransactionHistoty from "./pages/TransactionHistory"

function App() {
  // const user = useSelector((state) => state.auth.user)
  // const getCart = (url) => axios.get(url).then((response) => response.data)
  // const { data, isLoading, error, mutate } = useSWR(`http://localhost:3000/cart?userId=${user.id}`, getCart)

  return (
    <div className="flex flex-col gap-y-12">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <ListProduct />
                  <Footer />
                </>
              }
            />
            <Route
              path="/productDetail/:id"
              element={
                <>
                  <Header />
                  <DetailProduct />
                  <Footer />
                </>
              }
            />
            <Route
              path="/shoppingCart"
              element={
                <>
                  <Header />
                  <ShoopingCart />
                  <Footer />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                  <Footer />
                </>
              }
            />
            <Route element={<AdminRoutes />}>
              <Route
                path="/adminPage"
                element={
                  <>
                    <Header />
                    <AdminPage />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/transactionHistoty"
                element={
                  <>
                    <Header />
                    <TransactionHistoty />
                    <Footer />
                  </>
                }
              />
            </Route>
          </Route>
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
