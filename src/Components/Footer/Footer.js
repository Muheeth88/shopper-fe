import React from 'react'
import "./Footer.css"
import footer_logo from "../../Assets/logo_big.png"
import instaIcon from "../../Assets/instagram_icon.png"
import pintrestIcon from "../../Assets/pintester_icon.png"
import whatsappIcon from "../../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Locations</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons">
            <div className="icons-container">
                <img src={instaIcon} alt="" />
            </div>
            <div className="icons-container">
                <img src={pintrestIcon} alt="" />
            </div>
            <div className="icons-container">
                <img src={whatsappIcon} alt="" />
            </div>
        </div>
        <div className='copyright'>
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer