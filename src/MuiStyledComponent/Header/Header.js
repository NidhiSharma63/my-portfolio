import colors from "assets/scss/export.module.scss";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

/**
 * Custom Header
 */
export const HeaderContainer = styled(Box)(() => ({
  width: "100%",
  // height: "9rem",
  zIndex: 10,
  backgroundColor: colors.primary,
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
  width: "100%",
  zIndex: 10,
  backgroundColor: colors.primary,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0rem 2rem",
  maxWidth: "1440px",
}));
