import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { metaData, universitiesData } from "@/constants/homePage/topUniverSec";
import MySwiper from "@/components/MySwiper";
import { SwiperSlide } from "swiper/react";
import useStyle from "@/hooks/useStyle";

const Universities = () => {
  const { Box, theme, HeroContainer, GradientButton } = useStyle();

  const swiperRef = useRef();

  return (
    <HeroContainer heading={metaData.heading} paragraph={metaData.paragraph}>
      <Box
        sx={{
          position: "relative",
          mt: 5,
          mx: 3,
          display: { md: "block" },
        }}
      >
        <MySwiper
          modules={[Navigation]}
          space={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 4,
            },
          }}
          ref={swiperRef}
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
                          borderRadius: "0px 0px 28px 28px",
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
        </MySwiper>

        <GradientButton
          styles={{
            position: "absolute",
            top: "45%",
            zIndex: 20,
            left: -20,
            background: theme.gradients.secondaryGradient,
          }}
          onClick={() => swiperRef.current?.slidePrev()}
          Icon={<WestIcon />}
        />
        <GradientButton
          styles={{
            position: "absolute",
            top: "45%",
            zIndex: 20,
            right: -20,
            background: theme.gradients.secondaryGradient,
          }}
          onClick={() => swiperRef.current?.slideNext()}
          Icon={<EastIcon />}
        />
      </Box>
    </HeroContainer>
  );
};

export default Universities;
