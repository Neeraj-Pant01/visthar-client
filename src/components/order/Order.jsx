import React from 'react'

const Order = () => {
  return (
    <div className='flex items-center border rounded-lg py-3 px-5 justify-between md:w-auto w-[90%]'>
      <img src='https://media.istockphoto.com/id/626428378/photo/wireless-portable-speaker.jpg?s=612x612&w=0&k=20&c=zfEmfKGQRKSatPzKyT7mqZzBJQfl_965qerjQnH0LVs=' className='md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-lg' alt='' />
      <div className='flex flex-col items-center text-[grey] md:text-[16px] text-[12px]'>
        <span>ProductName</span>
        <span>Deliverd On : 1/05/2024</span>
        <span>Price : 1999</span>
      </div>
      <div className='flex'>
        <div className='flex md:flex-row flex-col md:gap-2 md:text-[16px] text-[12px]'>
            <span className='font-semibold'>Order Status : </span>
            <span className='font-semibold text-[green]'>Delivered</span>
        </div>
      </div>
    </div>
  )
}

export default Order
