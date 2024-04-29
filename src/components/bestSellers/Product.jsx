import React from 'react'
import "./style.css"

const Product = ({img}) => {
  return (
    <div className='border flex flex-col rounded-lg md:w-[340px] bg-[#f4f1f1] mb-5'>
        <div className='flex relative'>
        <img src={img} alt=''className='b-round w-[100%] h-[350px]'/>
        <div className='absolute bottom-[-15px] flex items-center justify-center w-[100%]'>
            <button className='bg-[#fcc50b] w-[70%] py-1 px-10 rounded-2xl font-semibold'>
                Deal Title
            </button>
        </div>
        </div>
        <div className='flex flex-col py-7 px-5'>
            <div className='flex font-semibold'>ProductName</div>
            <div className='flex items-center gap-2'>
                <span className='font-semibold'>₹999</span>
                <span className='text-[grey] line-through'>₹1299</span>
            </div>
            <div className='flex font-semibold text-[green]'>
                70% OFF
            </div>
            <div className='flex items-center justify-center mt-3'>
                <button className='py-2 w-[94%] px-5 bg-[black] text-[white] rounded-xl'>Add TO Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product
