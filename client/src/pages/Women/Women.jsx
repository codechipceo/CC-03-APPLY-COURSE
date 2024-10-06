import { Box, Container } from "@mui/system";
import React from "react";
import bgVideo from "../../assets/studydiploma_1.mp4";
import MyAppBar from "@/components/TopBar/AppBar";
import { Button, Typography } from "@mui/material";
import useStyle from "@/hooks/useStyle";
import { useTools } from "@/hooks/useTools";
import Help from "../Home/HowWeHelp/Help";
import { AboutWomen } from "./AboutWomen";
import ServicesCard from "../Home/Services/ServicesCard";
import StoriesContainer from "../Home/Stories/StoriesContainer";
import JoinUs from "@/components/JoinUs";

export const Women = () => {
  const { theme } = useStyle();
  const { navigate } = useTools();

  return (
    <div>
      <Box
        sx={{
          height: "100vh", // Full-screen height or adjust as needed
          position: "relative", // Allows for the overlay
          overflow: "hidden",
        }}
      >
        <Container>
          <Box mt={5}>
            <MyAppBar logoImg={"logoImg"} />
          </Box>
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
                <Button
                  variant='contained'
                  sx={{
                    color: "white",
                    background: theme.gradients.primaryGradient,
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    navigate("/students");
                  }}
                >
                  Explore Programs
                </Button>
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
