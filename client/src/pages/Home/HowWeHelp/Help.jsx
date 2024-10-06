import React from "react";
import Card from "./Card";
import { metaData } from "@/constants/homePage/howWeHelp.js";
import useStyle from "@/hooks/useStyle";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


export const help = [
  {
    img: (
      <AccountBalanceWalletIcon sx={{ color: "#5e1bd1", fontSize: "42px" }} />
    ),
    heading: "Career & Finance Advising",
    p: "Our dedicated team of career and finance advisors is here to guide you on your path to success.",
  },
  {
    img: <HandshakeIcon sx={{ color: "#5e1bd1", fontSize: "42px" }} />,
    heading: "Holding Hand Service",
    p: "Our “Holding Hand Service” is a mentorship program designed to provide you with invaluable support",
  },
  {
    img: <WorkIcon sx={{ color: "#5e1bd1", fontSize: "42px" }} />,
    heading: "Job Placements",
    p: "At “WE,” we recognize the importance of practical experience in launching a successful career. That’s why we offer practicum.",
  },
  {
    img: <SchoolIcon sx={{ color: "#5e1bd1", fontSize: "42px" }} />,
    heading: "Student Advocacy",
    p: "At “WE,” we are passionate about advocating for women students and ensuring they have a supportive learning environment.",
  },
  {
    img: <SensorOccupiedIcon sx={{ color: "#5e1bd1", fontSize: "42px" }} />,
    heading: "Bridging to New Career",
    p: "If you’re looking to transition to a new career, our “Bridging to New Career” program is designed to support your goals.",
  },
  {
    img: <DoubleArrowIcon sx={{ color: "#5e1bd1", fontSize: "42px" }} />,
    heading: "Immigrants & Refugees",
    p: "We recognize the unique challenges faced by immigrant and refugee women as they navigate their way into",
  },
];

const Help = () => {
  const { Box, HeroContainer } = useStyle();
  return (
    <HeroContainer heading={metaData.heading} paragraph={metaData.paragraph}>
      {" "}
      <Box
        sx={{ display: { md: "grid", xs: "block" } }}
        gridTemplateColumns="repeat(3,1fr)"
        gap={2}
      >
        {help.length > 0
          ? help.map((item, i) => (
              <Card
                key={item.heading + i}
                heading={item.heading}
                p={item.p}
                img={item.img}
              />
            ))
          : null}
      </Box>{" "}
    </HeroContainer>
  );
};

export default Help;
