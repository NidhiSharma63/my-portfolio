import React,{ useEffect } from 'react';
import aboutImg from '../assets/images/about.svg'
import { translateAnim } from '../assets/js/main';

const About = () => {

  let container2 = {
    selector:'container-2',
    classes:'translate-up'
  }
  useEffect(()=>{
    translateAnim(container2);
  },[]);
  return (
    <div className='container-2 translate-up' id='About'>
      <div className="about-wrapper">
        <div className="left-section">
          <p>About me</p>
          <img src={aboutImg} alt="about" />
        </div>
        <div className="right-section">
          <div className="top-shadow"></div>
          <div className="bottom-shadow"></div>
          <p>I am a self-taught front-end web developer from India with a great passion for creating beautiful, responsive websites. Currently, I am looking for an internship and want to help businesses.</p>
        </div>
      </div>
    </div>
  )
}

export default About;