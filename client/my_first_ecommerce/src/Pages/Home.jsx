import React from 'react'
import Categoties from '../Components/Categoties'
import Contact from '../Components/Contact'
import FeaturedProducts from '../Components/FeaturedProducts'
import Slider from '../Components/Slider'

export default function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categoties/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}
