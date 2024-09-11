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
import EligibilityForm from "./EligibilityForm";
import { useTools } from "@/hooks/useTools";
import { toggleThankYou } from "@/slices/programSlice";

export const CollageCardDetail = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    dOB: "",
    gender: "",
    age: "",
  });

  const { dispatch } = useTools();
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      dOB: "",
      gender: "",
      age: "",
    });
  };

  const handleShowClick = () => {
    setShow(!show);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleThankYou());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const data = { ...formData };
    if (e.target.files) {
      data[name] = e.target.files[0];
    } else {
      data[name] = value;
    }

    setFormData(data);
  };

  console.log(data)
  return (
    <Card sx={{ boxShadow: 0, border: "1px solid #ddd", borderRadius: "20px" }}>
      <CardMedia
        sx={{ height: 240 }}
        image={data?.school?.schoolBanner}
        title="Queen's University"
      />
      <CardContent>
        <Box display='flex' flexWrap='wrap' gap={1} alignItems='center'>
          <Box flex={1}>
            <Box display='flex' gap={2} alignItems='center'>
              <Avatar
                src={data?.school?.schoolLogo}
                alt="Queen's University"
                sx={{ width: 80, height: 80, objectFit: "contain" }}
              />
              <Box flex={1}>
                <GradientText variant='h2' gutterBottom fontSize={40}>
                  {data.school.schoolName}
                </GradientText>

                <Box display='flex' gap={1}>
                  <LocationOnOutlinedIcon />
                  <Typography variant='body1' color='initial'>
                    {data?.school?.locationDetails?.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <GradientButton
              onClick={handleOpen}
              buttonText='Check Eligibility Now'
            />
          </Box>
          <CustomModal
            open={open}
            handleClose={handleClose}
            children={
              <EligibilityForm
                formData={formData}
                onSubmit={onSubmit}
                handleChange={handleChange}
              />
            }
          />
        </Box>

        <Box
          marginBlock={4}
          bgcolor='#573DFB0D'
          borderRadius='20px'
          padding={5}
        >
          <Grid container spacing={3}>
            {data.details.map((detail, i) => (
              <Grid item xs={6} sm={6} key={i}>
                <Box display='flex' gap={2}>
                  <Avatar
                    src={detail.img}
                    alt='Certificate Icon'
                    sx={{ width: "50px", height: "50px", objectFit: "contain" }}
                  />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      fontWeight='bold'
                      mb={1}
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
        </Box>

        <Box>
          <GradientText variant='h3' sx={{ fontSize: 30 }} mb={2}>
            {data.name}
          </GradientText>

          <Typography
            variant='h5'
            sx={{ fontSize: 20, fontWeight: 500 }}
            mb={1}
          ></Typography>
          <Typography color='#696565'>
            <div dangerouslySetInnerHTML={{ __html: data?.programInfo }}></div>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
