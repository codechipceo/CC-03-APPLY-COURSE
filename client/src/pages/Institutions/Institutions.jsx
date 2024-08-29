import { Box, Container } from "@mui/system";
import { RecruitHero } from "../RecruitmentPartners/RecruitHero/RecruitHero";
import { InstitutionCard } from "./InstitutionCard/InstitutionCard";
import { Grid, Typography } from "@mui/material";
import { Testimonial } from "./Testimonial/Testimonial";

const cardData = [
  {
    id: 1,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/07/Application-50x50.png",
    title: "Vetted, Offer-Ready Applications, Delivered",
    text: "Reduce your workload on application processing and follow-ups.",
  },
  {
    id: 2,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/08/Acceptance-Rate-50x50.png",
    title: "Putting Students First",
    text: "Founded by students for students—we care about every aspect of the student journey.",
  },
  {
    id: 3,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/07/Platform-50x50.png",
    title: "Flexible Delivery",
    text: "We match your processes and requirements—there is no need for integration.",
  },
  {
    id: 4,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/6.webp",
    title: "Work With You, For You",
    text: "Our aim is to free up your time and resources. We help you recruit efficiently and effectively.",
  },
];

export const Institutions = () => {
  return (
    <>
      <RecruitHero
        heroTitle="Be Seen by 100,000+ Students Every Month"
        heroText="Increase your global presence and the number of qualified students from a single, easy-to-use platform trusted by more than 1,500 institutions worldwide."
        herotBtn="Work with us"
      />

      <Container sx={{ py: 8 }}>
        <Grid container spacing={2}>
          {cardData?.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <InstitutionCard data={card} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#efd1fe", py: 8 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <Typography variant="h3" mb={5}>
                A Relationship Built on Trust and Credibility
              </Typography>
            </Grid>
          </Grid>

          <Testimonial />
        </Container>
      </Box>
    </>
  );
};
