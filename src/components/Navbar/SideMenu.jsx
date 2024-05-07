import React, { useState } from 'react'
import { AiFillCloseSquare, AiOutlineClose } from 'react-icons/ai'
import Category from "../categories/Category"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { shopcategories } from '../../data';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const SideMenu = ({ setShowMenu }) => {
  const [showCat, setShowCat] = useState(false)
  const navigate = useNavigate();
  return (
    <div className='slideIn md:hidden flex flex-col fixed min-h-screen w-[70%] left-0 bg-[white] top-[50px] transition-all gap-5'>
      <div className='flex items-end justify-end'>
      </div>
      <div className='flex items-center justify-between px-4 font-semibold' onClick={() => setShowCat(!showCat)}>
        Categories
        {
          showCat ?
            <IoIosArrowUp onClick={() => setShowCat(false)} className='font-bold' />
            :
            <IoIosArrowDown onClick={() => setShowCat(true)} className='font-bold' />
        }
      </div>
      {
        showCat &&
        <div className='flex items-center justify-center gap-5 flex-wrap'>
          {
            shopcategories.map((c, i) => <Category c={c} key={i} setShowMenu={setShowMenu} />)
          }
        </div>
      }
      <div className='flex px-4 font-semibold' onClick={() =>{navigate(`/`)
        setShowMenu(false)
      }}>
        Explore Visthar
      </div>
      <div className='flex px-4 font-semibold' onClick={() =>{ navigate(`/cart`)
        setShowMenu(false)
      }}>
        My Cart
      </div>
      <div className='flex px-4 font-semibold'>
        Track Your Orders
      </div>
      <div className='flex px-4 font-semibold' onClick={() =>{ navigate('/orders')
        setShowMenu(false)
      }}>
        Your Orders
      </div>
      <div className='flex px-4 font-semibold'>
        More
      </div>
    </div>
  )
}

export default SideMenu
