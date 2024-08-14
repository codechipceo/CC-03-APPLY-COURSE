import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { screens } from "./screens";

const TopBar = ({ logoImg }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        boxShadow: theme.shadows[0],
        borderRadius: "10px",
        height: "30px",
      }}
      p={2}
      my={2}
    >
      <Box>
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain", // Ensures the image maintains its aspect ratio and fits within the container
          }}
          height={"100%"}
          src={logoImg}
          alt="Logo image"
        />
      </Box>

      <List
        sx={{
          display: "flex",
          textWrap: "nowrap",
          typography: "p",
        }}
        style={theme.typography.button}
      >
        {screens.length > 0
          ? screens.map((screen) => (
              <ListItem key={screen.name.concat(screen.path)}>
                {screen.name}
              </ListItem>
            ))
          : null}
      </List>

      <Button
        sx={{
          background: theme.gradients.primaryGradient,
          borderRadius: "15px",
          color: "white",
          p: 2,
          typography: "button",
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default TopBar;
