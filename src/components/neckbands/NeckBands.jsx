import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'
import Product from '../bestSellers/Product'
import "./style.css"

const NeckBands = () => {
  return (
    <div className='neckband-bg flex flex-col'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 items-center justify-end'>
            <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/Noise_Sense_pic_3_1200x768.png' alt='' className='w-[90%] h-[90%] rounded-3xl rotate-[25deg]' />
        </div>
        <div className='flex flex-col justify-center flex-1 md:h-screen'>
            <div className='flex items-center justify-end gap-2 px-20'>
                <span className='text-8xl'></span>
                <span className='text-8xl font-semibold text-end'>NeckBands</span>
            </div>
            <div className='flex items-center justify-end gap-2 px-20'>
                <span className='text-4xl'>Starting from</span>
                <span className='text-4xl font-semibold'>₹999</span>
            </div>
            <div className='flex px-20 justify-end mt-4'>
                <button className='bg-[black] text-[white] py-2 px-6 rounded-lg flex items-center gap-2'>Shop Products <FaCircleArrowRight /></button>
            </div>
        </div>
      </div>
      <div className='flex items-center gap-2 md:px-16 my-3'>
            <span className='text-3xl'>Best</span>
            <span className='text-3xl font-semibold'>Sellers</span>
        </div>
      <div className='flex items-center justify-center gap-5'>
        <Product img={"https://www.jiomart.com/images/product/original/rvgjws9ya7/jetbot-bullets-wireless-z-bass-edition-neckband-headphone-with-40-hr-playtime-bluetooth-headset-blue-in-the-ear-product-images-orvgjws9ya7-p598365533-2-202302140412.png?im=Resize=(420,420)"}/>
        <Product img={"https://www.jiomart.com/images/product/original/rvgjws9ya7/jetbot-bullets-wireless-z-bass-edition-neckband-headphone-with-40-hr-playtime-bluetooth-headset-blue-in-the-ear-product-images-orvgjws9ya7-p598365533-2-202302140412.png?im=Resize=(420,420)"}/>
        <Product img={"https://www.jiomart.com/images/product/original/rvgjws9ya7/jetbot-bullets-wireless-z-bass-edition-neckband-headphone-with-40-hr-playtime-bluetooth-headset-blue-in-the-ear-product-images-orvgjws9ya7-p598365533-2-202302140412.png?im=Resize=(420,420)"}/>
        <Product img={"https://www.jiomart.com/images/product/original/rvgjws9ya7/jetbot-bullets-wireless-z-bass-edition-neckband-headphone-with-40-hr-playtime-bluetooth-headset-blue-in-the-ear-product-images-orvgjws9ya7-p598365533-2-202302140412.png?im=Resize=(420,420)"}/>
      </div>
    </div>
  )
}

export default NeckBands
