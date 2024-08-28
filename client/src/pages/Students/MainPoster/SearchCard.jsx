import GradientButton from "@/components/Buttons/GradientButton";
import { Box, Typography, useTheme } from "@mui/material";
import roboImg from "@/assets/students/roboSearch.png";

import TextField from "@mui/material/TextField";

import React from "react";
import MyImg from "@/components/MyImg";
import { borderRadius } from "@mui/system";

const SearchCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        my: { md: 10 },
        boxShadow: { md: 3, xs: "auto" },
        px: { md: 10, xs: 2 },
        py: 5,
        borderRadius: "20px",
        position: "absolute",
        bottom: { md: -200, xs: -180 },
        right: { md: "9%" },
        width: { md: "70%" },
      }}
    >
      <Typography
        sx={{
          typography: theme.typography.heading4,

          mb: 4,
          ml: 10,
          position: "relative",
        }}
      >
        <Typography
          variant="span"
          sx={{ position: "absolute", top: -120, left: -130 }}
        >
          <MyImg img={roboImg} />
        </Typography>
        Use our AI-powered platform to find your perfect program in seconds
      </Typography>

      <Box sx={{ display: { md: "flex" }, gap: 2 }}>
        <TextField
          id="outlined-basic"
          label="Search For the Program"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "35px",
              border: "none",
              boxShadow:
                "0px 4px 4px 0px rgba(74, 73, 73, 0.25) inset, 0px -4px 4px 0px rgba(74, 73, 73, 0.25) inset",
            },

            py: 0,
          }}
          fullWidth
        />
        <GradientButton
          buttonText="Search"
          styles={{
            borderRadius: "40px",
            px: 5,
            py: 0,
            mt: { sm: 2, xs: 2, md: 0 },

            width: {
              xs: "100%",
              sm: "100%",
              md: "auto",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchCard;
