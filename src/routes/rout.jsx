
import { Route, Routes } from "react-router-dom"
import Header from "../Layout/Header/Header"
import Product from "../pages/Product/Product"


const MainComponent = () => {
  return (
    <div>
        <Header/>
        <Routes>
      <Route path="/products" element={<Product />} />
 
    </Routes>

    </div>
  )
}

export default MainComponent