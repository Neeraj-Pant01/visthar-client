import React from 'react'
import "./style.css"
import {useNavigate} from "react-router-dom"

const Product = ({img}) => {
    const navigate = useNavigate()
  return (
    // <div className='border flex flex-col rounded-lg md:w-[340px] md:min-w-[340px] md:max-w-[340px] min-w-[250px] max-w-[250px] bg-[#f4f1f1] mb-5'>
            <div className='border flex flex-col rounded-lg md:w-[340px] w-[160px] bg-[#f4f1f1] mb-5'>
        <div className='flex relative md:items-start md:justify-normal items-center justify-center'>
        <img src={img} alt=''className='b-round md:w-[100%] md:h-[350px] w-[100%]'/>
        <div className='absolute bottom-[-15px] flex items-center justify-center w-[100%]'>
            <button className='bg-[#fcc50b] w-[70%] py-1 md:px-10 text-[10px] md:text-[16px] rounded-2xl font-semibold' onClick={()=>navigate(`/product/123`)}>
                Deal Title
            </button>
        </div>
        </div>
        <div className='flex flex-col md:py-7 py-5 px-5'>
            <div className='flex font-semibold text-sm md:text-[16px] text-center items-center justify-center'>ProductName</div>
            <div className='flex items-center gap-2 justify-center'>
                <span className='font-semibold'>₹999</span>
                <span className='text-[grey] line-through'>₹1299</span>
            </div>
            <div className='flex justify-center font-semibold text-[green]'>
                70% OFF
            </div>
            <div className='flex items-center justify-center mt-3'>
                <button className='py-2 md:py-3 px-2 md:w-[94%] w-[100%] md:px-5 md:text-[16px] text-xs bg-[black] text-[white] rounded-xl' onClick={()=>navigate(`/cart`)}>Add TO Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product
