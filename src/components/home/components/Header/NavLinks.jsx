import { MuiLink } from "MuiStyledComponent/common/MuiLink";
import theme from "assets/scss/export.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
/**
 * render Links
 */

function NavLinks({ mobileNav }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blogs");
  };

  return (
    <>
      <MuiLink
        href="#Home"
        sx={{ color: `${mobileNav ? theme.primary : theme.textSecondary}` }}
      >
        Home
      </MuiLink>

      <MuiLink
        href="#About"
        sx={{ color: `${mobileNav ? theme.primary : theme.textSecondary}` }}
      >
        About
      </MuiLink>

      <MuiLink
        href="#Work"
        sx={{ color: `${mobileNav ? theme.primary : theme.textSecondary}` }}
      >
        Work
      </MuiLink>

      <MuiLink
        to="/blogs"
        sx={{ color: `${mobileNav ? theme.primary : theme.textSecondary}` }}
        onClick={handleClick}
      >
        Blogs
      </MuiLink>

      <Button
        href="#Contact"
        variant="contained"
        color="secondary"
        sx={{
          "&:hover": {
            backgroundColor: theme.primary,
            borderColor: theme.secondary,
            color: theme.textPrimary,
          },
        }}
      >
        contact me
      </Button>
    </>
  );
}

export default NavLinks;
