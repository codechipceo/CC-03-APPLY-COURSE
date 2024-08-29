import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Card from "./Card";
import HeroContainer from "@/components/HeroContainer";
import { metaData, help } from "@/constants/homePage/howWeHelp";

const Help = () => {
  const theme = useTheme();
  return (
    <HeroContainer heading={metaData.heading} paragraph={metaData.paragraph}>
      {" "}
      <Box
        sx={{ display: { md: "grid", xs: "block" } }}
        gridTemplateColumns="repeat(3,1fr)"
        gap={2}
      >
        {help.length > 0
          ? help.map((item, i) => (
              <Card
                key={item.heading + i}
                heading={item.heading}
                p={item.p}
                img={item.img}
              />
            ))
          : null}
      </Box>{" "}
    </HeroContainer>
  );
};

export default Help;
