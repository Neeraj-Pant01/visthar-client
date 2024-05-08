import React from 'react'
import StarterComponent from '../../components/starterComponent/StarterComponent'
import BestSeller from '../../components/bestSellers/BestSeller'
import MidComponent from '../../components/midComponent/MidComponent'
import Speakers from '../../components/speakers/Speakers'
import Footer from '../../components/footer/Footer'
import NeckBands from '../../components/neckbands/NeckBands'
import PowerBank from '../../components/posters/PowerBank'
import CargerPoster from "../../components/posters/CargerPoster"
import { useNavigate } from 'react-router-dom'
import BottomNav from '../../components/bottomNav/BottomNav'

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
        <BottomNav />
    </div>
  )
}

export default Homepage
