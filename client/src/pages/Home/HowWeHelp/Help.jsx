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
import { Typography } from "@mui/material";
import theme from "@/theme";
import FinanceIcon from '@/assets/home/financeIcon.svg'
import CareerIcon from '@/assets/home/careerIcon.svg'
import AdvocacyIcon from '@/assets/home/advocacyIcon.svg'
import PlacementIcon from '@/assets/home/placementIcon.svg'
import RefugeeIcon from '@/assets/home/refugeeIcon.svg'
import ServiceIcon from '@/assets/home/serviceIcon.svg'


export const help = [
  {
    img: <img src={FinanceIcon} width={"100%"} />,
    heading: "Career & Finance Advising",
    p: "Our dedicated team of career and finance advisors is here to guide you on your path to success.",
  },
  {
    img: <img src={ServiceIcon} width={"100%"} />,
    heading: "Holding Hand Service",
    p: "Our “Holding Hand Service” is a mentorship program designed to provide you with invaluable support",
  },
  {
    img: <img src={PlacementIcon}  width={"100%"} />,
    heading: "Job Placements",
    p: "At “WE,” we recognize the importance of practical experience in launching a successful career. That’s why we offer practicum.",
  },
  {
    img: <img src={AdvocacyIcon} width={"100%"} />,
    heading: "Student Advocacy",
    p: "At “WE,” we are passionate about advocating for women students and ensuring they have a supportive learning environment.",
  },
  {
    img: <img src={CareerIcon} width={"100%"} />,
    heading: "Bridging to New Career",
    p: "If you’re looking to transition to a new career, our “Bridging to New Career” program is designed to support your goals.",
  },
  {
    img: <img src={RefugeeIcon} height={""} width={"100%"} />,
    heading: "Immigrants & Refugees",
    p: "We recognize the unique challenges faced by immigrant and refugee women as they navigate their way into",
  },
];

const Help = () => {
  const { Box, HeroContainer } = useStyle();
  return (
    <>
      <span style={{ borderBottom: `3px solid ${theme.palette.theme50}` }}>
        Features
      </span>
      <Typography variant='h3' mt={1} color={"#012d4c"} fontWeight={600}>
        {metaData.heading}
      </Typography>{" "}
      <Box
        sx={{ display: { md: "grid", xs: "block" } }}
        gridTemplateColumns='repeat(3,1fr)'
        mb={10}
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
    </>
    // </HeroContainer>
  );
};

export default Help;
