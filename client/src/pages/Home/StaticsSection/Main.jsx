import { Box, Typography } from "@mui/material";
import React from "react";
import city from "@/assets/City.png";
import { useTheme } from "@mui/material";
import MyImg from "@/components/MyImg";
import map from "@/assets/map.png";
import { metaData, statics } from "@/constants/homePage/statics";
import StaticsCard from "./StaticsCard";

const Main = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${city})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        py: 5,
      }}
    >
      <Box
        sx={{
          m: { md: 7, xs: 1 },
          display: { md: "grid" },
          gridTemplateColumns: { md: "repeat(2,1fr)" },
          gap: { md: 10, xs: 1 },
        }}
      >
        <Box>
          <Typography
            sx={{
              typography: {
                md: theme.typography.heading3,
                xs: theme.typography.heading4,
              },
              textAlign: "start",
              my: { md: 10 },
              mx: { md: 6 },
            }}
          >
            {metaData.heading}
          </Typography>
        </Box>
        <Box>
          <MyImg img={map} />
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "flex", xs: "grid" },
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
        }}
      >
        {statics.length > 0
          ? statics.map((item) => (
              <StaticsCard
                key={item.text}
                count={item.count}
                text={item.text}
              />
            ))
          : null}
      </Box>
    </Box>
  );
};

export default Main;
