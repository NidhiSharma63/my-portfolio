import theme from "assets/scss/export.module.scss";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

/**
 * Custom Header Container
 */
export const ButtonContainer = styled(Button)(() => ({
  variant: "contained",
  color: "secondary",
  "&:hover": {
    backgroundColor: theme.primary,
    borderColor: theme.secondary,
    color: theme.textPrimary,
  },
}));
