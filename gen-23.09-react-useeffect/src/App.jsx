import Footer from "./Layouts/Footer"
import Header from "./Layouts/Header"
import DetailProduct from "./pages/DetailProduct"
import ListProduct from "./pages/ListProduct"

function App() {
  return (
    <div className="flex flex-col gap-y-12">
      <Header />
      <ListProduct />
      <Footer />
    </div>
  )
}

export default App
