import { GradientText } from "@/components/GradientText/GradientText";
import { getImageUrl } from "@/helpers/helper";
import { useTools } from "@/hooks/useTools";
import { selectProgram, setCurrentProgramReducer } from "@/slices/programSlice";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export const CollageCard = ({ data }) => {
  const { programs, currentProgramOffering } = useSelector(selectProgram);
  const {dispatch }= useTools()



  const handleCollegeCard = (data) => {

    dispatch(setCurrentProgramReducer(data))
  }
console.log(currentProgramOffering);
  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow: 0,
        cursor: "pointer",
        border: "1px solid #ddd",
        mb: 3,
        "&:hover": {
          backgroundColor: "#f6f5ff",
        },
      }}
      onClick={() => {
        handleCollegeCard(data);
      }}
    >
      <CardContent>
        <Grid
          container
          spacing={2}
          wrap='nowrap'
          gap={4}
          justifyContent='flex-start'
          alignItems={"center"}
        >
          <Grid item maxWidth={"78px"}>
            <img
              src={`${data?.school?.schoolLogo}`}
              alt={data.school.schoolName}
              style={{ width: 78, height: 78 , borderRadius:"50%" }}
            />
          </Grid>
          <Grid item>
            <GradientText variant='h6' >
              {data.name}
            </GradientText>
            <Typography
              variant='body1'
              color='#3E3D3D'
              fontWeight={400}
              sx={{ mb: 2, }}
            >
              {data.school.schoolName}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {data?.details?.map((detail, i) => (
            <Grid item xs={6} sm={6} key={i}>
              <Box display='flex' gap={1}>
                <Avatar
                  src={detail.img}
                  alt='Certificate Icon'
                  sx={{ width: "30px", height: "30px", objectFit: "contain" }}
                />
                <Box>
                  <Typography
                    variant='subtitle1'
                    fontWeight='bold'
                    lineHeight={1.2}
                  >
                    {detail.mainTitle}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {detail.subTitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
