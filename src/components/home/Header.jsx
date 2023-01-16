import React, { useEffect, useState } from "react";
import { Stack, IconButton } from "@mui/material";
import { HeaderContainer, Header } from "MuiStyledComponent/Header/Header";
import { BlackLogo } from "MuiStyledComponent/common/Logo";
import theme from "assets/scss/export.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import NavLinks from "components/home/components/Header/NavLinks";

const Navbar = () => {
  const [windowScroll, setWindowScroll] = useState(0);

  const [mobileNav, setMobileNav] = useState(false);

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
    <HeaderContainer className="header-wrapper" padding={0}>
      <Header padding={0}>
        <BlackLogo variant="h3">Nidhi</BlackLogo>

        <Stack
          alignItems="center"
          direction="row"
          spacing={8}
          top="0"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          {<NavLinks mobileNav={mobileNav} />}
        </Stack>
        {mobileNav ? (
          <Stack
            alignItems="center"
            direction="column"
            spacing={8}
            top="0"
            left="0"
            height="100vh"
            position="fixed"
            width="100%"
            backgroundColor="rgba(32, 32, 32, 0.952)"
            justifyContent="center"
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            {<NavLinks mobileNav={mobileNav} />}
            <IconButton
              sx={{
                display: {
                  xs: `${mobileNav === true ? "flex" : "none"}`,
                  sm: "none",
                },
                position: "absolute",
                right: "5rem",
                top: "-8rem",
              }}
              onClick={() => {
                setMobileNav(false);
              }}
            >
              <CloseIcon sx={{ fontSize: "5rem", color: theme.primary }} />
            </IconButton>
          </Stack>
        ) : null}
        <IconButton
          sx={{
            display: {
              sm: "none",
              xs: `${mobileNav === true ? "none" : "flex"}`,
            },
          }}
          onClick={() => {
            setMobileNav(true);
          }}
        >
          <MenuIcon sx={{ fontSize: "4rem" }} />
        </IconButton>
      </Header>
    </HeaderContainer>
  );
};

export default Navbar;
