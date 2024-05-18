import React from 'react'
import './LandingPage.css'
import DynamicCarousel from 'components/DynamicCarousel/Carousel'
import { landingPageItems } from 'assets/Mock_Data/CarouselData'

const LandingPage = () => {
  return (
    <div className='mt-3'>
    <DynamicCarousel height="500px" borderRadius="0" items={landingPageItems} />
    </div>
  )
}

export default LandingPage