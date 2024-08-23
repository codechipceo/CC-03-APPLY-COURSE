import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import CountUp from "react-countup";

const StaticsCard = ({ count, text }) => {
  const theme = useTheme();

  return (
    <Box mx={2}>
      <Typography
        sx={{
          typography: theme.typography.heading2,
          color: "#4B28D8",
        }}
      >
        <CountUp end={count} enableScrollSpy duration={2} />+
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
