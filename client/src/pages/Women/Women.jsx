import GradientButton from "@/components/Buttons/GradientButton";
import JoinUs from "@/components/JoinUs";
import MyAppBar from "@/components/TopBar/AppBar";
import useStyle from "@/hooks/useStyle";
import { useTools } from "@/hooks/useTools";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import bgVideo from "../../assets/studydiploma_1.mp4";
import Help from "../Home/HowWeHelp/Help";
import StoriesContainer from "../Home/Stories/StoriesContainer";
import { AboutWomen } from "./AboutWomen";



export const Women = () => {
  const { theme } = useStyle();
  const { navigate } = useTools();

  return (
    <div>
      <MyAppBar logoImg={"logoImg"} />

      <Box
        sx={{
          height: "100vh", // Full-screen height or adjust as needed
          position: "relative", // Allows for the overlay
          overflow: "hidden",
        }}
      >
        <Container>
         
          <Box display={"flex"} alignItems={"center"} height={"60vh"}>
            <Box>
              <Typography
                sx={{
                  typography: {
                    md: theme.typography.heading2,
                    xs: "h4",
                  },
                  fontWeight: theme.typography.fontWeightBold,
                  color: "#fff",
                }}
              >
                Empowering Canadian <br />
                Women Through Education
              </Typography>
              <Box>
                <GradientButton
                  variant='contained'
                  buttonText={"Explore Programs"}
                  sx={{
                    color: "white",
                    background: theme.gradients.primaryGradient,
                    fontWeight: "bold",
                  }}
                  handleClick={() => navigate("/students")}
                ></GradientButton>
              </Box>
            </Box>
          </Box>
        </Container>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={bgVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Container>
        <AboutWomen />
        <Help />
        <StoriesContainer />
        <JoinUs />
      </Container>
    </div>
  );
};
