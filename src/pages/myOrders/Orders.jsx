import React, { useEffect } from 'react'
import Order from '../../components/order/Order'

const Orders = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='min-h-screen md:px-16 mt-8'>
      <div className='flex items-center md:font-semibold text-2xl text-[grey] justify-center md:mb-4 mb-2'>
        Your Orders
      </div>
      <div className='flex flex-col md:w-[70%] ml-auto mr-auto gap-5 items-center'>
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  )
}

export default Orders
