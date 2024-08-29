import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

import CollageImg from "../../../assets/collageDetail/university-img.png";
import UniversityImg from "../../../assets/collageDetail/queen-university-logo.png";
import GradientButton from "@/components/Buttons/GradientButton";
import { useState } from "react";
import { CustomModal } from "@/components/CustomModal/CustomModal";
import { GradientText } from "@/components/GradientText/GradientText";

export const CollageCardDetail = ({ data }) => {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleShowClick = () => {
    setShow(!show);
  };
  return (
    <Card sx={{ boxShadow: 0, border: "1px solid #ddd", borderRadius: "20px" }}>
      <CardMedia
        sx={{ height: 240 }}
        image={CollageImg}
        title="Queen's University"
      />
      <CardContent>
        <Box display="flex" flexWrap="wrap" gap={1} alignItems="center">
          <Box flex={1}>
            <Box display="flex" gap={2} alignItems="center">
              <Avatar
                src={UniversityImg}
                alt="Queen's University"
                sx={{ width: 80, height: 80, objectFit: "contain" }}
              />
              <Box flex={1}>
                <GradientText variant="h2" gutterBottom fontSize={40}>
                  {data.school.schoolName}
                </GradientText>

                <Box display="flex" gap={1}>
                  <LocationOnOutlinedIcon />
                  <Typography variant="body1" color="initial">
                    {data.school.locationDetails.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <GradientButton
              onClick={handleOpen}
              buttonText="Check Eligibility Now"
            />
          </Box>
          <CustomModal open={open} handleClose={handleClose} />
        </Box>

        <Box
          marginBlock={4}
          bgcolor="#573DFB0D"
          borderRadius="20px"
          padding={5}
        >
          <Grid container spacing={3}>
            {data.details.map((detail, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box display="flex" gap={2}>
                  <Avatar
                    src={detail.img}
                    alt="Certificate Icon"
                    sx={{ width: "50px", height: "50px", objectFit: "contain" }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      mb={1}
                      lineHeight={1.2}
                    >
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
        </Box>

        <Box>
          <GradientText variant="h3" sx={{ fontSize: 30 }} mb={2}>
            Graduate Certificate - {data.name}
          </GradientText>

          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 500 }}
            mb={1}
          >
            Program Summary
          </Typography>
          <Typography color="#696565">
            {data.programInfo}
            {/* {!show && <span>and jobs with these high-demand skills are</span>} */}
          </Typography>
          <Box my={1} textAlign="center">
            <Button
              onClick={handleShowClick}
              variant="text"
              sx={{ color: "#000" }}
            >
              Show{" "}
              {show ? (
                <>
                  more <ExpandMoreOutlinedIcon />
                </>
              ) : (
                <>
                  less <ExpandLessOutlinedIcon />
                </>
              )}
            </Button>
          </Box>

          <Typography
            variant="h5"
            sx={{ fontSize: 20, fontWeight: 500 }}
            mb={1}
            mt={3}
          >
            Admission Requirement
          </Typography>
          <Typography mb={3} color="#696565">
            Academy Background
          </Typography>

          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{ color: "#BF5AF2", backgroundColor: "#BF5AF230" }}
            >
              Log in to View Requirements
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
