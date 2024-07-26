import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../CarouselTemplate/templateimage';
import HomeTopBannerOne from '../../../assets/images/Home/Home_Top_Banner_one.jpg'
import HomeTopBannertwo from '../../../assets/images/Home/Home_banner_two.jpg'
import HomeTopBannerthree from '../../../assets/images/Home/Home_Banner_three.jpg'


const Homebannertop = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage 
            imageSrc={HomeTopBannerOne}
            text="First slide" 
          />

        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            imageSrc={HomeTopBannertwo}
            text="Second slide" 
          />

        </Carousel.Item>
        <Carousel.Item>
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
