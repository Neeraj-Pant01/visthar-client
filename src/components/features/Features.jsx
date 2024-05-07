import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { LuReplace } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";

const f= [
    {
        icon:<FaShieldAlt />,
        title: "Product Warrenty",
        color:"green"
    },
    {
        icon:<LuReplace />,
        title: "7 day Replcement",
        color:"maroon"
    },
    {
        icon: <FaTruck />,
        title:"Delivery Service",
        color:"lightblue"
    },
    {
        icon:<IoNewspaperSharp />,
        title:"GST Billing",
        color:"goldenrod"
    }
]

const Features = () => {
  return (
    <div className='flex items-center justify-center md:gap-16 my-20 md:flex-nowrap flex-wrap gap-5'>
        {
            f.map((f,i)=>{
                return (
                    <div className='flex w-[30%] md:w-auto flex-col items-center gap-2 cursor-pointer justify-center' key={i}>
                        <span style={{color:`lightgrey`}} className='md:text-7xl text-6xl font-bold'>{f.icon}</span>
                        <span className='md:text-xl text-[12px] text-center text-[black]'>{f.title}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Features
