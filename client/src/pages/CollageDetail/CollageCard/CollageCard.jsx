import { GradientText } from "@/components/GradientText/GradientText";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const CollageCard = ({ data }) => {
  return (
    <>
      <Card
        key={data.id}
        sx={{
          borderRadius: "20px",
          boxShadow: 0,
          border: "1px solid #ddd",
          mb: 3,
        }}>
        <CardContent>
          <Grid container spacing={2} wrap="nowrap" justifyContent="center">
            <Grid item>
              <img
                src={data.img}
                alt="Queen's University"
                style={{ width: 78, height: 78 }}
              />
            </Grid>
            <Grid item>
              <GradientText variant="h5" sx={{ mb: 1, fontSize: "20px" }}>
                {data.title}
              </GradientText>
              <Typography
                variant="h6"
                color="#3E3D3D"
                fontWeight={600}
                sx={{ mb: 2, fontSize: "20px" }}>
                {data.uniName}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {data.details.map((detail, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box display="flex" gap={1}>
                  <Avatar
                    src={detail.img}
                    alt="Certificate Icon"
                    sx={{ width: "30px", height: "30px", objectFit: "contain" }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      lineHeight={1.2}>
                      {detail.mainTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {detail.subTitle}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
