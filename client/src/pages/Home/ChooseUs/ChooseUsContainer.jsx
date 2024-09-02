import HeroContainer from "@/components/HeroContainer";
import { Box } from "@mui/material";

import { chooseUs, metaData } from "@/constants/homePage/chooseUs";
import ChooseUsCard from "./ChooseUsCard";

const boxStyles = {
  display: "grid",
  gridTemplateColumns: { md: "repeat(5,1fr)", xs: "repeat(2,1fr)" },
  gap: { md: 4, xs: 2 },
  my: 7,
};
const ChooseUsContainer = () => {
  return (
    <HeroContainer heading={metaData.heading} paragraph={metaData.paragraph}>
      <Box sx={boxStyles}>
        {chooseUs.length > 0
          ? chooseUs.map((item, i) => (
              <ChooseUsCard
                key={item.text + i}
                img={item.img}
                text={item.text}
              />
            ))
          : null}
      </Box>
    </HeroContainer>
  );
};

export default ChooseUsContainer;
