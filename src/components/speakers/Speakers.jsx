import React from 'react'
import "./style.css"
import Product from '../bestSellers/Product'
import { FaCircleArrowRight } from 'react-icons/fa6'

const Speakers = () => {
  return (
    <div className='bg-speaker flex flex-col mt-6 md:mt-0'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col justify-center flex-1 md:h-screen'>
            <div className='flex flex-col md:flex-row items-center md:gap-2 md:px-8'>
                <span className='md:text-8xl text-4xl'>Wireless</span>
                <span className='md:text-8xl text-5xl font-semibold'>Speakers</span>
            </div>
            <div className='flex md:px-10 items-center gap-2 md:justify-normal justify-center'>
                <span className='md:text-4xl text-xl'>Starting from</span>
                <span className='md:text-4xl font-semibold text-xl'>₹1699</span>
            </div>
            <div className='flex md:px-10 justify-center md:justify-normal'>
                <button className='bg-[black] text-[white] py-2 px-6 rounded-lg flex items-center gap-2'>Shop Products <FaCircleArrowRight /></button>
            </div>
        </div>
        <div className='flex flex-1 items-center justify-center md:justify-normal mt-4 md:mt-0 mb-5 md:mb-0'>
            <img src='https://img.freepik.com/premium-photo/watch-with-black-face-black-face_905510-5596.jpg?w=740' alt='' className='w-[70%] h-[70%] rounded-3xl' />
        </div>
      </div>
      <div className='flex items-center flex-wrap w-[90%] md:w-auto md:self-auto self-center justify-center md:gap-5 gap-2'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281"}/>
      </div>
    </div>
  )
}

export default Speakers
