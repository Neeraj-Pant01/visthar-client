import React from 'react'

const Order = () => {
  return (
    <div className='flex items-center border rounded-lg py-3 px-5 justify-between'>
      <img src='https://media.istockphoto.com/id/626428378/photo/wireless-portable-speaker.jpg?s=612x612&w=0&k=20&c=zfEmfKGQRKSatPzKyT7mqZzBJQfl_965qerjQnH0LVs=' className='md:w-[100px] h-[100px] rounded-lg' alt='' />
      <div className='flex flex-col items-center text-[grey] md:text-[16px] text-[14px]'>
        <span>ProductName</span>
        <span>Deliverd On : 1/05/2024</span>
        <span>Price : 1999</span>
      </div>
      <div className='flex'>
        <div className='flex md:flex-row flex-col gap-2'>
            <span className='font-semibold'>Order Status : </span>
            <span className='font-semibold text-[green]'>Delivered</span>
        </div>
      </div>
    </div>
  )
}

export default Order
