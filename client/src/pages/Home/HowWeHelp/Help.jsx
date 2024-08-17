import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Card from "./Card";
import HeroContainer from "@/components/HeroContainer";
const Help = () => {
  const theme = useTheme();
  return (
    <HeroContainer
      heading="How We Help"
      paragraph=" Figma ipsum component variant main layer. Auto pencil align
            reesizing group underline undo. Bullet thumbnail pixel flatten slice
            align align bold opacity distribute."
    >
      {" "}
      <Box
        sx={{ display: { md: "grid", xs: "block" } }}
        gridTemplateColumns="repeat(3,1fr)"
        gap={2}
      >
        <Card />
        <Card />
        <Card />
      </Box>{" "}
    </HeroContainer>
  );
};

export default Help;
