import { Box, Container, Grid } from "@mui/material";
import { CollageCard } from "./CollageCard/collageCard";
import CollageImage from "../../assets/collageDetail/queen-university.png";
import ProgramImage from "../../assets/collageDetail/program-level.png";
import { CollageCardDetail } from "./CollageCardDetail/CollageCardDetail";

const cardDatas = [
  {
    id: 1,
    img: CollageImage,
    title: "International Language Academy of Canada (ILAC) - Toronto",
    uniName: "ILAC KISS",
    details: [
      {
        img: ProgramImage,
        subTitle: "Program Level",
        mainTitle: "Postgraduate Certificate",
      },
      {
        img: ProgramImage,
        subTitle: "Cost of Living",
        mainTitle: "$20,635 CAD / Year",
      },
      {
        img: ProgramImage,
        subTitle: "Tuition",
        mainTitle: "$14,414 USD / Year",
      },
      {
        img: ProgramImage,
        subTitle: "Application Fee",
        mainTitle: "$125 CAD",
      },
      {
        img: ProgramImage,
        subTitle: "Program Length",
        mainTitle: "1 year graduate certificate",
      },
    ],
  },
];

export const CollageDetail = () => {
  return (
    <>
      <Container sx={{ paddingBlock: "60px" }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={5} xl={4} paddingInline={1}>
            {cardDatas.map((data) => (
              <CollageCard data={data} />
            ))}
          </Grid>
          <Grid xs={12} md={7} xl={8} paddingInline={1}>
            {cardDatas.map((data) => (
              <CollageCardDetail data={data} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
