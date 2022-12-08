import React from 'react'
import FeaturedProducts from '../Components/FeaturedProducts'
import Slider from '../Components/Slider'

export default function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
      
    </div>
  )
}
