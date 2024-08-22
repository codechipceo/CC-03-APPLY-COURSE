import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(45deg, #BF5AF2, #615CE7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: 600,
  // fontSize: 20,
}));
