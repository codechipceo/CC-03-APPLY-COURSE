import { Button, Container } from "@mui/material";
import MyAppBar from "@/components/TopBar/AppBar";
import logoImg from "@/assets/img/newlogo.png";
import posterImg from "@/assets/students/posterImg.png";
import SearchCard from "./SearchCard";
import useStyle from "@/hooks/useStyle";
import mainBennerBg from "@/assets/home/mainBanner01.png";
const MainPoster = () => {
  const { theme, Box, Typography, MyImg } = useStyle();

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mainBennerBg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",

          pb: { md: 20, xs: 10 },
          position: "relative",
        }}
      >
        <MyAppBar logoImg={logoImg} />
        <Container>
          <Typography
            sx={{
              typography: {
                md: theme.typography.StudentsPageHeading,
                xs: "h4",
                textAlign: "center",
              },
              color: theme.palette.theme50,
              // mx: "auto",
              px: 4,
              pt: 10,
              pb: 5,
            }}
          >
            Your bright future is our mission
          </Typography>
          <Typography
            variant='h6'
            sx={{ color: "white", textAlign: "center", fontSize: "30px" }}
          >
            Find Your Preferred Courses & Improve Your Skills
          </Typography>
          <Button
            variant='contained'
            sx={{
              backgroundColor: theme.palette.theme50,
              color: "black",
              borderRadius: 0,
              fontWeight: "bold",
              mx: "auto",
              display: "flex",
              mt: 5,
              "&:hover": {
                backgroundColor: "transparent",
                border: "2px solid ",
                borderColor: theme.palette.theme50,
                color: theme.palette.theme50,
              },
            }}
          >
            {" "}
            Start Searching Today
          </Button>
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

export default MainPoster;
