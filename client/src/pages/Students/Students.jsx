import { Box, Container } from "@mui/material";
import Hero from "../Home/HeroSection/Hero";
import MainPoster from "./MainPoster/MainPoster/";
import JoinUs from "@/components/JoinUs";
import { CollageDetail } from "../CollageDetail/CollageDetail";
import { useTools } from "@/hooks/useTools";
import { selectProgram } from "@/slices/programSlice";
import Loader from "@/components/Loader";

export const Students = () => {
  const { useSelector } = useTools();
  const { programs, loading } = useSelector(selectProgram);

  return (
    <>
      <MainPoster />
      {loading ? <Loader /> : programs.length > 0 ? <CollageDetail /> : null}

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
