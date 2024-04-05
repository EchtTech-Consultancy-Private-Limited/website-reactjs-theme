// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
import Image from './Image';
import sliderImg1 from '../assets/img/banner1.png'

// const  BannerSlider = () => {
//   return (
//    <>
//    <div className="carousel">
//    <Swiper
//     //   spaceBetween={50}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       grabCursor={true}
      
//     >
//       <SwiperSlide>
//          <Image  imageUrl={sliderImg1}/>
//       </SwiperSlide>
//       <SwiperSlide>
//          <Image  imageUrl={sliderImg1}/>
//       </SwiperSlide>
//       <SwiperSlide>
//          <Image  imageUrl={sliderImg1}/>
//       </SwiperSlide>
//       {/* <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide> */}
     
//     </Swiper>
//    </div>
//    </>
//   );
// };

// export default  BannerSlider;

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function BannerSlider() {
  const renderCustomArrowPrev = (clickHandler, hasPrev, label) => {
    return (
      <button onClick={clickHandler} disabled={!hasPrev}>
        Previous
      </button>
    );
  };

  const renderCustomArrowNext = (clickHandler, hasNext, label) => {
    return (
      <button onClick={clickHandler} disabled={!hasNext}>
        Next
      </button>
    );
  };

  const handleSwipeMove = (index, direction, distance, duration, eventType) => {
    console.log(`Swipe move detected: index=${index}, direction=${direction}, distance=${distance}, duration=${duration}, eventType=${eventType}`);
  };

  return (
    <>
      <Carousel 
        // renderArrowPrev={renderCustomArrowPrev}
        // renderArrowNext={renderCustomArrowNext}
        onSwipeMove={handleSwipeMove}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        direction='left'
        showStatus={false}
        showThumbs={false} 
        showArrows={true}
        stopOnHover={false}
        showIndicators= {true}
      >
        <div>
        <Image  imageUrl={sliderImg1}/>
       
        </div>
        <div>
        <Image  imageUrl={sliderImg1}/>
         
        </div>
        <div>
        <Image  imageUrl={sliderImg1}/>
         
        </div>
      </Carousel>
    </>
  );
}
