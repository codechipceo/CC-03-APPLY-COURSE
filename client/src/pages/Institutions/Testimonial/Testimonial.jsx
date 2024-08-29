import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Typography } from "@mui/material";

import { Autoplay } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2022/01/Athena.webp",
    text: "“ApplyBoard guided me through the application process to make sure it went smoothly. They filled me with trust because their communication is so strong. ApplyBoard double-checked every part of my application and visa requirements so that everything was correct.”",
  },
  {
    id: 2,
    img: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2022/01/Victor_Montero.webp",
    text: "“Being an international student in Canada was the most rewarding experience of my life, and I am happy to say that it’s now my permanent home. Canada is a country that embraces multiculturalism, friendly immigration policies, and quality education.”",
  },
];

export const Testimonial = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}>
      {testimonialData.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center">
            <Grid item xs={12} md={3}>
              <img
                src={testimonial.img}
                alt={`image${testimonial.id}`}
                style={{ maxWidth: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h5">{testimonial.text}</Typography>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
