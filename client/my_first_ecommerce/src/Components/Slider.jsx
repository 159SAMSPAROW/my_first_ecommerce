import React from 'react'
import { useState } from 'react'

export default function Slider() {
 
 const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
    'https://media.istockphoto.com/id/496036167/fr/photo/style-avec-une-attitude-color%C3%A9.jpg?s=612x612&w=0&k=20&c=blUvk3HqBjqStC7d1w_f0lZJR9dFuDeU0aGeLzwtTB8=',
    'https://media.istockphoto.com/id/1034329768/fr/photo/belle-afro-jeunes-danses-latino-am%C3%A9ricaines-en-paillettes-robe.jpg?s=612x612&w=0&k=20&c=Ad8CHU--eB8snvSFDOKT7qdramdJWWM__OIcgh0xb_E=',
    'https://media.istockphoto.com/id/626856996/fr/photo/v%C3%AAtements-homme.jpg?s=612x612&w=0&k=20&c=6f-LbmDWd_Pe9xs_lUN1G_KSsp73x9mYGf0psZ_Zhxo=',
  ]

  const prevSlide =()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1);
  }
  const nextSlide =()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1);
  }

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <i className="fa-regular fa-arrow-left-long"></i>
        </div>
        <div className="icon" onClick={nextSlide}>
          <i class="fa-regular fa-arrow-right-long"></i>
        </div>
      </div>
    </div>
  )
}
