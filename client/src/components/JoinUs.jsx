import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import MyImg from "./MyImg";
import joinUsImg from "@/assets/joinUsImg.png";
import GradientButton from "./Buttons/GradientButton";
import star from "@/assets/star.png";
import GradientDot from "./GradientDot";

const JoinUs = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 5,
        px: 3,
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box sx={{ zIndex: 2, position: "relative" }}>
          <MyImg img={joinUsImg} />
          <GradientDot w="25px" h="25px" radius="20px" />
          {/* <Box sx={{ position: "absolute", right: -45, bottom: 50, zIndex: 1 }}>
            <GradientDot w="63px" h="63px" radius="40px" />
          </Box> */}
          <Typography sx={{ position: "absolute", top: 2, left: -20 }}>
            <MyImg img={star} />
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 3, px: { md: 15, xs: 2 } }}>
        <Typography
          sx={{
            typography: {
              md: theme.typography.heading3,
              xs: theme.typography.heading4,
            },
            fontWeight: "bold",
          }}
        >
          Join Largest learning platform today
        </Typography>
        <Typography
          sx={{
            mt: 2,
            typography: {
              md: theme.typography.heading4,
              xs: theme.typography.p,
            },
          }}
        >
          Start learning by registering for free
        </Typography>
        <Box sx={{ mt: 4 }}>
          <GradientButton buttonText="Contact Us" />
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUs;
