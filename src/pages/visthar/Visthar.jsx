import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Category from '../../components/categories/Category'
import Product from '../../components/bestSellers/Product'
import SliderImage from '../../components/sliderImages/SliderImage'
import "./style.css"
import Features from '../../components/features/Features'
import { shopcategories } from '../../data'
import CargerPoster from '../../components/posters/CargerPoster'
import PowerBank from '../../components/posters/PowerBank'

const images = [
  "https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352",
    "https://www.boat-lifestyle.com/cdn/shop/files/Stone_Majestic_HP_Banner_WEB_1600x.jpg?v=1714287029",
    "https://www.boat-lifestyle.com/cdn/shop/files/IPL_HP_Banner_WEB_1_1440x.jpg?v=1712576793"
]

const Visthar = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

    const [index, setIndex] = useState(0)

    const movePrev = () =>{
        if(index > 0 ){
            setIndex(index-1)
        }else{
            setIndex(images.length - 1)
        }
    }

    const moveNext = () =>{
        if(index < images.length - 1){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }

  return (
    <div className='min-h-screen'>
      <div className='flex relative md:h-screen h-[360px]'>
        <AiOutlineArrowLeft className='absolute md:text-4xl text-3xl top-[50%] left-5 bg-[grey] rounded-full text-[white] cursor-pointer' onClick={movePrev}/>
        <img src={images[index]} alt='' className='w-[100%]' />
        <AiOutlineArrowRight className='absolute md:text-4xl top-[50%] right-5 text-3xl bg-[grey] rounded-full text-white cursor-pointer'onClick={moveNext}/>
      </div>
      <div className='flex md:text-3xl mt-10 gap-2 md:px-8 items-center justify-center mb-4'>
        <span className='text-[grey]'>Shop By</span><span className='font-semibold'>Categories</span>
      </div>
      <div className='flex flex-wrap md:px-8 md:mt-9 md:mb-9 md:gap-9 items-center justify-center gap-3 mb-10'>
        {
          shopcategories.map((c,i)=><Category c={c} key={i} />)
        }
      </div>
      <div className='flex md:px-8 justify-center items-center gap-4 md:mt-20 w-[100%] flex-wrap'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049"} />
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917"} />
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-255-Max.jpg?v=1682579854"} />
      </div>
      {/* <div className='flex md:px-8 justify-center items-center gap-4 md:mt-20 w-[98%] self-center border ml-auto mr-auto overflow-x-scroll'>
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
      </div> */}
      <div className='flex md:hidden md:px-8 px-10 mt-6 font-semibold md:text-2xl text-lg mb-2'>Shop For LifeStyle</div>
<div className='flex md:hidden flex-wrap md:flex-nowrap md:px-8 justify-center items-center gap-4 md:mt-20 w-[98%] self-center ml-auto mr-auto md:overflow-x-scroll scrollbar-hd mb-20 md:my-24'>
    <SliderImage />
    <SliderImage />
    <SliderImage />
    <SliderImage />
    <SliderImage />
    <SliderImage />
</div>

<CargerPoster />

<div className='flex flex-col md:px-8 md:mt-9 md:mb-9 md:gap-4'>
    <span className='md:text-4xl font-semibold px-7'>Exclusively for You</span>
    <div className='flex justify-center items-center gap-4 w-[100%] flex-wrap'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049"} />
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917"} />
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-255-Max.jpg?v=1682579854"} />
      </div>
</div>

<Features />

<div className='flex flex-col md:px-8 md:mt-9 md:mb-9 md:gap-4'>
    <span className='md:text-4xl font-semibold px-7'>Explore Whats New Here</span>
    <div className='flex justify-center items-center gap-4 w-[100%] flex-wrap'>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745"}/>
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049"} />
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917"} />
        <Product img={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-255-Max.jpg?v=1682579854"} />
      </div>
</div>

<PowerBank />
    </div>
  )
}

export default Visthar
