import React from 'react'
import PopularRoutesSlider from './PopularRoutesSlider'

const PopularRoutesSection = () => {
  return (
    <div className='popular-section-container'>
    <h1><b>Popular Routes</b></h1>
    <p>Popular Destinations Open To Most Visitors From Dubai</p>
    <div className='popular-slider' style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}><PopularRoutesSlider /></div>
    </div>
  )
}

export default PopularRoutesSection