import backgroundImg from "@/assets/home/storiesBackground.png";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import MySwiper from "@/components/MySwiper";
import { SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { storiesCardContent } from "@/constants/homePage/stories";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import useStyle from "@/hooks/useStyle";

const StoriesContainer = () => {
  const swiperRef = useRef();
  const [rating, setRating] = useState(5);
  const { theme, Box, Typography, MyImg, GradientButton } = useStyle();

  return (
    <Box
      sx={{
        mx: { md: 5 },
        my: 9,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: { md: "15px" },
        color: "#fff",
        py: 4,
        position: "relative",
      }}
    >
      <Typography
        sx={{
          typography: {
            md: theme.typography.heading2,
            xs: theme.typography.heading3,
          },
          px: 8,
        }}
      >
        Our
        <br /> Success Stories
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          position: "absolute",
          right: 20,
          top: 40,
        }}
      >
        <GradientButton
          handleClick={() => swiperRef.current?.slidePrev()}
          variant="outlined"
          Icon={<WestIcon />}
          styles={{
            background: "none",
            border: "1px solid #fff",
            "&:hover": {
              boxShadow: 8,
              background: theme.gradients.primaryGradient,
              border: "none",
            },
          }}
        />
        <GradientButton
          handleClick={() => swiperRef.current?.slideNext()}
          Icon={<EastIcon />}
          styles={{
            background: "none",
            border: "1px solid #fff",
            "&:hover": {
              boxShadow: 8,
              background: theme.gradients.primaryGradient,
              border: "none",
            },
          }}
        />
      </Box>
      <MySwiper
        modules={[Navigation]}
        space={30}
        centeredSlides={true}
        spaceBetween={30}
        ref={swiperRef}
        grabCursor={true}
        initialSlide={3}
        slideToClickedSlide={true}
        slidesPerView={1.5}
      >
        {storiesCardContent.length > 0
          ? storiesCardContent.map((cardData, i) => (
              <SwiperSlide key={cardData.contentWriterName + i}>
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    p: 2,
                    borderRadius: "20px",
                    border: "1px solid #fff",
                    dropShadow: 2,
                    display: { md: "grid" },
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap: 5,
                    mt: 5,
                    height: { md: "400px" },
                  }}
                >
                  <Box sx={{ mt: 4 }}>
                    <Rating name="no-value" value={cardData.rating} />
                    <Typography
                      sx={{
                        typography: { md: theme.typography.heading4 },
                        mt: 1,
                      }}
                    >
                      {cardData.content}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      {cardData.contentWriterName}
                    </Typography>
                    <Typography
                      sx={{ color: "#C2C2C2", typography: theme.typography.p }}
                    >
                      {cardData.writtenDate}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: { xs: 4, md: 0 } }}>
                    <MyImg
                      img={cardData.customerImg}
                      styles={{
                        borderRadius: "40px",
                        height: "395px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            ))
          : null}
      </MySwiper>
    </Box>
  );
};

export default StoriesContainer;
