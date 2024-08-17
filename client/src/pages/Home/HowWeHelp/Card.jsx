import React from "react";
import HomeImg from "@/assets/home/Help/img_1.png";
import { Box, Typography } from "@mui/material";
import MyImg from "@/components/MyImg";
import { useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import GradientButton from "@/components/Buttons/GradientButton";
import EastIcon from "@mui/icons-material/East";

const MyCard = () => {
  const theme = useTheme();
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
      <MyImg img={HomeImg} />
      <Box display="grid" gridTemplateColumns="1fr .2fr">
        <Box>
          <Typography
            sx={{
              typography: theme.typography.Heading4,
            }}
          >
            University Matching
          </Typography>
          <Typography sx={{ typography: theme.typography.font3, mt: 1 }}>
            Get personalized recommendations Get personalized recommendations
            Get personalized recommendations Get
          </Typography>
        </Box>
      </Box>
      <Box position="absolute" right={20} bottom={20}>
        <GradientButton Icon={<EastIcon />} />
      </Box>
    </Card>
  );
};

export default MyCard;
