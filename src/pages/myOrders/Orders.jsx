import React from 'react'
import Order from '../../components/order/Order'

const Orders = () => {
  return (
    <div className='min-h-screen md:px-16 mt-8'>
      <div className='flex items-center md:font-semibold text-2xl text-[grey] justify-center mb-4'>
        Your Orders
      </div>
      <div className='flex flex-col md:w-[70%] ml-auto mr-auto gap-5'>
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
