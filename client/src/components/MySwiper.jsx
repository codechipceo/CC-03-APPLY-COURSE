import { Swiper } from "swiper/react";
import { forwardRef } from "react";

const MySwiper = forwardRef(
  ({ modules, children, space, slidesPerView, ...props }, swiperRef) => {
    return (
      <Swiper
        modules={modules}
        spaceBetween={space}
        slidesPerView={slidesPerView}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...props}
      >
        {children}
      </Swiper>
    );
  }
);

export default MySwiper;
