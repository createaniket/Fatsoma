import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../CarouselTemplate/templateimage';
import HomeTopBannerOne from '../../../assets/images/Home/Home_Top_Banner_one.jpg';
import HomeTopBannertwo from '../../../assets/images/Home/Home_banner_two.jpg';
import HomeTopBannerthree from '../../../assets/images/Home/Home_Banner_three.jpg';
import './Homebannertop.scss';

const Homebannertop = () => {
  return (
    <div>
      <Carousel
        interval={null}          // Disable auto-slide
        keyboard={false}         // Disable keyboard navigation
        controls={false}         // Disable carousel controls (arrows)
        indicators={false}       // Disable slide indicators (dots)
      >
        <Carousel.Item tabIndex="-1">  {/* Prevent focus on slide change */}
          <ExampleCarouselImage 
            imageSrc={HomeTopBannerOne}
            text="First slide" 
          />
        </Carousel.Item>
        <Carousel.Item tabIndex="-1">  {/* Prevent focus on slide change */}
          <ExampleCarouselImage 
            imageSrc={HomeTopBannertwo}
            text="Second slide" 
          />
        </Carousel.Item>
        <Carousel.Item tabIndex="-1">  {/* Prevent focus on slide change */}
          <ExampleCarouselImage 
            imageSrc={HomeTopBannerthree}
            text="Third slide" 
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Homebannertop;
