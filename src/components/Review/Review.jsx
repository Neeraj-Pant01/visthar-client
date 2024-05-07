import React from 'react'

const Review = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:gap-5 gap-2'>
        <div className='flex md:flex-col w-[100%] md:w-auto items-center gap-2 md:gap-0'>
        <img src='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' alt='' className='w-[50px] h-[50px] rounded-full' />
        <span>userName</span>
        </div>
      <div className='flex items-center md:w-[60%] text-[grey] md:text-[15px] text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos architecto incidunt explicabo corrupti at, fuga dicta veritatis illum voluptatem dolore, cumque blanditiis voluptate consectetur beatae eum soluta!
      </div>
      <div className='md:flex hidden text-sm'>
        {new Date().getTime().toLocaleString()}
      </div>
    </div>
  )
}

export default Review
