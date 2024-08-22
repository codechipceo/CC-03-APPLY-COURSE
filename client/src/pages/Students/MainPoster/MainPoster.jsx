import { Box, Container, Typography, useTheme } from "@mui/material";
import MyAppBar from "@/components/TopBar/AppBar";
import logoImg from "@/assets/img/logo.png";
import MyImg from "@/components/MyImg";
import posterImg from "@/assets/students/posterImg.png";
import SearchCar from "./SearchCard";

const MainPoster = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(284.12deg, #BF5AF2 10.41%, #615CE7 107.36%)",
          width: "100%",
          pt: 5,
          pb: { md: 20 },
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
            }}
          >
            Find Your Perfect Program
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          position: "absolute",
          bottom: { md: "-40%", xs: "330px" },
          right: { md: 150 },
        }}
      >
        <MyImg img={posterImg} />
        <SearchCar />
      </Container>
    </Box>
  );
};

export default MainPoster;
