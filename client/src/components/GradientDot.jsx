import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

const GradientDot = ({ w, h, radius }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: w,
        height: h,
        borderRadius: radius,
        background: theme.gradients.primaryGradient,
      }}
    ></Box>
  );
};

export default GradientDot;
