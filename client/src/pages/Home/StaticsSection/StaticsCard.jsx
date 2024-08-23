import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import CountUp from "react-countup";
import { GradientText } from "@/components/GradientText/GradientText";

const StaticsCard = ({ count, text }) => {
  const theme = useTheme();

  return (
    <Box mx={2}>
      <GradientText variant="p" gutterBottom fontSize={48}>
        <CountUp end={count} enableScrollSpy duration={2} />+
      </GradientText>

      <Typography sx={{ typography: theme.typography.heading4 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default StaticsCard;
