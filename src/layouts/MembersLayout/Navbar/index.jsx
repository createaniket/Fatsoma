import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './mainnav.scss'

const Navbarmain = () => {
  return (
    <div>
      <Navbar expand="lg" className='mainnavbar-member'>
        <Container>
          <Navbar.Brand href="#home">SGPEC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="/goods-exporter/react/events/all">Events</Nav.Link>
              <Nav.Link href="#link">Awards</Nav.Link>
              <Nav.Link href="#link">REGISTRATION FOR MEMBERSHIP</Nav.Link>
              <Nav.Link href="#link">Circulars</Nav.Link>
              <Nav.Link href="#link">Member's Corner</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarmain;
