import React from 'react';
import Form from './Form';

const Contact = () => {
  return (
    <div className='container-6' id='Contact'>
      <div className="contact-wrapper">
        <div className="top-section">
          <p>let's talk</p>
        </div>
        <Form/>
        <div className="bottom-section">
          <div className="gmail">
           <i className="fa-solid fa-envelope"></i>
           <p>nidhisharma639593@gmail.com</p>
          </div>
          <div className='contact-icons'>
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

export default Contact;