import React from 'react'
import './Landing.css'

const Landing = () => {
  return (
    
    <header className='landing-page'>
<div className="left-section">
<div className="logo">
    <img src="./logo.svg" alt="logo" />
</div>


<div className="main-text">
  <h1>Discover the <span>Best</span> Food and Drinks</h1>
  <p>Naturally made Healthcare Products for the better care & support of your body.</p>
</div>

<button className='explore'>Explore Now!</button>
</div>

<div className="right-section">
<img className='red-bg' src="./redbg.svg" alt="" />
<img className='pizza' src="./pizza.png" alt="" />

<div className="get-in-touch-btn">
  <button>Get In Touch</button>
</div>

</div>
    </header>

  )
}

export default Landing