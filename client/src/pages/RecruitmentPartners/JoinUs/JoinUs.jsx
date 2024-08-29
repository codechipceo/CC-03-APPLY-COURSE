import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const joinData = [
  {
    id: 1,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/08/Students-Helped-50x50.png",
    title: "1,000,000+",
    text: "Students Helped",
  },
  {
    id: 2,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/08/Acceptance-Rate-50x50.png",
    title: "95%",
    text: "Acceptance Rate",
  },
  {
    id: 3,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/08/School-Partnerships-50x50.png",
    title: "1,500+",
    text: "Institution Partnerships",
  },
  {
    id: 4,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/08/50M-50x50.png",
    title: "$100M+",
    text: "Helped Students Access $100M+ in Scholarships",
  },
];

export const JoinUs = () => {
  return (
    <Container sx={{ py: 10, px: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            mb={2}
            sx={{
              fontSize: {
                md: "2.5rem",
                lg: "3rem",
                xs: "2rem",
              },
              fontWeight: 600,
            }}>
            Join 6,500+ Global
            <br />
            Recruitment Partners
          </Typography>
        </Grid>
        {joinData.map((e) => (
          <Grid item xs={12} sm={6} md={3} key={e.id}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: 3,
                height: "100%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignitem="center"
                  mb={2}>
                  <img src={e.img} alt={e.title} />
                </Box>
                <Typography
                  variant="h4"
                  component="div"
                  color="#000"
                  gutterBottom>
                  {e.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {e.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
