import React from 'react'
import "./style.css"
import {useNavigate} from "react-router-dom"

const Product = ({img}) => {
    const navigate = useNavigate()
  return (
    // <div className='border flex flex-col rounded-lg md:w-[340px] md:min-w-[340px] md:max-w-[340px] min-w-[250px] max-w-[250px] bg-[#f4f1f1] mb-5'>
            <div className='border flex flex-col rounded-lg md:w-[340px] w-[160px] bg-[#f9f9f9] mb-5'>
        <div className='flex relative md:items-start md:justify-normal items-center justify-center'>
        <img src={img} alt=''className='b-round md:w-[100%] md:h-[350px] w-[100%]'/>
        <div className='absolute bottom-[-15px] flex items-center justify-center w-[100%]'>
            <button className='bg-[#fcc50b] w-[70%] py-1 md:px-10 text-[10px] md:text-[16px] rounded-lg font-semibold' onClick={()=>navigate(`/product/123`)}>
                Deal Title
            </button>
        </div>
        </div>
        <div className='flex items-center justify-between md:flex-row flex-col'>
        <div className='flex flex-col md:py-7 mt-4 md:mt-0 px-5 flex-1'>
            <div className='flex font-semibold text-sm md:text-[16px] text-center md:items-start md:justify-start items-center justify-center'>ProductName</div>
            <div className='flex items-center gap-2 md:items-start md:justify-start items-center justify-center'>
                <span className='font-semibold'>₹999</span>
                <span className='text-[darkred] line-through'>₹1299</span>
            </div>
            <div className='flex font-semibold text-[green] md:items-start md:justify-start items-center justify-center'>
                70% OFF
            </div>
        </div>
        <div className='flex items-center justify-center mt-3 border flex-1 mb-2'>
                <button className='py-2  md:py-3 px-4 md:w-[94%] w-[100%] md:px-5 md:text-[16px] text-xs bg-[rgba(0,0,0,0.8)] text-[white] rounded-lg' onClick={()=>navigate(`/cart`)}>Add TO Cart</button>
            </div>
            </div>

    </div>
  )
}

export default Product
