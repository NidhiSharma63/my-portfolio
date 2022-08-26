import React from 'react';

const Navbar = () => {
  return (
    <div className='header-wrapper'>
      <div className="header">
        <div className="logo">
          <p>Nidhi</p>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Work">work</a></li>
            <li><a href="#Contact">contact</a></li>
          </ul>
        </div>
      </div>    
    </div>
  )
}

export default Navbar;