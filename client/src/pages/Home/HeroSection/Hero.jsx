import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import MyImg from "@/components/MyImg";
import earth from "@/assets/earth.png";
import plane from "@/assets/plane.png";
import GradientButton from "@/components/Buttons/GradientButton";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: { md: 10 }, position: "relative", my: 8 }}>
      <Box
        sx={{ display: { md: "block", xs: "none" } }}
        height="300px"
        position="absolute"
        left={10}
        top={60}
      >
        <MyImg img={earth} />
      </Box>
      <Box
        className="background"
        sx={{
          display: { md: "flex", xs: "block" },
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: { md: "20px" },
        }}
      >
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <MyImg img={earth} />
        </Box>
        <Box
          justifyItems="center"
          //   width="600px"
          sx={{
            justifyItems: "center",
            width: { md: "600px" },
            mb: 5,
          }}
        >
          <Typography
            sx={{
              typography: theme.typography.heading3,
              color: "#fff",
              mt: 4,
            }}
          >
            Our experts are here to support you every step of the way
          </Typography>
          <GradientButton buttonText="Get Started" />
        </Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <MyImg img={plane} />
        </Box>
      </Box>
      <Box
        sx={{ display: { md: "block", xs: "none" } }}
        height="350px"
        position="absolute"
        right={10}
        top={10}
      >
        <MyImg img={plane} />
      </Box>
    </Box>
  );
};

export default Hero;
