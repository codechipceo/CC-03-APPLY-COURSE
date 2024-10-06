import React from "react";
import MyAppBar from "@/components/TopBar/AppBar";
import { Box, Container } from "@mui/system";
import { Grid, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import AboutOne from "@/assets/about_1.jpg";
import AboutTwo from "@/assets/about_2.jpg";
import AboutThree from "@/assets/about_3.jpg";
import { useMediaQuery } from "@mui/material";

const content = [
  {
    heading: "Educational resources",
    para: "At our core, we believe that education is the key to unlocking one’s full potential. We understand the unique challenges and barriers that women face in their professional journeys, and we are here to bridge the gap by offering a comprehensive range of educational resources tailored specifically for women.",
    img: AboutOne,
  },
  {
    heading: "Commmunity of learners",
    para: "We are proud to have a growing number of Independent Education Advisors working with us. Our team of experienced professionals consists of over a hundred advisors spread across Ontario, Saskatchewan, Manitoba, Alberta, and British Columbia. These advisors are passionate about helping women achieve their career goals through education, providing personalized guidance, mentorship, and support to our community of learners.",
    img: AboutTwo,
  },
  {
    heading: "Support and guidance",
    para: "By the end of 2025, our ambitious plan is to train and bring onboard over 100+ new Canadian-based advisors. This expansion will enable us to further enhance our services and reach even more individuals who can benefit from our expertise. We are dedicated to continuously improving and expanding our network of advisors to ensure that we provide the highest level of support and guidance to our community.",
    img: AboutThree,
  },
];

const ReusableGrid = ({
  heading,
  paragraph,
  imageUrl,
  altText,
  isReversed,
}) => {
  const textContent = (
    <Box>
      <Typography variant='h4' gutterBottom>
        {heading}
      </Typography>
      <Typography variant='body1'>{paragraph}</Typography>
    </Box>
  );

  const imageContent = (
    <Box>
      <img
        src={imageUrl}
        alt={altText}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {isReversed ? (
          <>
            <Grid item xs={12} md={6}>
              {imageContent}
            </Grid>
            <Grid item xs={12} md={6}>
              {textContent}
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              {textContent}
            </Grid>
            <Grid item xs={12} md={6}>
              {imageContent}
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export const ABoutUs = () => {
    const theme  = useTheme()
    const isTab = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Container>
        <Box mt={5}>
          <MyAppBar />
        </Box>
      </Container>
      <Box bgcolor={"#f3f0ff"} my={2} py={4}>
        <Typography variant='h1' textAlign={"center"} fontWeight={"bold"}>
          {" "}
          About Us
        </Typography>
      </Box>

      <Container>
        <Box my={8}>
          <Typography variant='h4' textAlign={"justify"} fontWeight={"bold"}>
            {" "}
            We are WE Management & Consulting Services Inc.
          </Typography>
          <Typography variant='body1' mt={2}>
            Welcome to “WE”! We are a dedicated online platform empowering
            Canadian women to excel in their careers through education. With a
            focus on providing tools, resources, and support, we help women
            connect with the right colleges and access valuable career growth
            opportunities. Our passionate team of experts works closely with
            women to develop personalized education plans, ensuring they can
            make informed decisions and thrive in their chosen fields. Join us
            on this empowering journey, as we break barriers, redefine success,
            and create a brighter future for Canadian women in the professional
            world.
          </Typography>
        </Box>
      </Container>

      <Box bgcolor={"#f3f3f3"} py={6}>
        <Container>
          <Box bgcolor={"white"}>
            {content.map((item, i) => {
              const { heading, para, img } = item;
              return (
                <ReusableGrid
                  key={i}
                  heading={heading}
                  paragraph={para}
                  imageUrl={img}
                  altText={heading}
                  isReversed={!isTab && i % 2 == 0}
                />
              );
            })}
          </Box>
        </Container>
      </Box>

      <Box bgcolor={"white"} py={6}>
        <Container>
          <Typography variant='h3' fontWeight={"bold"}>
            Our Mission
          </Typography>

          <Typography variant='body2' mt={4}>
            Our commitment goes beyond the numbers. We are determined to make a
            meaningful impact on the lives of individuals seeking educational
            and career growth. We understand that each person’s journey is
            unique, and our advisors work closely with learners to understand
            their aspirations, assess their skills, and develop personalized
            education plans.
          </Typography>
          <Typography variant='body2' mt={4}>
            Join us on this empowering journey of education, growth, and
            success. Together, with our dedicated team of advisors and an
            ever-expanding network, we are here to support you in reaching your
            full potential. Let’s break barriers, redefine success, and create a
            brighter future for Canadian women in the professional world.
          </Typography>
          <Typography variant='body2' mt={4}>
            Additionally, we actively connect individuals with relevant business
            opportunities. Through partnerships with industry leaders,
            organizations, and employers, we strive to create pathways for our
            learners to apply their newly acquired knowledge and skills in
            real-world settings. We firmly believe in the power of education not
            only to enrich minds but also to open doors to new career
            possibilities
          </Typography>
        </Container>
      </Box>
    </div>
  );
};
