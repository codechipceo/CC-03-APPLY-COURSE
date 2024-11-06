import { metaData } from "@/constants/programCard";
import ProgramImage from "@/assets/collageDetail/program-level.png";
import costOfLivingImage from "@/assets/collageDetail/costOfLiving.png";
import applicationFee from "@/assets/collageDetail/applicationFee.png";
import TuitionFee from "@/assets/collageDetail/tuitionFee.png";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AssignmentIcon from "@mui/icons-material/Assignment";
import programLength from "@/assets/collageDetail/programLength.png";
import theme from "@/theme";

export function getImageUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

export const transformProgramData = (data) => {
  return [
    {
      img: <AssignmentIcon sx={{ color: theme.palette.primaryFontColor }} />,
      subTitle: "Program Level",
      mainTitle: data.programLevel,
    },
    // {
    //   img: costOfLivingImage,
    //   subTitle: "Cost of Living",
    //   mainTitle: data.costOfLiving,
    // },
    {
      img: (
        <MonetizationOnIcon sx={{ color: theme.palette.primaryFontColor }} />
      ),

      subTitle: "Tuition",
      mainTitle: `$${data.tuitionFee}`,
    },
    // {
    //   img: applicationFee,
    //   subTitle: "Application Fee",
    //   mainTitle: data.applicationFee,
    // },

    {
      img: <MilitaryTechIcon sx={{ color: theme.palette.primaryFontColor }} />,

      subTitle: "Program Length",
      mainTitle: data.programLength,
    },
  ];
};
