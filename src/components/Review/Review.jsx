import React from 'react'

const Review = () => {
  return (
    <div className='flex items-center gap-5'>
        <div className='flex flex-col'>
        <img src='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' alt='' className='w-[50px] h-[50px] rounded-full' />
        <span>userName</span>
        </div>
      <div className='flex items-center w-[60%] text-[grey] text-[15px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos architecto incidunt explicabo corrupti at, fuga dicta veritatis illum voluptatem dolore, cumque blanditiis voluptate consectetur beatae eum soluta!
      </div>
      <div className='flex text-sm'>
        {new Date().getTime().toLocaleString()}
      </div>
    </div>
  )
}

export default Review
