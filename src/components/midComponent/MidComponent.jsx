import React from 'react'
import "./style.css"
import { FaCircleArrowRight } from "react-icons/fa6";
import Product from '../bestSellers/Product';

const MidComponent = () => {
  return (
    <div className='bg flex flex-col'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 items-center justify-end'>
            <img src='https://img.freepik.com/premium-photo/watch-with-black-face-black-face_905510-5596.jpg?w=740' alt='' className='w-[70%] h-[70%] rounded-3xl' />
        </div>
        <div className='flex flex-col justify-center flex-1 md:h-screen'>
            <div className='flex items-center justify-center gap-2'>
                <span className='text-8xl'>Smart</span>
                <span className='text-8xl font-semibold'>Watches</span>
            </div>
            <div className='flex items-center justify-end gap-2 px-20'>
                <span className='text-4xl'>Starting from</span>
                <span className='text-4xl font-semibold'>₹1699</span>
            </div>
            <div className='flex px-20 justify-end mt-4'>
                <button className='bg-[black] text-[white] py-2 px-6 rounded-lg flex items-center gap-2'>Shop Products <FaCircleArrowRight /></button>
            </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
      </div>
    </div>
  )
}

export default MidComponent
