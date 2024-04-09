import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './MultiCarouselButtonGroup'; // Import the ButtonGroup component
import Image from './Image';
import sliderImg1 from '../assets/img/banner.png'
import sliderImg2 from '../assets/img/banner1.png'

export default function BannerSlider() {
  const carouselRef = useRef(null);
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items:1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <>
      <div className="main-benner">
      <Carousel
              ref={carouselRef}
              responsive={responsive}
              infinite
              customTransition="all .5s"
              customTransitionTimingFunction="ease-in-out"
              transitionDuration={500}
              autoPlay={true}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}>
              <div>
                <Image imageUrl={sliderImg1} />
              </div>
              <div>
                <Image imageUrl={sliderImg2} />
              </div>
              {/* <div>
                <Image imageUrl={sliderImg1} />
              </div> */}
              
            </Carousel>
      </div>
    </>
  );
}
