import React from 'react'

const colors = ['red', 'black', 'blue', 'green', 'yellow', 'orange']

const ColorPicker = () => {
  return (
    <div className='flex gap-4'>
      {
        colors.map((c,i)=>{
            return (
                <div className={`flex w-[30px] h-[30px] rounded-full bg-[${c}]`} key={i}></div>
            )
        })
      }
    </div>
  )
}

export default ColorPicker
