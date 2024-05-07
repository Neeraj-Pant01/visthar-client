import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { LuReplace } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";

const f= [
    {
        icon:<FaShieldAlt />,
        title: "Product Warrenty"
    },
    {
        icon:<LuReplace />,
        title: "7 day Replcement"
    },
    {
        icon: <FaTruck />,
        title:"Delivery Service"
    },
    {
        icon:<IoNewspaperSharp />,
        title:"GST Billing"
    }
]

const Features = () => {
  return (
    <div className='flex items-center justify-center md:gap-16 gap-2 my-20'>
        {
            f.map((f,i)=>{
                return (
                    <div className='flex flex-col items-center gap-2 cursor-pointer justify-center' key={i}>
                        <span className='md:text-7xl text-3xl font-bold text-[rgba(0,0,0,0.8)]'>{f.icon}</span>
                        <span className='text-[grey] font-semibold md:text-xl text-sm text-center'>{f.title}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Features
