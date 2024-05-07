import React, { useEffect } from 'react'
import CartItem from '../../components/cartItem/CartItem'

const Cart = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='min-h-screen md:px-16 py-10 relative'>
      <h1 className='text-3xl text-[rgba(0,0,0,0.7)] my-5 text-center'>YOUR CART ITEMS</h1>
      <div className='flex flex-col md:flex-row gap-10'>
      <div className='flex flex-col px-4 md:px-0 gap-4 md:flex-[1.7]'>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      </div>
      <div className='right md:flex-1 sticky top-[200px] h-[400px] border rounded-lg mx-4 md:mx-0 flex flex-col px-8 py-8 gap-3'>
      <div className='flex items-center justify-between md:text-xl'>
          <span>Total Items</span>
          <span>9</span>
        </div>
        <div className='flex items-center justify-between md:text-xl'>
          <span>Cart Total</span>
          <span>₹ 1999</span>
        </div>
        <div className='flex items-center justify-between border-b-[4px] border-dotted pb-5 md:text-xl'>
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className='flex items-center justify-between md:text-xl'>
          <span>To Pay</span>
          <span>₹ 1999</span>
        </div>
        <button className='py-2 rounded-lg text-[white] bg-[rgba(0,0,0,0.8)] mt-8'>Chekout</button>
      </div>
      </div>
      <div className='fixed flex items-center justify-center py-2 bottom-1 w-[100%]'>
        <div className='flex items-center border bg-[white] py-2 md:w-[40%] w-[80%] rounded-lg px-2 shadow-lg'>
          <div className='flex justify-center items-center flex-1 text-center'>
            <span className='text-xl font-bold'>₹ 1999</span>
          </div>
          <div className='flex items-center rounded-lg bg-[goldenrod] justify-center flex-1 text-[white] py-2 cursor-pointer'>Confirm Order</div>
        </div>
      </div>
    </div>
  )
}

export default Cart
