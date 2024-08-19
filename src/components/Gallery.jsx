import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='gallerys'>
    <div className="gallery-container">
      {/* Header Section */}
      <h1 className="gallery-header">Our Memories</h1>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: true }}  // Autoplay settings
        className="swiper-container"
        modules={[Navigation, Pagination, EffectFade, Autoplay]}  // Register the Autoplay module
      >
        <SwiperSlide className="swiper-slide">
          <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724002107/sa4gxr4ogi0onnhps1ow.jpg" alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724002101/qx0meqlosegabvoumfw6.jpg" alt="Slide 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724002246/i1pecnxkez7dmx3xad45.jpg" alt="Slide 3" className="slide-image" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724002107/sa4gxr4ogi0onnhps1ow.jpg" alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724002101/qx0meqlosegabvoumfw6.jpg" alt="Slide 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724002246/i1pecnxkez7dmx3xad45.jpg" alt="Slide 3" className="slide-image" />
        </SwiperSlide>
        {/* Add more SwiperSlides with images as needed */}
      </Swiper>
    </div>
    </div>
  );
};

export default Gallery;
