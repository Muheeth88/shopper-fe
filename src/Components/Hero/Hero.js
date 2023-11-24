import React from 'react'
import "./Hero.css"
import hand_icon from "../../Assets/hand_icon.png"
import arrow_icon from "../../Assets/arrow.png"
import hero_img from "../../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals</h2>
            <div>
                <div className='hand-icon'>
                    <p>New</p>
                    <img src={hand_icon} alt='hand-icon here'></img>
                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>latest Collection</div>
                <img src={arrow_icon} alt="arrow icon here" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt="some img here" />
        </div>
    </div>
  )
}

export default Hero