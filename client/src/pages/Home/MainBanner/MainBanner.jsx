import bulbImg from "@/assets/home/Bulb.png";
import mainBannerImg from "@/assets/home/mainBanner.png";
import useStyle from "@/hooks/useStyle";
import { useTools } from "@/hooks/useTools";
import Grid from "@mui/material/Grid";
import ClientAvatar from "./AvatarGroup";

const MainBanner = () => {
  const { theme, Typography, Box, GradientButton, MyImg } = useStyle();
  const { navigate} = useTools()
  return (
    <Grid
      container
      rowSpacing={1}
      mx={4}
      columnSpacing={{ xs: 1, sm: 1, md: 2 }}
      p={2}
    >
      <Grid item xs={12} md={6}>
        <Typography
          sx={{
            typography: {
              md: theme.typography.heading1,
              xs: theme.typography.heading2,
            },
            lineHeight: 1.2,
          }}
          textAlign='start'
          display={"flex"}
        >
          <Box>
            <Typography
              sx={{
                typography: {
                  md: theme.typography.heading1,
                  xs: theme.typography.heading2,
                },
                lineHeight: 1.2,
              }}
              textAlign='start'
              display={"flex"}
            >
              Simplifying
              <Box variant='div' sx={{ display: { xs: "none", md: "block" } }}>
                <img src={bulbImg} />
              </Box>
            </Typography>
            <Typography
              sx={{
                typography: {
                  md: theme.typography.heading1,
                  xs: theme.typography.heading2,
                },
                lineHeight: 1.2,
              }}
              textAlign='start'
            >
              Career Changes
            </Typography>
          </Box>
        </Typography>
        <Typography sx={{ typography: { md: theme.typography.heading4 } }}>
          Unbiased Consulting to Help you to find Ideal Programs and Get Back to
          Work.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <GradientButton
            buttonText='Get Started'
            handleClick={() => navigate("/students")}
          />
        </Typography>
        <Box sx={{ mt: 5, flexGrow: 1 }}>
          <Typography sx={{ typography: theme.typography.p }}>
            Trusted by Thousands of Canadians 🍁
          </Typography>
          <ClientAvatar />
        </Box>
      </Grid>
      <Grid item sx={{ display: { xs: "none", md: "flex" } }} md={6}>
        <Box>
          <MyImg img={mainBannerImg} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainBanner;
