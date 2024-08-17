import React from "react";
import { Typography, Box } from "@mui/material";
import MyImg from "@/components/MyImg";

const ChooseUsCard = ({ img, text }) => {
  return (
    <Box textAlign="center">
      <Typography>
        <MyImg img={img} />
      </Typography>
      <Typography fontWeight="bold">{text}</Typography>
    </Box>
  );
};

export default ChooseUsCard;
