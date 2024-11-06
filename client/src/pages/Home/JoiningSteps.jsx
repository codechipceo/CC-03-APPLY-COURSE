import { Box, Grid, Typography } from "@mui/material";
import JoinUsBannerBg from "@/assets/home/joinusBanner.png";
import { useState } from "react";

const TabData = ({ title, description, btnName, btnLink }) => {


}




export const JoiningSteps = () => {

  const tabsData = [
    {
      title: "Find Your Program",
      description:
        "Browse through a diverse selection of over 100+ programs, ranging from Accounting and Business to Community Services, Design, Healthcare, Hospitality, Legal, and Technology. Identify the program that aligns with your interests and career aspirations.",
    },
    {
      title: "Meet with Admissions",
      description:
        "Connect with our Admissions Advisors to gain a deeper understanding of the programs we offer. During this meeting, you’ll have the opportunity to discuss your goals and interests, allowing us to provide personalized guidance. Explore various student funding options to determine the best financial path for you. Additionally, receive a complimentary career consultation to help you make an informed decision.",
    },
    {
      title: "Apply for College",
      description:
        "Once you’ve chosen your desired program and gained insights from your Admissions meeting, our team will assist you through the application process. We’ll provide comprehensive information on student financing, ensuring you have a clear understanding of your financial responsibilities. We’ll guide you through the enrollment process, setting you up for a successful start to your college journey.",
    },
    {
      title: "Launch the Career",
      description:
        "Starting on your first day, we immerse you in rigorous training that hones your skills. As you step into a competitive job market, you’ll do so with confidence, well-prepared to excel. Your journey toward a successful career is our priority, and we’re here to guide you every step of the way.",
    },
  ];

  const [activeTab , setActiveTab] = useState(0)
  return (
    <Box
      sx={{
        backgroundImage: `url(${JoinUsBannerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <video src=''></video>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: "100%", bgcolor: "#07294DD4" }}>
          <Box height='100%' px={3} py={2} my={8}>
            <span style={{ color: "white", borderBottom: "2px solid #FFC600" }}>
              Follow Steps
            </span>
            <Typography fontSize={48} color={"white"} fontWeight={700}>
              {" "}
              Join Us Today
            </Typography>
            <Box display={"flex"} justifyContent={"space-between"}>
              {tabsData.map((step, i) => {
                return (
                  <div onClick={() => setActiveTab(i)} key={i}>
                    <Typography
                      fontSize={20}
                      fontWeight={600}
                      sx={{ cursor: "pointer" }}
                      borderBottom={activeTab === i && "3px solid #FFC600"}
                      color={activeTab === i ? "#FFC600" : "white"}
                    >
                      {`Step ${i + 1}`}
                    </Typography>
                  </div>
                );
              })}
            </Box>

            <Box>
              <Typography
                my={1}
                fontSize={26}
                fontWeight={600}
                color={"#FFC600"}
              >
                {tabsData[activeTab].title}{" "}
              </Typography>
              <Typography color={"white"}>
                {tabsData[activeTab].description}{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
