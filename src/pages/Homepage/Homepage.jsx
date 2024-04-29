import React from 'react'
import StarterComponent from '../../components/starterComponent/StarterComponent'
import BestSeller from '../../components/bestSellers/BestSeller'
import MidComponent from '../../components/midComponent/MidComponent'
import Speakers from '../../components/speakers/Speakers'
import Footer from '../../components/footer/Footer'
import NeckBands from '../../components/neckbands/NeckBands'

const Homepage = () => {
  return (
    <div className='min-h-screen'>
        <StarterComponent />
        <BestSeller />
        <MidComponent />
        <Speakers />
        <NeckBands />
    </div>
  )
}

export default Homepage
