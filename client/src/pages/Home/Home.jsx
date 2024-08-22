import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import SupportMain from "./Support/SupportMain";
import ServicesCard from "./Services/ServicesCard";
import Help from "./HowWeHelp/Help";
import Hero from "./HeroSection/Hero";
import ChooseUsContainer from "./ChooseUs/ChooseUsContainer";
import Main from "./StaticsSection/Main";

const Home = () => {
  return (
    <Container
      disableGutters
      sx={{ overflow: "hidden", mt: 1, textAlign: "justify" }}
    >
      <MyAppBar logoImg={logoImg} />
      <MainBanner mainHeading="Simplifying Career Changes" />
      <SupportMain />
      <ServicesCard />
      <Help />
      <Hero />
      <Universities />
      <ChooseUsContainer />
      <Main />
    </Box>
  );
};

export default Home;
