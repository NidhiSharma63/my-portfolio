import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { HeaderContainer, Header } from "MuiStyledComponent/Header/Header";
import { BlackLogo } from "MuiStyledComponent/common/Logo";
import { MuiLink } from "MuiStyledComponent/common/MuiLink";
import theme from "assets/scss/export.module.scss";

const Navbar = () => {
  const [windowScroll, setWindowScroll] = useState(0);

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
    <HeaderContainer className="header-wrapper">
      <Header className="header">
        <BlackLogo variant="h3">Nidhi</BlackLogo>

        <Stack direction="row" spacing={5} alignItems="center">
          <MuiLink href="#Home">Home</MuiLink>

          <MuiLink href="#About">About</MuiLink>

          <MuiLink href="#Work">Work</MuiLink>

          <MuiLink to="/blogs">Blogs</MuiLink>

          <Button
            href="#Contact"
            variant="contained"
            color="secondary"
            sx={{
              "&:hover": {
                backgroundColor: theme.primary,
                borderColor: theme.secondary,
                color: theme.textPrimary,
              },
            }}
          >
            contact me
          </Button>
        </Stack>
      </Header>
    </HeaderContainer>
  );
};

export default Navbar;

{
  /* <i className="fa-solid fa-bars" onClick={showMobileNav}></i>
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
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <a href="#Contact" onClick={hideMobileNav}>
                contact me
              </a>
            </li>
          </ul>
        </div>
      </div> */
}
