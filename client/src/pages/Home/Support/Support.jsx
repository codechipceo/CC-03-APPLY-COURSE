import React from "react";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import MyImg from "@/components/MyImg";
import { useTools } from "@/hooks/useTools";

const Support = ({ heading, paragraph, img  , url}) => {
  const theme = useTheme();
const  {navigate} = useTools()
  return (
    <Grid
      container
      // spacing={1}
      sx={{
        backgroundColor: theme.palette.darkBlue,
        // borderRadius: { md: "10px", xs: 0 },
        color: "white",
        px: 4,
        py:1,

        "&:hover": {
          bgcolor: theme.palette.darkBlueHover, // Changes background color on hover
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
          {heading}
        </Typography>
        <Typography sx={{ typography: theme.typography.p }}>
          {paragraph}
        </Typography>
        <Button
          sx={{

            color: theme.palette.theme50,
          }}
          onClick={() => navigate(url)}
          endIcon={<EastIcon />}
        >
          Learn More
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { md: "flex", xs: "none" } }}>
        <MyImg img={img} />
      </Grid>
    </Grid>
  );
};

export default Support;
