// LogoSlider.jsx
import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './MultiCarouselButtonGroup'; // Import the ButtonGroup component
import Image from './Image'; // Assuming this is where your Image component is defined
import SliderImage1 from '../assets/img/logoSlider1.png';
import SliderImage2 from '../assets/img/logoSlider2.png';
import SliderImage3 from '../assets/img/logoSlider3.png';
import SliderImage4 from '../assets/img/logoSlider4.png';
import SliderImage5 from '../assets/img/logoSlider5.png';
import SliderImage6 from '../assets/img/logoSlider6.png';

export default function LogoSlider() {
  const carouselRef = useRef(null);
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };



  return (
    <section className="logoSlider">
      <div className="carousel-container">
        <div className="container">
          <div className="carouselContainer">
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              infinite
              customTransition="all .5s"
              customTransitionTimingFunction="ease-in-out"
              transitionDuration={500}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
            >
              <div>
                <Image imageUrl={SliderImage1} />
              </div>
              <div>
                <Image imageUrl={SliderImage2} />
              </div>
              <div>
                <Image imageUrl={SliderImage3} />
              </div>
              <div>
                <Image imageUrl={SliderImage4} />
              </div>
              <div>
                <Image imageUrl={SliderImage5} />
              </div>
              <div>
                <Image imageUrl={SliderImage6} />
              </div>
            </Carousel>

           
          </div>
        </div>
      </div>
    </section>
  );
}
