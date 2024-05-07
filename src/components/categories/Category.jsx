import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({c,setShowMenu}) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center cursor-pointer mb-4 max-w-max' onClick={()=>{navigate(`/products?cat=${c.title}`)
    setShowMenu && setShowMenu(false)
  }
    }>
      <img src={c.img} className='md:w-[50px] md:h-[50px] w-[40px] h-[40px]'/>
      <span className='md:text-lg text-center md:w-[100px] w-[60px] font-semibold text-xs'>{c.title}</span>
    </div>
  )
}

export default Category
