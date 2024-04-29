import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/footer/Footer'
import Products from './pages/allProducts/Products'
import SingleProduct from './pages/singleproduct/SingleProduct'
import Cart from './pages/cart/Cart'

const App = () => {
  return (
    <>
    <Navbar />
    <Cart />
    {/* <Homepage /> */}
    {/* <Products /> */}
    {/* <SingleProduct /> */}
    <Footer />
    </>
  )
}

export default App
