import ChooseUsContainer from "./ChooseUs/ChooseUsContainer";
import Hero from "./HeroSection/Hero";
import Help from "./HowWeHelp/Help";
import Main from "./StaticsSection/Main";
import SupportMain from "./Support/SupportMain";

import StoriesContainer from "./Stories/StoriesContainer";
import Universities from "./Universities/Universities";

import JoinUs from "@/components/JoinUs";
import { keyframes } from "@emotion/react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Reveal from "react-awesome-reveal";
import MainPoster from "../Students/MainPoster/MainPoster";
import { AboutWeEducation } from "./AboutWeEducation";
import { Consultation } from "./Consultation";
import { JoiningSteps } from "./JoiningSteps";
import OurCourses from "./OurCourses";
import LeadForm from "./LeadForm";

export function CustomReveal({ children }) {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return (
    <Reveal triggerOnce={true} delay={200} keyframes={customAnimation}>
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
        <CustomReveal>

        <AboutWeEducation />
        </CustomReveal>
        <CustomReveal>

          <SupportMain />
        </CustomReveal>


      </Container>

      <CustomReveal>

      <OurCourses />
      </CustomReveal>

    
      <Box bgcolor={"#07294d"}><Consultation />  </Box>
      <Box bgcolor={"white"}>
        <Container>
          <CustomReveal>
            <Help />
          </CustomReveal>
        </Container>
      </Box>

      <Box>
        <JoiningSteps />
      </Box>
      <LeadForm />
      {/* <Hero /> */}
      <Universities />
      {/* <ChooseUsContainer /> */}
      {/* <Main /> */}
      <StoriesContainer />
      {/* <JoinUs /> */}
    </>
  );
};

export default Home;
