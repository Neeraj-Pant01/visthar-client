import React from 'react'
import "./style.css"
import { FaCircleArrowRight } from "react-icons/fa6";
import Product from '../bestSellers/Product';

const MidComponent = () => {
  return (
    <div className='bg flex flex-col mt-6 md:mt-0'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 items-center md:justify-end justify-center'>
            <img src='https://img.freepik.com/premium-photo/watch-with-black-face-black-face_905510-5596.jpg?w=740' alt='' className='w-[70%] h-[70%] rounded-3xl' />
        </div>
        <div className='flex flex-col justify-center flex-1 md:h-screen'>
            <div className='flex md:flex-row flex-col items-center justify-center md:gap-2'>
                <span className='md:text-8xl text-4xl'>Smart</span>
                <span className='md:text-8xl text-5xl font-semibold'>Watches</span>
            </div>
            <div className='flex items-center md:justify-end justify-center gap-2 px-20'>
                <span className='md:text-4xl text-xl'>Starting from</span>
                <span className='md:text-4xl text-xl font-semibold'>₹1699</span>
            </div>
            <div className='flex px-20 justify-center md:justify-end md:mt-4 mb-5 md:mb-0'>
                <button className='bg-[black] text-[white] py-2 px-6 rounded-lg flex items-center gap-2'>Shop Products <FaCircleArrowRight /></button>
            </div>
        </div>
      </div>
      <div className='flex md:flex-wrap md:self-auto self-center md:gap-5 gap-2 items-center justify-center md:w-auto flex-wrap'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585"}/>
      </div>
    </div>
  )
}

export default MidComponent
