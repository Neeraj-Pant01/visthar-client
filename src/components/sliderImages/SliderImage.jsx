import React from 'react'
import { useNavigate } from 'react-router-dom'

const SliderImage = () => {
  const navigate = useNavigate()
  return (
    // <div className='flex flex-col items-center justify-center w-[300px]'>
    //   <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585' alt='' />
    //   <span className='md:text-lg font-semibold text-center'>CategoryName </span>
    // </div>
    <div className='flex flex-col items-center justify-center md:min-w-[250px] md:max-w-[250px] w-[150px]' onClick={()=>navigate(`/products?cat=watch`)}>
      <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585' alt='' style={{ width: '100%' }} className='md:rounded-xl rounded-xl'/>
      <span className='md:text-lg font-semibold text-center text-[rgba(0,0,0,0.9)]'>Watches</span>
    </div>
  )
}

export default SliderImage
