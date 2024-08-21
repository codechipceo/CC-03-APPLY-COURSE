import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import { Box } from "@mui/material";
import SupportMain from "./Support/SupportMain";
import ServicesCard from "./Services/ServicesCard";
import Help from "./HowWeHelp/Help";
import Hero from "./HeroSection/Hero";
import ChooseUsContainer from "./ChooseUs/ChooseUsContainer";
import Main from "./StaticsSection/Main";

const Home = () => {
  return (
    <>
      <MainBanner mainHeading='Simplifying Career Changes' />
      <SupportMain />
      <ServicesCard />
      <Help />
      <Hero />
      <ChooseUsContainer />
      <Main />
    </>
  );
};

export default Home;
