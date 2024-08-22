import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import { Box } from "@mui/material";
import SupportMain from "./Support/SupportMain";
import ServicesCard from "./Services/ServicesCard";
import Help from "./HowWeHelp/Help";
import Hero from "./HeroSection/Hero";
import ChooseUsContainer from "./ChooseUs/ChooseUsContainer";
import Main from "./StaticsSection/Main";

import StoriesContainer from "./Stories/StoriesContainer";
import Universities from "./Universities/Universities";

const Home = () => {
  return (
    <Box>
      <MainBanner
        mainHeading=" Study
        Abroad Made Easy"
      />
      <SupportMain />
      <ServicesCard />
      <Help />
      <Hero />
      <Universities />
      <ChooseUsContainer />
      <Main />
      <StoriesContainer />
    </Box>
  );
};

export default Home;
