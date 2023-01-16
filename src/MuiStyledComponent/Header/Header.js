import theme from "assets/scss/export.module.scss";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

/**
 * Custom Header Container
 */
export const HeaderContainer = styled(Box)(() => ({
  width: "100%",
  zIndex: 10,
  backgroundColor: theme.primary,
  position: "fixed",
  top: 0,
  bottom: "auto",
  left: "0%",
  right: "auto",
  padding: "1.5rem 1rem",
}));

/**
 * Custom Header
 */
export const Header = styled(Box)(() => ({
  zIndex: 10,
  backgroundColor: theme.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0rem 2rem",
  maxWidth: "1440px",
  margin: "auto",
}));
