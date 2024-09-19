import Card from "@mui/material/Card";
import EastIcon from "@mui/icons-material/East";
import useStyle from "@/hooks/useStyle";
import { useNavigate } from "react-router-dom";

const MyCard = ({ heading, p, img, url = "/students" }) => {
  const { theme, Box, Typography, MyImg, GradientButton } = useStyle();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.bg1,
        borderRadius: "20px",
        py: 3,
        px: 4,
        mt: 2,
        "&:hover": {
          bgcolor: theme.palette.bg2, // Changes background color on hover
        },
        position: "relative",
      }}
    >
      <MyImg img={img} />
      <Box display='grid' gridTemplateColumns='1fr .2fr'>
        <Box>
          <Typography
            sx={{
              typography: theme.typography.heading4,
            }}
          >
            {heading}
          </Typography>
          <Typography sx={{ typography: theme.typography.font3, mt: 1 }}>
            {p}
          </Typography>
        </Box>
      </Box>
      <Box position='absolute' right={20} bottom={20}>
        <GradientButton Icon={<EastIcon />} handleClick={() => navigate(url)} />
      </Box>
    </Card>
  );
};

export default MyCard;
