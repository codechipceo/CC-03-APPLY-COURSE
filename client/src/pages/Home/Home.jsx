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
    <Container
      disableGutters
      sx={{ overflow: "hidden", mt: 1, textAlign: "justify" }}
    >
      <MyAppBar logoImg={newlogo} />
      <MainBanner mainHeading='Simplifying Career Changes' />

      <CustomReveal>
        <SupportMain />
      </CustomReveal>

      <CustomReveal>
        <ServicesCard />
      </CustomReveal>
      <CustomReveal>
        <Help />
      </CustomReveal>

      <Hero />
      <Universities />
      <ChooseUsContainer />
      <Main />

      <StoriesContainer />

      <JoinUs />
    </Container>
  );
};

export default Home;
