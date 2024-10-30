import ChooseUsContainer from "./ChooseUs/ChooseUsContainer";
import Hero from "./HeroSection/Hero";
import Help from "./HowWeHelp/Help";
import MainBanner from "./MainBanner/MainBanner";
import ServicesCard from "./Services/ServicesCard";
import Main from "./StaticsSection/Main";
import SupportMain from "./Support/SupportMain";

import StoriesContainer from "./Stories/StoriesContainer";
import Universities from "./Universities/Universities";

import newlogo from "@/assets/img/newlogo.png";
import JoinUs from "@/components/JoinUs";
import MyAppBar from "@/components/TopBar/AppBar";
import { keyframes } from "@emotion/react";
import { Container } from "@mui/material";
import Reveal from "react-awesome-reveal";
import MainPoster from "../Students/MainPoster/MainPoster";
import { AboutWeEducation } from "./AboutWeEducation";
import { Box } from "@mui/system";
import { JoiningSteps } from "./JoiningSteps";

export function CustomReveal({ children }) {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 200px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return (
    <Reveal triggerOnce={true} delay={300} keyframes={customAnimation}>
      {children}
    </Reveal>
  );
}

const Home = () => {
  return (
    <>
      {/* <MyAppBar logoImg={newlogo} /> */}
      <MainPoster />
      <Container
        disableGutters
        sx={{ overflow: "hidden", mt: 1, textAlign: "justify" }}
      >
        {/* <MainBanner mainHeading='Simplifying Career Changes' /> */}
        <AboutWeEducation />
        <CustomReveal>
          <SupportMain />
        </CustomReveal>
        {/* <CustomReveal>
        <ServicesCard />
      </CustomReveal> */}
      </Container>
      <Box bgcolor={"#07294d"}>
        <Container>

        <CustomReveal>
          <Help />
        </CustomReveal>
        </Container>
      </Box>

      <Box>
        <JoiningSteps />
      </Box>
      <Hero />
      <Universities />
      <ChooseUsContainer />
      <Main />
      <StoriesContainer />
      <JoinUs />
    </>
  );
};

export default Home;
