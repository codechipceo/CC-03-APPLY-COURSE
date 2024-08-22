import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import backgroundImg from "@/assets/home/storiesBackground.png";

const StoriesContainer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        m: 5,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        color: "#fff",
        p: 3,
        px: 8,
      }}
    >
      <Typography
        sx={{
          typography: {
            md: theme.typography.heading2,
            xs: theme.typography.heading3,
          },
        }}
      >
        Our
        <br /> Success Stories
      </Typography>
    </Box>
  );
};

export default StoriesContainer;
