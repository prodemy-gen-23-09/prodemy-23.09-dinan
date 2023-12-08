import Footer from "./Layouts/Footer"
import Header from "./Layouts/Header"
import DetailProduct from "./pages/DetailProduct"
import ListProduct from "./pages/ListProduct"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col gap-y-12">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ListProduct />} />
        <Route path="/productDetail/:id" element={<DetailProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
