import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const HeroContainer = ({ heading, paragraph, children }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",

          justifyContent: "center",
        }}
      >
        <Box width="800px">
          <Typography
            sx={{
              typography: {
                md: theme.typography.heading2,
                xs: theme.typography.heading3,
              },
            }}
          >
            {heading}
          </Typography>
          <Typography sx={{ typography: theme.typography.font3 }}>
            {paragraph}
          </Typography>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default HeroContainer;
