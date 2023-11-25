import React from 'react'
import "./Offers.css"
import exclusiveImg from "../../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h2>Exclusive</h2>
            <h2>Offers for You</h2>
            <p>Only on Selected Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusiveImg} alt="" />
        </div>
    </div>
  )
}

export default Offers