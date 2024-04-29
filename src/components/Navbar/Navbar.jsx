import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import { MdOutlinePerson2 } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='flex z-50 bg-[white] h-[80px] border py-4 px-10 items-center justify-between sticky top-0 md:gap-20'>
        <div className='flex cursor-pointer items-center justify-center md:text-3xl font-semibold w-fit'>
            VISTHAR
        </div>
        <div className='hidden md:flex gap-10 md:text-[18px] text-[rgba(0,0,0,0.8)] flex-[2]'>
            <div className='flex items-center gap-2'>
                Categories <IoIosArrowDown className='cursor-pointer'/>
            </div>
            <div className='flex items-center'>
                All Products
            </div>
            <div className='flex items-center'>
                Orders
            </div>
            <div className='flex items-center'>
                Trending Products
            </div>
            <div className='flex items-center gap-2'>
                More <IoIosArrowDown className='cursor-pointer'/>
            </div>
        </div>
        <div className='flex items-center gap-4 flex-1'>
            <div className='hidden md:flex items-center bg-[#edecec] px-4 py-2 rounded-lg gap-1'>
                <AiOutlineSearch className='md:text-xl'/>
                <input type='text' className='outline-none bg-[transparent] md:w-[250px]' placeholder='search an item'/>
            </div>
            <MdOutlinePerson2 className='text-2xl'/>
            <IoBagOutline className='text-2xl'/>
        </div>
    </div>
  )
}

export default Navbar
