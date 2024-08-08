import { Box, Container, Typography } from "@mui/material";

export const Wrapper = ({ children }) => {
  return (
    <Box m={5} p={5} borderRadius={5} boxShadow={5} bgcolor={"white"}>
      {children}
    </Box>
  );
};

export const HeaderBar = ({ title }) => {
  return (
    <Box bgcolor={"white"} py={2} boxShadow={2}>
      <Container>
        <Typography variant='h3' fontWeight={"bold"}>
          {title}
        </Typography>
      </Container>
    </Box>
  );
};
