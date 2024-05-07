import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/footer/Footer'
import Products from './pages/allProducts/Products'
import SingleProduct from './pages/singleproduct/SingleProduct'
import Cart from './pages/cart/Cart'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Orders from './pages/myOrders/Orders'
import Visthar from './pages/visthar/Visthar'


const Layout = () =>{
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children : [
        {
          path: "/",
          element : <Homepage />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path : "/products",
          element : <Products />
        },
        {
          path : "/product/:id",
          element : <SingleProduct />
        },
        {
          path: "/visthar",
          element: <Visthar />
        },
        {
          path : "/cart",
          element : <Cart />
        }
      ]
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/register",
      element : <Register />
    }
  ])
  return <RouterProvider router={router} />
}

export default App
