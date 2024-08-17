import React from "react";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import MyImg from "@/components/MyImg";

const Support = ({ heading, paragraph, img }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={1}
      sx={{
        backgroundColor: theme.palette.bg1,
        borderRadius: { md: "10px", xs: 0 },
        py: 3,
        px: 4,
        mt: 2,
        "&:hover": {
          bgcolor: theme.palette.bg2, // Changes background color on hover
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography sx={{ typography: theme.typography.heading3 }}>
          {heading}
        </Typography>
        <Typography sx={{ typography: theme.typography.p, my: 4 }}>
          {paragraph}
        </Typography>
        <Typography>
          <Button
            sx={{ color: theme.palette.linkShade1 }}
            endIcon={<EastIcon />}
          >
            Learn More
          </Button>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { md: "flex", xs: "none" } }}>
        <MyImg img={img} />
      </Grid>
    </Grid>
  );
};

export default Support;
