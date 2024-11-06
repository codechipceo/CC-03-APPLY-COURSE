import { Button, Container } from "@mui/material";
import MyAppBar from "@/components/TopBar/AppBar";
import logoImg from "@/assets/img/newlogo.png";
import posterImg from "@/assets/students/posterImg.png";
import SearchCard from "./SearchCard";
import useStyle from "@/hooks/useStyle";
import mainBennerBg from "@/assets/home/mainBanner01.png";
import { useNavigate } from "react-router-dom";
const StudentMainPoster = () => {
  const { theme, Box, Typography, MyImg } = useStyle();
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mainBennerBg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",

          pb: { md: 10, xs: 10 },
          position: "relative",
        }}
      >
        <MyAppBar logoImg={logoImg} />
        <Container>
          <SearchCard />


        </Container>
      </Box>
      {/* <Container
        sx={{
          position: "relative",
          bottom: { md: 200, xs: 130 },
        }}
      >
        <MyImg img={posterImg} />
        <SearchCard />
      </Container> */}
      <Box sx={{ height: { xs: 320, md: 0 } }} />
    </Box>
  );
};

export default StudentMainPoster;
