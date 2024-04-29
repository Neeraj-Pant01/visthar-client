import React from 'react'
import Product from './Product'

const BestSeller = () => {
  return (
    <div className='flex flex-col md:px-10'>
      <div className='flex items-center gap-2 my-5'>
        <span className='text-3xl'>Best</span>
        <span className='text-3xl font-semibold'>Sellers</span>
      </div>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_1000D_a4b7d95f-5ce0-459a-a148-9bd5d175445c.jpg?v=1699419321"}/>
      </div>
    </div>
  )
}

export default BestSeller
