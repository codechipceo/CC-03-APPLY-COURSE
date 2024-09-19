import { Box, Typography, useTheme } from "@mui/material";
import GradientButton from "@/components/Buttons/GradientButton";
import HeroContainer from "@/components/HeroContainer";
import MyImg from "@/components/MyImg";

const useStyle = () => {
  const theme = useTheme();
  return {
    Box,
    Typography,
    GradientButton,
    MyImg,
    HeroContainer,
    theme,
  };
};

export default useStyle;
