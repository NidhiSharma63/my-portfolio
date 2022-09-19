import React,{useEffect} from 'react';

import mainImg from '../assets/images/main-img.svg';
import { translateAnim } from '../assets/js/main';

const Herobanner = () => {
  let Image = {
    selector:'right-section',
    classes:'translate-right'
  }

  let heroText = {
    selector:'left-section',
    classes:'translate-left'
  }
  
  useEffect(()=>{
    translateAnim(Image);
    translateAnim(heroText);
  },[])

  return (
    <div className='wrapper-1' id='Home'>
      <div className="left-shadow"></div>
      <div className="hero-banner-wrapper">
        <div className="left-section translate-left">
          <p>Hy, I Am</p>
          <p>Nidhi Sharma</p>
          <p>A frontend developer who turns imagination into reality by using code and loves to listen to music </p>
          <div className="hero-btn-wrapper">
          <button>
            <a href="#Work">Checkout my work</a>
          </button>
          <button>
            <a target='blank' href="https://drive.google.com/file/d/1iCy2lPL_2r80uX0ej2DbIU6dS6AhB0P1/view?usp=sharing">Get resume</a>
          </button>
          </div>
        </div>
        <div className="right-section translate-right">
          <img src={mainImg} alt="image" />
          <div className='hero-icons'>
            <a target='blank' href="https://medium.com/@nidhisharma639593">
              <i class="fa-brands fa-medium"></i>
            </a>
            <a target='blank' href="https://github.com/NidhiSharma63">
              <i className="fa-brands fa-square-github"></i>
            </a>
           <a target='blank' href="https://www.linkedin.com/in/nidhi-sharma-55329823b/">
            <i className="fa-brands fa-linkedin"></i>
           </a>
           <a target='blank' href="https://twitter.com/NidhiSh57914602">
             <i class="fa-brands fa-square-twitter"></i>
           </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herobanner