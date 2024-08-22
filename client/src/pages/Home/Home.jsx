import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import SupportMain from "./Support/SupportMain";
import ServicesCard from "./Services/ServicesCard";
import Help from "./HowWeHelp/Help";
import Hero from "./HeroSection/Hero";
import ChooseUsContainer from "./ChooseUs/ChooseUsContainer";
import Main from "./StaticsSection/Main";

import Universities from "./Universities/Universities";
import StoriesContainer from "./Stories/StoriesContainer";

import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
import logoImg from "@/assets/img/logo.png";
import MyAppBar from "@/components/TopBar/AppBar";
import { Container } from "@mui/material";

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

      <StoriesContainer />

      <JoinUs />
      <Footer />
    </Container>
  );
};

export default Home;
