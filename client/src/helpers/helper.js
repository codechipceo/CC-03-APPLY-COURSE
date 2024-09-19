import { metaData } from "@/constants/programCard";
import ProgramImage from "@/assets/collageDetail/program-level.png";
import costOfLivingImage from "@/assets/collageDetail/costOfLiving.png";
import applicationFee from "@/assets/collageDetail/applicationFee.png";
import TuitionFee from "@/assets/collageDetail/tuitionFee.png";

import programLength from "@/assets/collageDetail/programLength.png";

export function getImageUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

export const transformProgramData = (data) => {
  return [
    {
      img: ProgramImage,
      subTitle: "Program Level",
      mainTitle: data.programLevel,
    },
    {
      img: costOfLivingImage,
      subTitle: "Cost of Living",
      mainTitle: data.costOfLiving,
    },
    {
      img: TuitionFee,
      subTitle: "Tuition",
      mainTitle: data.tuitionFee,
    },
    {
      img: applicationFee,
      subTitle: "Application Fee",
      mainTitle: data.applicationFee,
    },

    {
      img: programLength,
      subTitle: "Program Length",
      mainTitle: data.programLength,
    },
  ];
};
