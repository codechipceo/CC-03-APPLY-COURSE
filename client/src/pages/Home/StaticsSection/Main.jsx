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
        my: 10,
      }}
    >
      <Box
        sx={{
          m: { md: 7, xs: 1 },
          display: { md: "grid", xs: "block" },
          gridTemplateColumns: { md: "repeat(2,1fr)" },
          gap: { md: 10, xs: 1 },
        }}
      >
        <Box>
          <Typography
            sx={{
              typography: {
                md: theme.typography.heading2,
                xs: theme.typography.heading3,
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: 5,
            alignContent: "center",
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
    </Box>
  );
};

export default Main;
