import { Box, Container } from "@mui/material";
import Hero from "../Home/HeroSection/Hero";
import MainPoster from "./MainPoster/MainPoster/";
import JoinUs from "@/components/JoinUs";

export const Students = () => {
  return (
    <>
      <MainPoster />
      <Container
        disableGutters
        sx={{ overflow: "hidden", textAlign: "justify" }}
      >
        <JoinUs />
        <Hero />
      </Container>
    </>
  );
};
