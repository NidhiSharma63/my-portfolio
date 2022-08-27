import React from 'react';

import mainImg from '../assets/images/main-img.svg'

const herobanner = () => {
  return (
    <div className='wrapper-1' id='Home'>
      <div className="left-shadow"></div>
      <div className="hero-banner-wrapper">
        <div className="left-section">
          <p>Hy, I Am</p>
          <p>Nidhi Sharma</p>
          <p>A frontend developer who turns imagination into reality by using code and loves to listen to music </p>
          <button>
            <a href="#Work">checkout my work</a>
          </button>
        </div>
        <div className="right-section">
          <img src={mainImg} alt="image" />
          <div className='hero-icons'>
            <a href="https://github.com/NidhiSharma63">
              <i className="fa-brands fa-square-github"></i>
            </a>
           <a href="https://www.linkedin.com/in/nidhi-sharma-55329823b/">
            <i className="fa-brands fa-linkedin"></i>
           </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default herobanner