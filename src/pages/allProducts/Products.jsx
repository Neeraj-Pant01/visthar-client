import React, { useEffect } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import Item from '../../components/item/Item';

const Products = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='flex md:px-12 px-2 flex-col min-h-screen'>
      <div className='flex text-sm text-[grey] items-center gap-2 h-[40px]'>
        <span className='cursor-pointer'>HOME</span>
        <MdOutlineKeyboardArrowRight />
        <span className='cursor-pointer'>CategoryName</span>
      </div>
      <div className='flex md:text-3xl text-xl font-semibold my-4'>
        CategoryName
      </div>
      <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2 bg-[#e6edf3] py-2 px-4 text-[14px] md:text-[16px] rounded-lg w-max font-semibold cursor-pointer'>
        <IoFilter /> Filter By <MdOutlineKeyboardArrowDown />
      </div>
      <div className='flex items-center gap-2 bg-[#e6edf3] py-2 px-4 rounded-lg w-max font-semibold cursor-pointer text-[14px] md:text-[16px]'>
        <BiSortAlt2 /> Sort By <span className='font-light'>Best Selling</span><MdOutlineKeyboardArrowDown />
      </div>
      </div>
      <div className='flex flex-wrap items-center justify-center md:flex-wrap gap-4 mt-8 mb-10'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Products
