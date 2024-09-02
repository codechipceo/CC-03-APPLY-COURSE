import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

const ThankYouScreen = () => {
  return (
    <Container>
      <Box
        sx={{
          display: { md: "grid", xs: "block" },
          gridTemplateColumns: "repeat(2,1fr)",
          mx: { md: 10, xs: "auto", sx: "auto" },
          pt: 15,
        }}
      >
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <FileDownloadDoneIcon
            style={{
              fontSize: 400,
              color: "green",
            }}
          />
        </Box>
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Thank You!
          </Typography>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <FileDownloadDoneIcon
              style={{
                fontSize: 400,
                color: "green",
              }}
            />
          </Box>
          <Typography variant="h4" sx={{ mt: 3 }}>
            Thank you for visiting{" "}
            <Typography variant="span" sx={{ color: "green" }}>
              WEBSITE NAME
            </Typography>{" "}
            website. We will contact you shortly
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ThankYouScreen;
