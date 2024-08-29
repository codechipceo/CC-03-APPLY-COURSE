import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const data = [
  {
    image:
      "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/elementor/thumbs/Local_Support-padv6zedvk8vvy3q0pvo0yom28y4u9vpag42d1aknc.png",
    title: "Local Support",
    description:
      "Our international recruitment experts are there to support you every step of the way.",
  },
  {
    image:
      "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/elementor/thumbs/Education-paegnkurb9vepjv4loech01zlox5m316ufxkunrabs.png",
    title: "Education",
    description:
      "Expand your knowledge and stay ahead of your competitors with guided online courses and certificates.",
  },
  {
    image:
      "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/elementor/thumbs/Events_Webinars-paej22082k92u293n22pv6gn1uotrmc6qglqb3jdvs.png",
    title: "Events and Webinars",
    description:
      "Regular online webinars, training, and events to keep you updated on the latest trends and regulations.",
  },
  {
    image:
      "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/elementor/thumbs/Data_Insights-paej03ibtzkknb3i2plp6692hycaqbkbgrobbcfwug.png",
    title: "Data and Insights",
    description:
      "Industry-leading insights and knowledge to help you plan, expand, and achieve your goals.",
  },
];

export const Education = () => {
  return (
    <Box sx={{ backgroundColor: "#F1F7FF" }}>
      <Container sx={{ py: 10, px: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              mb={2}
              sx={{
                fontSize: {
                  md: "2.3rem",
                  lg: "3.2rem",
                  xs: "1.8rem",
                },
                textAlign: "center",
                fontWeight: 600,
              }}>
              We're Invested in Caring for You and the Ecosystem of
              International Education
            </Typography>
          </Grid>
          {data.map((e, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  height: "100%",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                      <Box
                        component="img"
                        sx={{
                          // height: 100,
                          display: "block",
                          maxWidth: "100%",
                          margin: "auto",
                        }}
                        src={e.image}
                        alt={e.title}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h6" component="div" gutterBottom>
                        {e.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {e.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
