import { MuiLink } from "MuiStyledComponent/common/MuiLink";
import theme from "assets/scss/export.module.scss";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "MuiStyledComponent/common/button";
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

      <ButtonContainer variant="contained" color="secondary" href="#Contact">
        contact me
      </ButtonContainer>
    </>
  );
}

export default NavLinks;
