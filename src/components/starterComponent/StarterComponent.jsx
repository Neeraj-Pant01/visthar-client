import React from 'react'
import "./style.css"
import { FaCircleArrowRight } from "react-icons/fa6";

const StarterComponent = () => {
  return (
    <div className='starter flex flex-col md:flex-row min-h-screen'>
      <div className='flex flex-1 flex-col md:h-screen items-center md:items-start h-[100px] justify-end md:justify-center gap-5'>
        <div className='flex flex-col w-max px-10'>
        <span className='md:text-7xl text-4xl'>Discover Quality</span>
        <span className='md:text-7xl font-bold text-4xl text-center md:text-left'>HeadPhones</span>
        </div>
        <div className='flex md:text-3xl text-xl items-center w-max px-10 gap-3'>
        from just <span className='font-bold'> ₹999</span>
        </div>
        <div className='flex items-center w-max px-10'>
            <button className='bg-[black] text-white flex py-2 px-4 items-center justify-center gap-3 rounded-lg'>
                Shop Products <FaCircleArrowRight />
            </button>
        </div>
      </div>
      <div className='flex flex-1 md:justify-normal md:h-screen justify-center'>
        <img src='headphone2.png' className='w-[98%] md:w-[90%]' alt='' />
      </div>
    </div>
  )
}

export default StarterComponent
