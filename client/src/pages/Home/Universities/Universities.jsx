import HeroContainer from "@/components/HeroContainer";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import GradientButton from "@/components/Buttons/GradientButton";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { metaData, universitiesData } from "@/constants/homePage/topUniverSec";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Universities = () => {
  const swiperRef = useRef();
  const theme = useTheme();

  return (
    <HeroContainer heading={metaData.heading} paragraph={metaData.paragraph}>
      <Box sx={{ position: "relative", mt: 5 }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          // grid={{
          //   rows: 2,
          // }}
        >
          <ImageList>
            {universitiesData.length > 0
              ? universitiesData.map((university, i) => (
                  <SwiperSlide key={university.universityName + i}>
                    <ImageListItem>
                      <img src={university.img} loading="lazy" />
                      <ImageListItemBar
                        title={university.universityName}
                        sx={{
                          borderRadius: "0px 0px 36px 36px",
                          background: `linear-gradient(rgba(0, 0, 0, 0), ${theme.palette.shade1})`,
                          pt: 10,
                          pb: 3,
                          px: 1,
                        }}
                      />
                    </ImageListItem>
                  </SwiperSlide>
                ))
              : null}
          </ImageList>
        </Swiper>

        <GradientButton
          styles={{
            position: "absolute",
            top: "45%",
            zIndex: 20,
            left: -20,
          }}
          onClick={() => swiperRef.current?.slidePrev()}
          Icon={<WestIcon />}
          gradientsSec={true}
        />
        <GradientButton
          styles={{
            position: "absolute",
            top: "45%",
            zIndex: 20,
            right: -20,
          }}
          gradientsSec={true}
          onClick={() => swiperRef.current?.slideNext()}
          Icon={<EastIcon />}
        />
      </Box>
    </HeroContainer>
  );
};

export default Universities;
