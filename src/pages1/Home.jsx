import Header from "../components/Header";
import { Box, Typography, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes1/routes";
import Footer from "./help";
const Components = styled(Box)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  margin: "0 140px",
  "&>div": {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > p ": {
      fontSize: 56,
      fontWeight: 550,
      linHeight: 1.25,
      letterSpacing: -1,
    },
    "& > button": {
      width: 220,
      background: "#EB1165",
      height: 60,
      textTransform: "none",
      fontSize: 17,
      fontWeight: 700,
      marginTop: 48,
    },
  },
});
const Home = () => {
  const navigate = useNavigate();
  const AnimatedImg =
    "https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-4735567-3985908.png";
  return (
    <div>
      <Header />
      <Components>
        <Box>
          <Typography> We make you future ready for Growth</Typography>
          <Button
            variant="contained"
            onClick={() => navigate(routhPath.create)}
          >
            Explore opportunities
          </Button>
        </Box>
        <Box>
          <img src={AnimatedImg} alt="home" style={{ width: 650 }} />
        </Box>
      </Components>
      <Footer />
    </div>
  );
};

export default Home;
