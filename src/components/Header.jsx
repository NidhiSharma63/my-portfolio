import React,{useEffect,useState} from 'react';

const Navbar = () => {

  const [windowScroll,setWindowScroll] = useState(0)

  useEffect(()=>{
    const headerWrapper = document.querySelector('.header-wrapper');
    window.addEventListener('scroll',()=>{
      if(window.scrollY>40){
        setWindowScroll(window.scrollY);
        headerWrapper.style.boxShadow = '0px 10px 6px 0px rgba(202, 202, 202, 0.055)'
      }else{
        headerWrapper.style.boxShadow ='none'
      }
    })
  },[windowScroll])

  console.log(windowScroll)
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
            <li><a href="#Contact">contact me</a></li>
          </ul>
        </div>
      </div>    
    </div>
  )
}

export default Navbar;