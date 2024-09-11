import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../../../assets/scss/themes/UserNav/_usernav.scss';
// import LogoNew from '../../../../assets/images/logo_New.jpg'
// import ISPO from '../../../../assets/images/ISPO.jpg'
// import ISPGMLOGO from '../../../../assets/images/ISPGMLOGO.jpg'

const NavbarTop = () => {
  return (
    <div>
      <Container className="app-container">
        <Row className="app-body">
          <Col xs={3} className="app-body-content-item">
            {/* <Image src={LogoNew} alt="India Emblem" fluid /> */}
            {/* <Image src={LogoNew} alt="SGEPC LOGO" fluid /> */}
          </Col>
          {/* <Col xs={3} className="app-body-content-item">
            <Image src={ISPO} alt="ISPO Logo" fluid />
          </Col> */}
          {/* <Col xs={3} className="app-body-content-item">
            <Image
              src={ISPGMLOGO}
              alt="India Serves Logo"
              fluid
            />
          </Col> */}
        </Row>

        <Row>
          <Col xs={2} className="app-body-content-item-second">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarTop;
