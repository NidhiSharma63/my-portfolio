import APP_ENDPOINTS from "constant/App_And_Point";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [windowScroll, setWindowScroll] = useState(0);
  const navigate = useNavigate();

  const showMobileNav = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = "flex";
  };

  const hideMobileNav = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = "none";
  };

  useEffect(() => {
    const headerWrapper = document.querySelector(".header-wrapper");
    const AddBoxShadowToNav = () => {
      if (window.scrollY > 40) {
        setWindowScroll(window.scrollY);
        headerWrapper.style.boxShadow =
          "0px 10px 6px 0px rgba(202, 202, 202, 0.055)";
      } else {
        headerWrapper.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", AddBoxShadowToNav);
    return () => {
      window.removeEventListener("scroll", AddBoxShadowToNav);
    };
  }, [windowScroll]);

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo">
          <p>Nidhi</p>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Work">work</a>
            </li>
            <li>
              <Link to={APP_ENDPOINTS.Blogs}>Blogs</Link>
            </li>
            <li>
              <a href="#Contact">contact me</a>
            </li>
          </ul>
        </div>
        <i className="fa-solid fa-bars" onClick={showMobileNav}></i>
        <div className="mobile-nav">
          <i className="fa-solid fa-xmark" onClick={hideMobileNav}></i>
          <div className="mobile-link">
            <ul>
              <li>
                <a href="#Home" onClick={hideMobileNav}>
                  Home
                </a>
              </li>
              <li>
                <a href="#About" onClick={hideMobileNav}>
                  About
                </a>
              </li>
              <li>
                <a href="#Work" onClick={hideMobileNav}>
                  work
                </a>
              </li>
              <li>
                <Link to={APP_ENDPOINTS.Blogs}>Blogs</Link>
              </li>
              <li>
                <a href="#Contact" onClick={hideMobileNav}>
                  contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
