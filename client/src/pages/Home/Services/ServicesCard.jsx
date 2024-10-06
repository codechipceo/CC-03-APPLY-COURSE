import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/servicesList";

const ServicesCard = () => {
  const theme = useTheme();
  return (
    <Box sx={{ p: { md: 3, xs: 2 }, py: 4, px: 2, mt: 10 }}>
      <Typography sx={{ typography: theme.typography.heading3 }}>
        What We Do ?
      </Typography>

      <Box
        sx={{ display: { md: "grid", xs: "block" } }}
        gridTemplateColumns='repeat(3, 1fr)'
        gridTemplateRows='repeat(1, 1fr)'
      >
        {services.length > 0
          ? services.map((service, i) => (
              <ServiceCard
                key={service.heading + i}
                heading={service.heading}
                paragraph={service.paragraph}
                img={service.img}
              />
            ))
          : null}
      </Box>
    </Box>
  );
};

export default ServicesCard;
