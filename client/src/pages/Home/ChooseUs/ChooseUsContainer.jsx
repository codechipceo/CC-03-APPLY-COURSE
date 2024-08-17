import HeroContainer from "@/components/HeroContainer";
import { Box } from "@mui/material";

import { chooseUs } from "@/constants/chooseUs";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUsContainer = () => {
  return (
    <HeroContainer
      heading="Why You Choose Us"
      paragraph="We partner with top universities worldwide to offer you the best options"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(5,1fr)", xs: "repeat(2,1fr)" },
          gap: { md: 4, xs: 2 },
        }}
        my={7}
      >
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
