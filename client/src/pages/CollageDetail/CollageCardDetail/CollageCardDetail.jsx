import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  InputLabel,
  TextField,
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
import theme from "@/theme";

export const CollageCardDetail = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    postalCode: "",

    gender: "",
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

  console.log(data);
  return (
    <Card sx={{ boxShadow: 0, border: "1px solid #ddd", borderRadius: "20px" }}>
      <CardMedia sx={{ height: 240 }} image={data?.school?.schoolBanner} />
      <CardContent>
        <Box display='flex' flexWrap='wrap' gap={1} alignItems='center'>
          <Box flex={1}>
            <Box display='flex' gap={2} alignItems='center'>
              <Avatar
                src={data?.school?.schoolLogo}
                sx={{ width: 80, height: 80, objectFit: "contain" }}
              />
              <Box flex={1}>
                <Typography
                  variant='h3'
                  fontWeight={700}
                  sx={{ fontSize: 36, color: theme.palette.primaryFontColor }}
                  mb={2}
                >
                  {data.name}
                </Typography>
                {/* <Typography variant='h2' gutterBottom fontSize={40}>
                  {data?.school?.schoolName}
                </Typography> */}
              </Box>
            </Box>
            <Box display='flex' gap={1}>
              <LocationOnOutlinedIcon />
              <Typography variant='body1' color='initial' fontWeight={700}>
                {data?.school?.schoolName}, {data?.school?.location?.name}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              aria-controls='services-menu'
              aria-haspopup='true'
              onClick={handleOpen}
              sx={{
                my: 2,
                color: "black",
                backgroundColor: "#FFC600",
              }}
            >
              Check Eligibility Now
            </Button>
          
          </Box>
          <CustomModal open={open} handleClose={handleClose}>
            <TextField
              fullWidth
              aria-readonly
              size='small'
              sx={{ backgroundColor: "white", marginBottom: "5px" }}
              value={data?.name}
            />
            <TextField
              fullWidth
              aria-readonly
              size='small'
              sx={{ backgroundColor: "white" }}
              value={data?.school?.schoolName}
            />
            <EligibilityForm
              formData={formData}
              onSubmit={onSubmit}
              handleChange={handleChange}
            />
          </CustomModal>
        </Box>

        <Box
          marginBlock={4}
          bgcolor='#573DFB0D'
          borderRadius='20px'
          padding={5}
        >
          <Grid container spacing={3}>
            {data?.details.map((detail, i) => (
              <Grid item xs={6} sm={4} key={i}>
                <Box display='flex' gap={2}>
                  {detail.img}

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
          <Typography
            variant='h3'
            sx={{ fontSize: 30, color: theme.palette.primaryFontColor }}
            mb={2}
          >
            Course Details
          </Typography>

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
