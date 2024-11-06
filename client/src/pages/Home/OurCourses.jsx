import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import theme from "@/theme.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPrograms } from "@/thunk/indexThunk";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ data }) => {
    const { name, tuitionFee, programLevel, schoolId } = data

const navigate = useNavigate()
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={250}
        bgcolor={"white"}
      >
        <Box height={200}>
          <img
            src={schoolId?.schoolBanner}
            alt=''
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box px={2} py={1}>
          <Typography>{name}</Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant='body2' color={"grey"}>
              {programLevel}
            </Typography>
            <Typography variant='body2' color={"grey"}>
              ${tuitionFee}
            </Typography>
          </Box>
          <hr style={{ border: "1px solid grey" }} />

          <Button variant='' sx={{ background: theme.palette.theme50 }}>
            <a href='#lead-form'>Enroll Now</a>
          </Button>
        </Box>
      </Box>
    );
};

const OurCourses = () => {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    dispatch(getAllPrograms())
      .unwrap()
      .then((res) => {
        setCourseData(res?.data);
      });
  }, []);

  return (
    <Box bgcolor={"#EDF0F2"} py={5} my={10}>
      <Container>
        <span
          style={{
            color: theme.palette.primaryFontColor,
            borderBottom: "2px solid #FFC600",
          }}
        >
          Follow Steps
        </span>
        <Typography
          fontSize={48}
          color={theme.palette.primaryFontColor}
          fontWeight={700}
        >
          {" "}
          Featured Courses
        </Typography>

        <Box display={"flex"} gap={4} flexWrap={'wrap'}>
          {courseData.length > 0 &&
            courseData.slice(0,4).map((course) => {
                return (

                    <CourseCard key={course._id} data={course} />
              )
            })}
        </Box>
      </Container>
    </Box>
  );
};

export default OurCourses;
