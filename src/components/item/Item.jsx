import React from 'react'
import "./style.css"
import { AiFillStar } from 'react-icons/ai'

const Item = () => {
  return (
    <div className='flex w-[440px] py-2 bg-[#f4f0f0] rounded-lg px-1 cursor-pointer'>
      <div className='flex flex-[1.7] flex-col relative'>
        <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049' className='b-top-r w-[100%] h-[200px] b-top-r' alt='' />
        <div className='b-bottom-r items-center justify-center font-semibold text-center text-sm py-1 cursor-pointer bg-[#fcc50b]'>category quality</div>
      </div>
      <div className='flex justify-center flex-col flex-[2] pl-2'>
        <div className='flex items-center'>
        <AiFillStar className='text-[gold]' />
        <b>4.8</b>
        </div>
        <div className='flex items-center text-lg font-semibold'>
            ProductName 121
        </div>
        <div className='flex items-center gap-3'>
            <span className='font-semibold'>₹899</span>
            <span>₹1111</span>
            <span className='text-[green]'>70% OFF</span>
        </div>
        <hr className='bg-[#efecec] mt-3 h-[2px]'/>
        <div className='flex items-center justify-center mt-10' >
            <button className='py-2 w-[90%] rounded-lg bg-[black] text-[white]'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Item