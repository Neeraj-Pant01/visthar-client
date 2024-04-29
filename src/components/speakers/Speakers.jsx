import React from 'react'
import "./style.css"
import Product from '../bestSellers/Product'
import { FaCircleArrowRight } from 'react-icons/fa6'

const Speakers = () => {
  return (
    <div className='bg-speaker flex flex-col'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col justify-center flex-1 md:h-screen'>
            <div className='flex items-center gap-2 md:px-8'>
                <span className='text-8xl'>Wireless</span>
                <span className='text-8xl font-semibold'>Speakers</span>
            </div>
            <div className='flex md:px-10 items-center gap-2'>
                <span className='text-4xl'>Starting from</span>
                <span className='text-4xl font-semibold'>₹1699</span>
            </div>
            <div className='flex md:px-10'>
                <button className='bg-[black] text-[white] py-2 px-6 rounded-lg flex items-center gap-2'>Shop Products <FaCircleArrowRight /></button>
            </div>
        </div>
        <div className='flex flex-1 items-center'>
            <img src='https://img.freepik.com/premium-photo/watch-with-black-face-black-face_905510-5596.jpg?w=740' alt='' className='w-[70%] h-[70%] rounded-3xl' />
        </div>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
      </div>
    </div>
  )
}

export default Speakers
