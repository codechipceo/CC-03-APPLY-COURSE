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
    <Box>
      <Box sx={{ py: { md: 6 }, position: "relative", my: 6 }}>
        <Box
          sx={{ display: { md: "block", xs: "none" } }}
          height="300px"
          position="absolute"
          left={10}
          top={22}
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
            pb: 4,
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
            }}
          >
            <Typography
              sx={{
                typography: theme.typography.heading3,
                color: "#fff",

                p: 2,
              }}
            >
              Our experts are here to support you every step of the way
            </Typography>
            <GradientButton buttonText="Get Started" style={{ boxShadow: 0 }} />
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <MyImg img={plane} />
          </Box>
        </Box>
        <Box
          sx={{ display: { md: "block", xs: "none" } }}
          height="350px"
          position="absolute"
          right={2}
          top={-30}
        >
          <MyImg img={plane} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
