import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import CountUp from "react-countup";
import { GradientText } from "@/components/GradientText/GradientText";

const StaticsCard = ({ count, text }) => {
  const theme = useTheme();

  return (
    <Box mx={2}>
      {/* <GradientText variant='p' gutterBottom fontSize={48}>
        <CountUp end={count} enableScrollSpy duration={2} />+
      </GradientText> */}

      <Typography variant='p' gutterBottom fontSize={"28px"} fontWeight={700} color={"#092E56"}>
        <CountUp end={count} enableScrollSpy duration={2} />+
      </Typography>

      <Typography sx={{ typography: theme.typography.p ,}}>
        {text}
      </Typography>
    </Box>
  );
};

export default StaticsCard;
