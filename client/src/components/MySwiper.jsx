import { Swiper } from "swiper/react";
import { forwardRef } from "react";

const MySwiper = forwardRef(
  ({ modules, children, space, slidesPerView }, swiperRef) => {
    return (
      <Swiper
        modules={modules}
        spaceBetween={space}
        slidesPerView={slidesPerView}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
    );
  }
);

export default MySwiper;
