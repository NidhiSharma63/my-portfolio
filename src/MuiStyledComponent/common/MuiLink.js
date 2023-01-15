import theme from "assets/scss/export.module.scss";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";
/**
 * Custom Header
 */
export const MuiLink = styled(Link)(() => ({
  textDecoration: "none",
  color: theme.secondary,
  fontFamily: theme.ffSecondary,
  fontSize: "var(--fs-sm)",
}));
