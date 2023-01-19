import React, { useEffect } from "react";
import { Grid, Typography, Box, Button, Stack } from "@mui/material";
import { GridContainer } from "MuiStyledComponent/herobanner/herobanner";
import mainImg from "assets/images/Edited/my1.jpg";
import theme from "assets/scss/export.module.scss";
import { translateAnim } from "assets/js/main";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

let Image = {
  selector: "right-section",
  classes: "translate-right",
};
const Herobanner = () => {
  useEffect(() => {
    translateAnim(Image);
  }, []);

  return (
    <GridContainer
      spacing={2}
      container
      id="Home"
      sx={{ mt: { xs: "10rem", sm: "10rem" } }}
      marginBottom={"3rem"}
    >
      {/* <div className="left-shadow"></div> */}
      {/* <div className="hero-banner-wrapper"> */}
      <Grid item xs={12} sm={6} display="flex" alignItems="center">
        <Box
          mt={-10}
          display="flex"
          flexDirection="column"
          // alignItems="center"
          // textAlign="center"
          sx={{
            alignItems: { xs: "center", sm: "flex-start" },
          }}
          margin="auto"
          // border="1px solid red"
        >
          <Typography
            fontSize={"var(--fs-md)"}
            fontFamily={theme.ffPrimary}
            color={theme.textTertiary}
          >
            Hii, I Am
          </Typography>
          <Typography
            fontSize="var(--fs-xl)"
            fontFamily={theme.ffPrimary}
            color={theme.textSecondary}
            marginTop="1rem"
          >
            Nidhi Sharma
          </Typography>
          <Typography
            fontSize="var(--fs-sm)"
            fontFamily={theme.ffSecondary}
            color={theme.textSecondary}
            marginTop="1rem"
            sx={{
              width: { xs: "80%", sm: "100%" },
              textAlign: { xs: "center", sm: "flex-start" },
            }}
          >
            A frontend developer who turns imagination into reality by using
            code and loves to listen to music 
          </Typography>
          <Box display="flex" gap="10px" mt="5rem">
            <Button href="#Work" variant="contained" color="secondary">
              Checkout my work
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="https://drive.google.com/file/d/1iCy2lPL_2r80uX0ej2DbIU6dS6AhB0P1/view?usp=sharing"
              target="blank"
            >
              Get resume
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} className="right-section translate-right">
        <Box
          component="div"
          display="flex"
          overflow="hidden"
          sx={{
            maxHeight: { xs: "550px", sm: "400px", md: "600px" },
          }}
        >
          <Box
            component="img"
            src={mainImg}
            style={{ margin: "auto", marginTop: "-5rem" }}
            alt="It's me"
            sx={{ width: { xs: "60%", sm: "80%" }, objectFit: "contain" }}
          />
        </Box>
        <Stack direction={"row"} justifyContent="center">
          <IconButton
            target="blank"
            href="https://medium.com/@nidhisharma639593"
            sx={{ fontSize: "3rem", color: `${theme.textSecondary}` }}
          >
            <i className="fa-brands fa-medium"></i>
          </IconButton>
          <IconButton target="blank" href="https://github.com/NidhiSharma63">
            <GitHubIcon
              sx={{ fontSize: "3rem", color: `${theme.textSecondary}` }}
            />
          </IconButton>
          <IconButton
            target="blank"
            href="https://www.linkedin.com/in/nidhi-sharma-55329823b/"
          >
            <LinkedInIcon
              sx={{ fontSize: "3rem", color: `${theme.textSecondary}` }}
            />
          </IconButton>
          <IconButton target="blank" href="https://twitter.com/NidhiSh57914602">
            <TwitterIcon
              sx={{ fontSize: "3rem", color: `${theme.textSecondary}` }}
            />
          </IconButton>
        </Stack>
      </Grid>
      {/* </div> */}
    </GridContainer>
  );
};

export default Herobanner;
