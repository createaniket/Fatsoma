import React from 'react';
import './Homeimagegallery.scss';
import GalleryOne from '../../../assets/images/Home/Gallery_one.jpg'
import Gallerytwo from '../../../assets/images/Home/Gallery_two.jpg'
import Gallerythree from '../../../assets/images/Home/Gallery_three.jpg'
import Galleryfour from '../../../assets/images/Home/Gallery_four.jpg'


const Homeimagegallery = () => {
  return (
    <div className='homeimggllrypage'>
      <p className="homeimglryhead">Image Gallery</p>
      <div className="homeimagegallery">
        <div className="home-img-galry-item">
          <img src={GalleryOne} alt="" />
        </div>

        <div className="home-img-galry-item">
          <img src={Gallerytwo} alt="" />
        </div>

        <div className="home-img-galry-item">
          <img src={Gallerythree} alt="" />
        </div>
        <div className="home-img-galry-item">
          <img src={Galleryfour} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homeimagegallery;
