import React  from 'react';
import Navbarmain from 'layouts/MembersLayout/Navbar';
import NavbarTop from 'layouts/MembersLayout/Navbar/NavbarTop';
import Homebannertop from './Homebannertop';
import Homeabtsecttoppic from '../../../assets/images/UserSite/home_abt_sect.jpg';
import './Home.scss';
import Homecustomcards from './Homecustomcards';
import Homeabtspepc from './Homeabtspepc';
import Learnhowto from '../../../assets/images/UserSite/exportone.jpg';
import Homeimagegallery from './Homeimagegallery';

const Home = () => {
  

  return (
    <div>
      <NavbarTop />
      <Navbarmain />
      <Homebannertop />

      <div className="home-aboutsection">
        <div className="home-abt-pic">
          <img src={Homeabtsecttoppic} alt="Sports Goods Promotion" />
        </div>
        <div className="home-abt-content">
          <p className="home-abt-head">Sports Goods Export Promotion Council</p>
          <p className="homeabt-cont">
            The Sports Goods Export Promotion Council (SGEPC), a Government of India sponsored organization is working for the promotion of
            India’s exports of sports goods and toys. Founded in 1958, SGEPC represents all the leading manufacturers and exporters of
            sports goods and toys in India.
          </p>
        </div>
      </div>

      <Homecustomcards />
      <Homeabtspepc />

      <div className="home-learn-howto-export">
        <div className="home-abt-pic-export">
          <img src={Learnhowto} alt="Learn How to Export" />
        </div>
        <div className="home-abt-content">
          <p className="home-abt-head">Learn How To Export</p>
          <p className="homeabt-cont">
            There’s no better time to export than now. Explore our exporting tools and resources to get started!
          </p>
          <a href="/" className="home-cstmble-btn"> LEARN HOW TO EXPORT</a>
        </div>
      </div>

      <Homeimagegallery />
    </div>
  );
};

export default Home;
