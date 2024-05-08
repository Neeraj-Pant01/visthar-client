import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoIosHelpCircle } from "react-icons/io";
import { MdFiberNew } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className='md:hidden fixed bottom-0 bg-[white] py-4 flex items-center justify-around w-full text-2xl'>
    <FaHome className='text-[black]' onClick={()=>navigate('/visthar')}/>
    <BiCategory className='text-[red]' onClick={()=>navigate('/products')}/>
    <IoIosHelpCircle className='text-[black]'/>
    <MdFiberNew className='text-[black]'/>
  </div>
  )
}

export default BottomNav
