import React from 'react'
import StarterComponent from '../../components/starterComponent/StarterComponent'
import BestSeller from '../../components/bestSellers/BestSeller'
import MidComponent from '../../components/midComponent/MidComponent'
import Speakers from '../../components/speakers/Speakers'
import Footer from '../../components/footer/Footer'
import NeckBands from '../../components/neckbands/NeckBands'
import PowerBank from '../../components/posters/PowerBank'
import CargerPoster from "../../components/posters/CargerPoster"
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoIosHelpCircle } from "react-icons/io";
import { MdFiberNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen relative'>
        <StarterComponent />
        <BestSeller />
        <MidComponent />
        <Speakers />
        <NeckBands />
        <CargerPoster />
        <BestSeller />
        <PowerBank />
        <div className='md:hidden fixed bottom-0 bg-[white] py-4 flex items-center justify-around w-full text-2xl'>
          <FaHome className='text-[black]' onClick={()=>navigate('/visthar')}/>
          <BiCategory className='text-[red]' onClick={()=>navigate('/products')}/>
          <IoIosHelpCircle className='text-[black]'/>
          <MdFiberNew className='text-[black]'/>
        </div>
    </div>
  )
}

export default Homepage
