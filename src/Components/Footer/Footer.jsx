import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <img src="./footer-logo.svg" alt="" />
      </div>
      <div className="contact">
        <h1>Contact Us</h1>
        <p className='address'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
        <p className='email'>example2020@gmail.com</p>
        <p>(904) 443-0343</p>

      </div>
      <div className="links">
        <h4>More</h4>
        <p>About Us</p>
        <p>Product</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className="social-links">
        <h4>Social Links</h4>
      
      <div className="icons">
      <FontAwesomeIcon icon={faInstagram}  />
      <FontAwesomeIcon icon={faTwitter}  />
      <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <div className="copy">
       <p> © 2022 Food Truck Example</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer