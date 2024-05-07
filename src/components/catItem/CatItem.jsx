import React from 'react'
import { useNavigate } from 'react-router-dom'

const CatItem = ({c}) => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center gap-2 cursor-pointer rounded-lg px-3 py-2 hover:bg-[#f0fbff]' onClick={()=>navigate(`/products?cat=${c.title}`)}>
      <img src={c.img} className='w-[40px] h-[40px]'/>
      <span className='text-md'>{c.title}</span>
    </div>
  )
}

export default CatItem
