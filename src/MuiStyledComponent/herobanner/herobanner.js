import theme from "assets/scss/export.module.scss";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

/**
 * Custom Header Container
 */
export const GridContainer = styled(Grid)(() => ({
  marginTop: "10rem",
}));

/**
 * Custom Header
 */
// export const Header = styled(Box)(() => ({
//   zIndex: 10,
//   backgroundColor: theme.primary,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   padding: "0rem 2rem",
//   maxWidth: "1440px",
//   margin: "auto",
// }));
