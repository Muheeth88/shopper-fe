import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h2>Get Exclusive offers on Email</h2>
        <p>Subscribe to our News Letter and stay updated</p>
        <div>
            <input type="email" placeholder='Your email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter