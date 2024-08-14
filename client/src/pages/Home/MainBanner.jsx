import { Box } from "@mui/material";
import React from "react";
import mainBannerImg from "@/assets/home/mainBanner.png";
import bulbImg from "@/assets/home/Bulb.png";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GradientButton from "@/components/Buttons/GradientButton";
import AvatarGroup from "./AvatarGroup";

const MainBanner = ({ mainHeading }) => {
  const theme = useTheme();
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      <Grid item xs={12} sm>
        <Typography
          sx={{
            typography: {
              md: theme.typography.heading1,
              xs: theme.typography.h2,
            },
          }}
        >
          Study{" "}
          <span>
            <img src={bulbImg} alt="" />
          </span>{" "}
          Abroad Made Easy
        </Typography>
        <Typography sx={{ typography: { md: theme.typography.h4 } }}>
          Find and apply to your dream university with our expert guidance
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <GradientButton buttonText="Get Started" />
        </Typography>
        <Box sx={{ mt: 3, flexGrow: 1 }}>
          <Typography sx={{ typography: theme.typography.p }}>
            Trusted by 30k+ Students & Recruitment Partners
          </Typography>
          <AvatarGroup />
        </Box>
      </Grid>
      <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
        <Box>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain", // Ensures the image maintains its aspect ratio and fits within the container
            }}
            src={mainBannerImg}
            alt=""
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainBanner;
