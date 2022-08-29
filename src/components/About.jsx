import React from 'react';
import aboutImg from '../assets/images/about.svg'

const About = () => {
  return (
    <div className='container-2' id='About'>
      <div className="about-wrapper">
        <div className="left-section">
          <p>About me</p>
          <img src={aboutImg} alt="about" />
        </div>
        <div className="right-section">
          <div className="top-shadow"></div>
          <div className="bottom-shadow"></div>

          <p>I am a self-taught frontend web-developer from india with a great passion of creating beautiful responsive websites. currently,I am looking for internship and want to help business.</p>
        </div>
      </div>
    </div>
  )
}

export default About;