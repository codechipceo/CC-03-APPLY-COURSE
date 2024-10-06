import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import MyAppBar from "@/components/TopBar/AppBar";
import logoImg from "@/assets/img/logo.png";
import { ContactCard } from "./ContactCard/ContactCard";
import GradientButton from "@/components/Buttons/GradientButton";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const contactData = [
  {
    id: 1,
    title: "Email",
    link: "mailto:info@weeducation.ca",
    linkTitle: "info@weeducation.ca",
    text: "Please email us with your inquiries.",
  },
  {
    id: 3,
    title: "Canada",
    link: "tel:+1(855)500-5190",
    linkTitle: "Toll Free : +1(855)500-5190",
    text: "Monday–Friday 9 AM–5:30 PM EST",
  },
  {
    id: 4,
    title: "Location",

    // linkTitle: "Toll Free : 1-800-208-3444",
    text: "1055, 11th ST SW Calgary, Alberta T2R1G8",
  },
];

export const Contact = () => {
  return (
    <Container sx={{ pt: 5, pb: 16 }}>
      <MyAppBar logoImg={logoImg} />

      <Grid container rowSpacing={4} columnSpacing={2} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h1"
            mt={6}
            mb={1}
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "3rem",
                lg: "4rem",
              },
              fontWeight: 600,
            }}>
            Contact Us
          </Typography>
          <Typography variant="p" component={"p"}>
            We’re here to help. Don’t hesitate to get in touch with our expert
            support team who can help answer all of your questions.
          </Typography>
        </Grid>
        {contactData?.map((e) => (
          <Grid item xs={12} sm={6} lg={3} key={e.id}>
            <ContactCard data={e} />
          </Grid>
        ))}

        {/* <Grid item xs={12} md={8} textAlign="center">
          <Typography variant="" component={"p"} mt={4} mb={2}>
            If you are an existing customer and have a question, please contact
            your Account Representative for assistance. Existing customers can
            also utilize 24/7 Live Chat and WhatsApp text support. Please log in
            to your ApplyBoard account for details. For questions about a
            student application, please leave a message in the Notes section of
            the application, and our Customer Experience Team will be in touch.
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
            <GradientButton
              Icon={<XIcon />}
              styles={{
                border: "1px solid #fff",
                background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
              }}
            />
            <GradientButton
              Icon={<LinkedInIcon />}
              styles={{
                border: "1px solid #fff",
                background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
              }}
            />
            <GradientButton
              Icon={<InstagramIcon />}
              styles={{
                border: "1px solid #fff",
                background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
              }}
            />
            <GradientButton
              Icon={<FacebookOutlinedIcon />}
              styles={{
                border: "1px solid #fff",
                background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
              }}
            />
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
};
