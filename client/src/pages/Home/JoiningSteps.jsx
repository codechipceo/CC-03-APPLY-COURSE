import { Box, Grid, Typography } from "@mui/material";
import JoinUsBannerBg from "@/assets/home/joinusBanner.png";

export const JoiningSteps = () => {
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
