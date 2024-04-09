import React from "react";
// Import Swiper React components
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Next from '../assets/img/arrow-next.svg'
import Prev from '../assets/img//arrow-prev.svg'
import PdfIcon from '../assets/img/PDF_icon.svg'

export default function Notification() {
    const nextRef = useRef();
    const preRef = useRef();
    const renderCustomArrowPrev = (clickHandler, hasPrev, label) => {
      return (
        <button onClick={clickHandler} disabled={!hasPrev} className="prev">
         <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WestIcon"><path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7z"></path></svg>
        </button>
      );
    };
    
    const renderCustomArrowNext = (clickHandler, hasNext, label) => {
      return (
        <button onClick={clickHandler} disabled={!hasNext} className="next">
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EastIcon"><path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"></path></svg>
        </button>
      );
    };
  
    const handleSwipeMove = (index, direction, distance, duration, eventType) => {
      console.log(`Swipe move detected: index=${index}, direction=${direction}, distance=${distance}, duration=${duration}, eventType=${eventType}`);
    };
  
  return (
    <>
      <div className="notification">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="content">
                
                <p><NotificationsIcon className="me-2"/> Notifications</p>
              </div>
            </div>
            <div className="col-md-10 ">
              <div className="notificationSlider">
            

                <Carousel 
                renderArrowPrev={renderCustomArrowPrev}
                renderArrowNext={renderCustomArrowNext}
                onSwipeMove={handleSwipeMove}
                infiniteLoop={true}
                autoPlay={true}
                navbar={true}
                loop={true}
                interval={5000}
                direction='left'
                showStatus={false}
                showThumbs={false} 
                showArrows={true}
                stopOnHover={false}
                showIndicators= {true}
              >
                <div>
                  <p> Inviting Public Consultation for declaring two or more prime constituents of the commodity on front side of the package with the Brand Name/ Logo <img src={PdfIcon} alt="pdf" /></p>
              
                </div>
                <div>
                    <p>  Lorem ipsum dolor sit amet consect etur adipisicing elit.</p>
                
                </div>
                <div>
                    <p>  Lorem ipsum dolor sit amet consect etur adipisicing elit.</p>
                
                </div>
              </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
