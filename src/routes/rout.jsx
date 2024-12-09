
import { Route, Routes } from "react-router-dom"
import Header from "../Layout/Header/Header"
import Product from "../pages/Product/Product"
import Home from "../pages/home/Home"




const MainComponent = () => {
  return (
    <div>
        <Header/>
    <Routes>
      <Route path="/products" element={<Product />} />
      <Route path="/" element={<Home />} />
    </Routes>
  




    </div>
  )
}

export default MainComponent