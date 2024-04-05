// ButtonGroup.jsx
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const MultiCarouselButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    <div className="carousel-button-group">
      <button className={ `prev ${currentSlide === 0 ? 'disabled' : ''}`} onClick={previous}><WestIcon/></button>
      <button className='next' onClick={next}><EastIcon/></button>
    </div>
  );
};

export default MultiCarouselButtonGroup;
