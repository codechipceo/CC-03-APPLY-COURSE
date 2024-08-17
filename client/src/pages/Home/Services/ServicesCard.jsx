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
        We Help Students Get Admitted Into the Best International Educational
        Institutions An Easy-to-Use Platform Built to Deliver Quality
        Applications and More
      </Typography>

      <Box
        sx={{ display: { md: "grid", xs: "block" } }}
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(2, 1fr)"
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
