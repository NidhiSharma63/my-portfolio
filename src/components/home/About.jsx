import React, { useEffect } from "react";
import aboutImg from "assets/images/Edited/my4.jpg";
import { translateAnim } from "assets/js/main";
import { Grid, Box, Typography } from "@mui/material";
import theme from "assets/scss/export.module.scss";

let container2 = {
  selector: "container-2",
  classes: "translate-up",
};
const About = () => {
  // useEffect(() => {
  //   translateAnim(container2);
  // }, []);
  return (
    <Grid
      margin="auto"
      container
      id="About"
      spacing={2}
      paddingRight={2}
      paddingBottom={2}
      sx={{
        width: { sm: "90%", md: "100%" },
      }}
      boxShadow="0px 0px 10px 0px rgba(153, 151, 151, 0.205)"
    >
      <Grid
        item
        xs={12}
        sm={4}
        overflow="hidden"
        sx={{
          maxHeight: { md2: "600px", sm: "700px", xs: "500px" },
        }}
      >
        <Box
          component="img"
          sx={{ objectFit: "contain" }}
          width="100%"
          height="100%"
          src={aboutImg}
          alt="about"
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          backgroundColor="rgba(155, 155, 155, 0.288)"
          box-shadow=" 0px 0px 15px 0px rgba(131, 131, 145, 0.288"
          padding={3}
        >
          <Typography
            variant="h3"
            fontSize="var(--fs-xl)"
            fontFamily={theme.ffPrimary}
            color={theme.textSecondary}
            marginTop="1rem"
          >
            About me
          </Typography>
          <Typography
            fontSize="var(--fs-sm)"
            fontFamily={theme.ffSecondary}
            color={theme.textSecondary}
            marginTop="1rem"
            sx={{
              width: { xs: "80%", sm: "80%" },
              textAlign: { xs: "center", sm: "flex-start" },
            }}
          >
            As a programmer, I am driven by a desire to create and innovate. I
            am a self-taught developer who has spent the past year learning
            programming through online resources and projects. I am currently
            interning at a software company, where I am gaining practical
            experience and developing my skills further. In the future, I hope
            to use my programming skills to make a difference in the world and
            help solve important problems. I am deeply spiritual and devoted to
            my nation and Hinduism, and these values guide my work ethic and
            inspire me to always give my best effort.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
