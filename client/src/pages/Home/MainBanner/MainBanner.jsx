import { Box } from "@mui/material";
import React from "react";
import mainBannerImg from "@/assets/home/mainBanner.png";
import bulbImg from "@/assets/home/Bulb.png";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GradientButton from "@/components/Buttons/GradientButton";
import ClientAvatar from "./AvatarGroup";
import MyImg from "@/components/MyImg";

const MainBanner = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 1, md: 2 }}
      p={2}
    >
      <Grid item xs={12} md={6}>
        <Typography
          sx={{
            typography: {
              md: theme.typography.heading1,
              xs: theme.typography.heading2,
            },
            lineHeight: 1.2,
          }}
          textAlign="start"
        >
          Study <img src={bulbImg} alt="" />
          <br />
          Abroad Made Easy
        </Typography>
        <Typography sx={{ typography: { md: theme.typography.heading4 } }}>
          Find and apply to your dream university with our expert guidance
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <GradientButton buttonText="Get Started" />
        </Typography>
        <Box sx={{ mt: 5, flexGrow: 1 }}>
          <Typography sx={{ typography: theme.typography.p }}>
            Trusted by 30k+ Students & Recruitment Partners
          </Typography>
          <ClientAvatar />
        </Box>
      </Grid>
      <Grid item sx={{ display: { xs: "none", md: "flex" } }} md={6}>
        <Box>
          <MyImg img={mainBannerImg} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainBanner;
