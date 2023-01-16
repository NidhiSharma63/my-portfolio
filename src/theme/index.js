// override material-ui styles
import { createTheme } from "@mui/material/styles";
import theme from "assets/scss/export.module.scss";

export const mytheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    allVariants: {
      fontFamily: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(", "),
    },
    h5: {
      // use for navbar titles
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
    },
    caption: {
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
    },
    subtitle1: {
      fontWeight: 600,
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: "capitalize",
          borderRadius: 4,
          minHeight: 40,
          fontSize: "1.6rem",
          border: "2px solid",
        },

        containedPrimary: {
          color: theme.textSecondary,
          background: theme.primary,
          borderColor: theme.primary,
        },
        containedSecondary: {
          background: theme.secondary,
          borderColor: theme.secondary,

          color: theme.primary,
          minWidth: 36,
        },
        text: {
          color: theme.white,
          minWidth: 36,
        },
      },
    },
  },
});
