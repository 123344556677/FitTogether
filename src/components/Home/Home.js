import DynamicCarousel from 'components/DynamicCarousel/Carousel';
import './Home.css';
import React from 'react'
import { exerciseItems } from 'assets/Mock_Data/CarouselData';
import { dietPlanItems } from 'assets/Mock_Data/CarouselData';

const Home = () => {
  return (
    <div className='pt-5 pt-md-8 mb-3'>
    <h1 className='mt-2 ml-4 home-headings'>Exercises</h1>
    <div className='p-3'>
     <DynamicCarousel height="450px" borderRadius="30px" items={exerciseItems} />
    </div>
     <h1 className='mt-2 ml-4'>Diet Plans</h1>
    <div className='p-3'>
     <DynamicCarousel height="450px" borderRadius="30px" items={dietPlanItems}/>
    </div>
    </div>
  )
}

export default Home