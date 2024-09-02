import { Container, Grid } from "@mui/material";
import { CollageCard } from "./CollageCard/collageCard";
import { CollageCardDetail } from "./CollageCardDetail/CollageCardDetail";
import { useTools } from "@/hooks/useTools";
import { selectProgram } from "@/slices/programSlice";

// const cardDatas = [
//   {
//     id: 1,
//     img: new URL(
//       "@/assets/collageDetail/queen-university-logo.png",
//       import.meta.url
//     ).href,
//     title: "International Language Academy of Canada (ILAC) - Toronto",
//     uniName: "ILAC KISS",
//     details: [
//       {
//         img: ProgramImage,
//         subTitle: "Program Level",
//         mainTitle: "Postgraduate Certificate",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Cost of Living",
//         mainTitle: "$20,635 CAD / Year",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Tuition",
//         mainTitle: "$14,414 USD / Year",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Application Fee",
//         mainTitle: "$125 CAD",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Program Length",
//         mainTitle: "1 year graduate certificate",
//       },
//     ],
//   },
//   {
//     id: 1,
//     img: new URL(
//       "@/assets/collageDetail/queen-university-logo.png",
//       import.meta.url
//     ).href,
//     title: "International Language Academy of Canada (ILAC) - Toronto",
//     uniName: "ILAC KISS",
//     details: [
//       {
//         img: ProgramImage,
//         subTitle: "Program Level",
//         mainTitle: "Postgraduate Certificate",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Cost of Living",
//         mainTitle: "$20,635 CAD / Year",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Tuition",
//         mainTitle: "$14,414 USD / Year",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Application Fee",
//         mainTitle: "$125 CAD",
//       },
//       {
//         img: ProgramImage,
//         subTitle: "Program Length",
//         mainTitle: "1 year graduate certificate",
//       },
//     ],
//   },
// ];

export const CollageDetail = () => {
  const { useSelector } = useTools();

  const { programs, currentProgramOffering } = useSelector(selectProgram);
  return (
    <>
      <Container sx={{ paddingBlock: "60px" }}>
        <Grid container spacing={2}>
          <Grid
            xs={12}
            md={5}
            xl={4}
            paddingInline={1}
            maxHeight={1020}
            sx={{ overflowY: "auto" }}
          >
            {programs.length > 0
              ? programs.map((data) => (
                  <CollageCard key={data._id} data={data} />
                ))
              : null}
          </Grid>
          <Grid xs={12} md={7} xl={8} paddingInline={1}>
            <CollageCardDetail data={currentProgramOffering} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
