import { Container } from "@mui/material";
import MyAppBar from "@/components/TopBar/AppBar";
import logoImg from "@/assets/img/logo.png";
import posterImg from "@/assets/students/posterImg.png";
import SearchCar from "./SearchCard";
import useStyle from "@/hooks/useStyle";

const MainPoster = () => {
  const { theme, Box, Typography, MyImg } = useStyle();

  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(284.12deg, #BF5AF2 10.41%, #615CE7 107.36%)",
          width: "100%",
          pt: 5,
          pb: { md: 20, xs: 10 },
          position: "relative",
        }}
      >
        <Container>
          <MyAppBar logoImg={logoImg} />
          <Typography
            sx={{
              typography: {
                md: theme.typography.StudentsPageHeading,
                xs: theme.typography.heading2,
              },
              color: "#fff",
              mx: "auto",
              px: 4,
              py: 10,
              textShadow: "0px 3px 2px #fff",
            }}
          >
            Find Your Perfect Program
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          position: "relative",
          bottom: { md: 200, xs: 130 },
        }}
      >
        <MyImg img={posterImg} />
        <SearchCar />
      </Container>
      <Box sx={{ height: { xs: 320, md: 0 } }} />
    </Box>
  );
};

export default MainPoster;
