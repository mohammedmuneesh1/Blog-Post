import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="navbg">
        <Container>
          <Navbar.Brand className="fs-3 text-white"><b>BLOGSCRIBE</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto " id='navlist' style={{fontWeight:"600"}}>
              <Nav className='text-white me-5 '   onClick={()=>navigate("/")}>Home</Nav>
              <Nav className='text-white me-5  '>About</Nav>
              <Nav className='text-white me-5 ' onClick={()=>navigate("/blogs")}>Blogs</Nav>
              <Nav className='text-white me-5 '>Feedback</Nav>
              <Nav className='text-white me-5 '>Know More</Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
