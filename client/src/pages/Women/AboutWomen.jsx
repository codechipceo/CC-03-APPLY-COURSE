import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Women from "@/assets/women.jpg";

import { useTheme } from "@mui/material/styles";
import { useTools } from "@/hooks/useTools";

export const AboutWomen = () => {
  const theme = useTheme();
  const { navigate } = useTools();
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} alignItems='center'>
        {/* Text section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant='h4' gutterBottom>
              We are WE Management & Consulting Services Inc.
            </Typography>
            <Typography variant='body1' gutterBottom>
              Welcome to WE Management & Consulting Services, a passionate
              community dedicated to empowering women through education. We
              firmly believe that education is the key to personal growth,
              professional success, and overall empowerment. Our mission is to
              break down barriers and provide women with the resources and
              support they need to reenter the world of education, pursue their
              dreams, and transform their lives.
            </Typography>
            <Button
              variant='contained'
              sx={{
                color: "white",
                background: theme.gradients.primaryGradient,
                fontWeight: "bold",
                maxWidth: "max-content",
              }}
              onClick={() => {
                navigate("/about-us");
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>

        {/* Image section */}
        <Grid item xs={12} md={6}>
          <Box
            component='img'
            src={Women}
            alt='Women Empowerment'
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
