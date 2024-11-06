import { GradientText } from "@/components/GradientText/GradientText";
import { getImageUrl } from "../../../helpers/helper";
import { useTools } from "@/hooks/useTools";
import { selectProgram, setCurrentProgramReducer } from "@/slices/programSlice";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import theme from "@/theme";
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
  return (
    <Card
      sx={{
        borderRadius: "",
        boxShadow: 0,
        cursor: "pointer",
        border: `1px solid ${theme.palette.primaryFontColor}`,
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
          spacing={1}
          wrap='nowrap'

          justifyContent='flex-start'
          alignItems={"center"}
        >
          <Grid item maxWidth={"60px"}>
            <img
              src={`${data?.school?.schoolLogo}`}
              alt={data?.school.schoolName}
              style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h1' sx={{ color: theme.palette.primaryFontColor }} fontSize={18} fontWeight={600}>
              {data.name}
            </Typography>
            <Typography
              variant='body1'
              color='#3E3D3D'
              fontWeight={400}
              sx={{ mb: 2 }}
            >
              {data.school.schoolName}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {data?.details?.map((detail, i) => (
            <Grid item xs={6} sm={6} key={i}>
              <Box display='flex' gap={1}>
                {detail.img }
                {/* <Avatar
                  src={detail.img}
                  alt='Certificate Icon'
                  sx={{ width: "30px", height: "30px", objectFit: "contain" }}
                /> */}

                <Box>
                  <Typography
                    variant='subtitle2'
                    sx={{color:theme.palette.primaryFontColor}}
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
