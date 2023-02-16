import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about'>

<div className="main-section">
<div className="left-img">
<img src="./about.png" alt="" />
</div>

<div className="right-text">

<h2>About Us</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>

<button className='about-btn'>Read More</button>
</div>

</div>

    </section>
  )
}

export default About