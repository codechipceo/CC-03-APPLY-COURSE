import GradientButton from "@/components/Buttons/GradientButton";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import MyAppBar from "@/components/TopBar/AppBar";
import logoImg from "@/assets/img/logo.png";
import { ModalForm } from "@/components/ModalForm/ModalForm";
import { useState } from "react";

export const RecruitHero = ({ heroTitle, heroText, herotBtn }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MyAppBar />

      <Box
        sx={{
          background:
            "linear-gradient(284.12deg, #BF5AF2 10.41%, #615CE7 107.36%)",
          width: "100%",
          pt: 5,
          position: "relative",
        }}
      >
        <Box
          sx={{
            py: 8,
            margin: "auto",
            maxWidth: 800,
            flexGrow: 1,
            color: "#fff",
          }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                textAlign='center'
                gap={2}
                display='flex'
                flexDirection='column'
              >
                <Typography
                  variant='h1'
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      md: "3rem",
                      lg: "4rem",
                    },
                    fontWeight: 600,
                  }}
                >
                  {heroTitle}
                </Typography>
                <Typography component='p'>{heroText}</Typography>
                <Box>
                  <GradientButton
                    handleClick={handleOpen}
                    buttonText={herotBtn}
                    styles={{
                      boxShadow: "inset 0 4px 4px #fff3, 0 3px 4px #0003",
                    }}
                  />
                  <ModalForm open={open} handleClose={handleClose} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
