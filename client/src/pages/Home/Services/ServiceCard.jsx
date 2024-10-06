import { Grid, Typography } from "@mui/material";
import React from "react";

import MyImg from "@/components/MyImg";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
const ServiceCard = ({ heading, paragraph, img }) => {
  const theme = useTheme();
  return (
    <Box sx={{ "&:hover": { backgroundColor: "#EEEFFF" , cursor:'pointer'} }}>
      <Grid container spacing={1} sx={{ m: { md: 4, xs: 2 } }}>
        <Grid item xs={12} md={2}>
          <MyImg img={img} />
        </Grid>
        <Grid item md={8} xs={10}>
          <Typography
            sx={{
              typography: theme.palette.heading4,
              color: theme.palette.shade3,
              fontWeight: "bold",
            }}
          >
            {heading}
          </Typography>
          <Typography sx={{ typography: theme.typography.p, mt: 3 }}>
            {paragraph}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceCard;
