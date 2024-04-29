import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillStar } from 'react-icons/ai';
import ColorPicker from '../../components/colorpicker/ColorPicker';
import Review from '../../components/Review/Review';

const images = [
    "https://www.boat-lifestyle.com/cdn/shop/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_600x.png?v=1625046216",
    "https://www.boat-lifestyle.com/cdn/shop/products/Storm-Red-FI-FK_0003_6_800x.png?v=1667907061",
    "https://www.boat-lifestyle.com/cdn/shop/products/Storm-Red-FI-FK_0004_5_800x.png?v=1667907061",
    "https://www.boat-lifestyle.com/cdn/shop/products/Storm-Red-FI-FK_0006_3_800x.png?v=1667907061",
    "https://www.boat-lifestyle.com/cdn/shop/products/Storm-Red-FI-FK_0007_2_800x.png?v=1667907061",
]

const SingleProduct = () => {
    const [currentindex, setCurrentIndex] = useState(0)
    const [starIndex, setStarIndex] = useState(0)

    const handleNext = (index) =>{
        if(index < images.length - 1){
            setCurrentIndex(currentindex + 1)
        }else{
            setCurrentIndex(0)
        }
    }

    const handlePrev = (index) =>{
        if(index > 0){
            setCurrentIndex(currentindex - 1)
        }else{
            setCurrentIndex(images.length-1)
        }
    }
    return (
        <div className='flex flex-col px-12 min-h-screen'>
            <div className='flex items-center text-[grey] text-sm gap-3 h-[50px]'>
                <span className='cursor-pointer'>Home</span ><MdKeyboardArrowRight />
                <span className='cursor-pointer'>Categories</span><MdKeyboardArrowRight />
                <span className='cursor-pointer'>ProductName</span>
            </div>
            <div className='flex mt-8 mb-10'>
                <div className='flex-1 flex sticky top-[100px] h-[640px] gap-5'>
                    <div className='flex flex-col w-[80px] gap-6'>
                        {
                            images.map((pic, i) => {
                                return (
                                    <img src={pic} alt='' className='rounded-lg border border-[black]' />

                                )
                            })
                        }
                    </div>
                    <div className='flex bg-[lightgrey] rounded-lg relative'>
                        <BsArrowLeftCircleFill className='absolute top-[50%] text-3xl cursor-pointer left-[10px] text-[rgba(0,0,0,0.6)]' onClick={()=>handlePrev(currentindex)}/>
                        <img src={images[currentindex]} alt='' />
                        <BsArrowRightCircleFill className='absolute right-[10px] top-[50%] text-[rgba(0,0,0,0.7)] text-3xl cursor-pointer' onClick={()=>handleNext(currentindex)}/>
                    </div>
                </div>
                <div className='flex-1 flex flex-col min-h-[1000px] px-5 gap-5'>
                    <div className='flex gap-3 items-center'>
                        <AiFillStar className='text-[gold] ' />
                        <span className='text-sm text-[grey]'>4.8</span>
                        |
                        <span className=''>1000 Reviews</span>
                    </div>
                    <div className='text-2xl font-semibold'>
                        ProductName
                    </div>
                    <div className='text-[grey]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus, sapiente hic temporibus saepe cupiditate autem deleniti quam at itaque!
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='text-xl'>₹1299</span>
                        <span className='line-through text-[grey]'>₹1599</span>
                        <span className='text-[green]'>75% OFF</span>
                    </div>
                    <div className='flex items-center font-semibold'>
                        Choose Your Color
                    </div>
                    <ColorPicker />
                    <div className='flex flex-col font-semibold mt-3'>
                        Check Delivery
                        <div className='flex py-4 flex-col bg-[#d2e2e8] px-8 w-max'>
                            <div className='flex items-center rounded-lg py-1 bg-[white] justify-between gap-8'>
                            <input type='text' placeholder='enter pin code' className='outline-none py-2 rounded-lg px-5' />
                            <button className='py-3 px-2 rounded-lg bg-[black] text-[white]'>Check Delivery</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='bg-[#000000db] py-2 px-5 text-[white] rounded-lg w-[50%]'>Add To Cart</button>
                    </div>

                    <div className='flex flex-col md: mt-10'>
                        <span className='text-xl'>CUSTOMER REVIEWS(10)</span>

                        <div className='flex flex-col'>
                            <span className='text-[grey] font-semibold text-xl mt-5'>Add a Review</span>
                            <textarea placeholder='add your review' className='py-4 px-5 h-[150px] outline-none border border-[black] resize-none rounded-lg w-[60%]'/>
                            <div className='flex gap-3 mt-4'>
                                {
                                    Array.from({length:5}).map((_,i)=>{
                                        return (
                                            <AiFillStar className='text-xl cursor-pointer' style={{color:`${i <= starIndex ? 'gold' : 'grey'}`}} onClick={()=>setStarIndex(i)}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='flex flex-col py-4 gap-5'>
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
