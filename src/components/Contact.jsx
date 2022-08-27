import React from 'react';
import Form from './Form';

const Contact = () => {
  return (
    <div className='container-6'>
      <div className="contact-wrapper">
        <div className="top-section">
          <p>let's talk</p>
        </div>
        <Form/>
        <div className="bottom-section">
          <div className="gmail">
           <i class="fa-solid fa-envelope"></i>
           <p>nidhisharma639593@gmail.com</p>
          </div>
          <div className='contact-icons'>
            <a href="">
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="">
             <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Contact;