import GradientButton from "@/components/Buttons/GradientButton";
import { Box, Typography, useTheme } from "@mui/material";
import roboImg from "@/assets/students/roboSearch.png";

import TextField from "@mui/material/TextField";

import React from "react";
import MyImg from "@/components/MyImg";

const SearchCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        my: { md: 10 },
        boxShadow: 3,
        px: { md: 10, xs: 2 },
        py: 5,
        borderRadius: "20px",
        position: "absolute",
        bottom: { md: -175 },
        right: { md: "9%" },
        width: { md: "70%" },
      }}
    >
      <Typography
        sx={{
          typography: theme.typography.heading4,
          fontWeight: "bold",
          mx: 3,
          mb: 4,
          ml: 10,
          position: "relative",
        }}
      >
        Use our AI-powered platform to find your perfect program in seconds
        <Typography sx={{ position: "absolute", top: -120, left: -130 }}>
          <MyImg img={roboImg} />
        </Typography>
      </Typography>

      <Box display="flex" gap={2}>
        <TextField
          id="outlined-basic"
          label="Search For the Program"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "35px", // Adjust the radius to make it more or less rounded
            },
          }}
          fullWidth
        />
        <GradientButton buttonText="Search" radius="40px" />
      </Box>
    </Box>
  );
};

export default SearchCard;