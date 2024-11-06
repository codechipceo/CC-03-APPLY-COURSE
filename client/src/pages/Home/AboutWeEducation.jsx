import theme from '@/theme';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import ABoutUsGirl from "../../assets/home/RecruitmentPartnersImg/aboutUsLandingPage.png";
import StaticsCard from './StaticsSection/StaticsCard';
export const AboutWeEducation = () => {
  return (
    <>
      <Container sx={{mt:5}}>
        <Box
          sx={{ display: { md: "grid", xs: "block" } }}
          gridTemplateColumns={"repeat(2, 1fr)"}
        >
          <Box>
            <span
              style={{ borderBottom: `3px solid ${theme.palette.theme50}` }}
            >
              About Us
            </span>
            <Typography variant='h6' sx={{ fontSize: 48, fontWeight: 500 }}>
              We are WE Management & Consulting Services Inc.
            </Typography>
            <Typography variant='body1'>
              Welcome to WE Management & Consulting Services, a passionate
              community dedicated to empowering women through education. We
              firmly believe that education is the key to personal growth,
              professional success, and overall empowerment. Our mission is to
              break down barriers and provide women with the resources and
              support they need to reenter the world of education, pursue their
              dreams, and transform their lives.
            </Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                      <img src={ABoutUsGirl} height={"281"} width={"243"} alt='' />
                      <Box display={'flex'}>
                          <StaticsCard count={1500} text={"Students Helped"}/>
                          <StaticsCard count={80} text={"Programs"}/>
                          <StaticsCard count={55} text={"Partners"}/>
                          <StaticsCard count={120} text={"Institutions"}/>
                      </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
