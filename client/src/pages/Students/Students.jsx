import JoinUs from "@/components/JoinUs";
import Loader from "@/components/Loader";
import { useTools } from "@/hooks/useTools";
import { selectProgram } from "@/slices/programSlice";
import { Container } from "@mui/material";
import { CollageDetail } from "../CollageDetail/CollageDetail";
import { CustomReveal } from "../Home/Home";
import Help from "../Home/HowWeHelp/Help";
import StoriesContainer from "../Home/Stories/StoriesContainer";
import SupportMain from "../Home/Support/SupportMain";
import Universities from "../Home/Universities/Universities";
import StudentMainPoster from "./MainPoster/StudentMainPoster";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPrograms } from "@/thunk/indexThunk";

export const Students = () => {
  const { useSelector } = useTools();
  const { programs, loading } = useSelector(selectProgram);
  const dispatch = useDispatch()
  useEffect(() => {
dispatch(getAllPrograms())

  }, [])

  return (
    <>
<StudentMainPoster />
      {loading ? <Loader /> : programs.length > 0 ? <CollageDetail /> : null}

      <Container
        disableGutters
        sx={{ overflow: "hidden", textAlign: "justify" }}
      >
        <CustomReveal>
          <SupportMain />
        </CustomReveal>
        <CustomReveal>
          <Help />
        </CustomReveal>

{/*
        <Universities />
        <StoriesContainer /> */}

        <JoinUs />
      </Container>
    </>
  );
};
