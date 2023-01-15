import theme from "assets/scss/export.module.scss";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

/**
 * Custom BlackLogo
 */
export const BlackLogo = styled(Typography)(() => ({
  fontFamily: theme.ffPrimary,
  color: theme.secondary,
}));

/**
 * Custom WhiteLogo
 */
export const WhiteLogo = styled(Typography)(() => ({
  fontFamily: theme.ffPrimary,
  color: theme.white,
}));
