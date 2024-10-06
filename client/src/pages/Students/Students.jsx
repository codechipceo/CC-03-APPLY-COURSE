import { Container } from "@mui/material";
import Hero from "../Home/HeroSection/Hero";
import MainPoster from "./MainPoster/MainPoster.jsx";
import JoinUs from "@/components/JoinUs";
import { CollageDetail } from "../CollageDetail/CollageDetail";
import { useTools } from "@/hooks/useTools";
import { selectProgram } from "@/slices/programSlice";
import Loader from "@/components/Loader";
import { CustomReveal } from "../Home/Home";
import SupportMain from "../Home/Support/SupportMain";
import ServicesCard from "../Home/Services/ServicesCard";
import Help from "../Home/HowWeHelp/Help";
import Universities from "../Home/Universities/Universities";
import Main from "../Home/StaticsSection/Main";
import StoriesContainer from "../Home/Stories/StoriesContainer";


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
        <CustomReveal>
          <SupportMain />
        </CustomReveal>
        <CustomReveal>
          <Help />
        </CustomReveal>
        <CustomReveal>
          <ServicesCard />
        </CustomReveal>

        <Hero />
        <Universities />
        <Main />
        <StoriesContainer />

        <JoinUs />
      </Container>
    </>
  );
};
