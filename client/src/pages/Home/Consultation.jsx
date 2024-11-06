import theme from "@/theme";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const Consultation = () => {
  return (
    <Container>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        py={4}
        my={10}
      >
        <Typography color={"white"} fontSize={40}>
          {" "}
          Get a Free consultation for <br /> Your Career
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: theme.palette.theme50,
            color: "black",
            borderRadius: 0,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "transparent",
              border: "2px solid ",
              borderColor: theme.palette.theme50,
              color: theme.palette.theme50,
            },
          }}
        >
          {" "}
          Book Your Free Consultation Now
        </Button>

      </Box>
    </Container>
  );
};
