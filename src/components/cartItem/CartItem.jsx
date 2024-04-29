import React, { useState } from 'react'

const CartItem = () => {
    const [quantity, setQuantity] = useState(1)

    const increase = () =>{
        if(quantity < 10){
            setQuantity(quantity + 1)
        }
    }

    const decrease = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
  return (
    <div className='flex py-2 px-3 border items-center gap-20 rounded-lg'>
      <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/121v2.png?v=1701427775' alt='' className='w-[150px] h-[150px] rounded-lg' />
      <div className='flex flex-col'>
        <span className='text-2xl font-semibold'>ProductName</span>
        <div className='flex items-center text-xl font-semibold'>
            ₹ 1999
        </div>
        <div className='flex items-center justify-between mt-5 md:gap-40'>
            <div className='flex w-max bg-[#e3e9ef] py-1 px-2 rounded-lg'>
                colorname
            </div>
            <div className='flex items-center border rounded-lg px-1 bg-[#e3e9ef]'>
                <button className='py-1 px-1 w-[50px] bg-transparent font-semibold' onClick={decrease}>-</button>
                <span className='w-[50px] text-center font-semibold bg-[white] text-xl'>{quantity}</span>
                <button className='py-1 px-1 w-[50px] bg-transparent font-semibold' onClick={increase}>+</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
