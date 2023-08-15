import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { routhPath } from "../routes1/routes";

const StyledAppBar = styled(AppBar)({
  background: "#8B1F4C",
  height: 80,
  "& > div > *": {
    textDecoration: "none",
    color: "inherit",
    marginRight: 50,
    fontSize: 20,
  },
});

const Header = () => {
  const logo =
    "https://assets.upstox.com/content/dam/aem-content-integration/assets/images/logos/AXISBANK/AXISBANK.png";
  return (
    <StyledAppBar>
      <Toolbar>
        <Link to={routhPath.home}>
          <img src={logo} alt="/logo" style={{ width: 80, marginBottom: 6 }} />
        </Link>
        <Link to={routhPath.create}> Job Description </Link>
        <Link to={routhPath.post}>Find the Job</Link>
        <Link to={routhPath.Cvrank}>CV ranking </Link>
        <Link to={routhPath.help}> Help </Link>
        <Link to={routhPath.about}> About </Link>
        <Link to={routhPath.contact}>Contact</Link>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
