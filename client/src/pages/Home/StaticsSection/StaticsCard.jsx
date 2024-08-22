import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useTheme } from "@mui/material";

const StaticsCard = ({ count, text }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          typography: theme.typography.heading2,
          color: "#4B28D8",
        }}
      >
        <CountUp end={count} duration={5} />+
      </Typography>
      <Typography
        sx={{ typography: theme.typography.heading4, fontWeight: "bold" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default StaticsCard;
