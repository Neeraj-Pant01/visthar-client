import React from 'react'
import Product from './Product'

const BestSeller = () => {
  return (
    <div className='flex flex-col md:px-10'>
      <div className='flex items-center gap-2 px-4 md:px-0 my-5'>
        <span className='md:text-3xl text-xl'>Best</span>
        <span className='md:text-3xl text-xl font-semibold'>Sellers</span>
      </div>
      <div className='flex md:flex-wrap md:self-auto self-center md:gap-5 gap-2 items-center justify-center md:w-auto flex-wrap'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
      </div>
    </div>
  )
}

export default BestSeller
