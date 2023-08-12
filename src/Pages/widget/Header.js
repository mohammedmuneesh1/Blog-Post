import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap';
import './widget.css';
export default function Header() {
  return (
    <div>
        <Navbar expand="lg" className="navbg">
        {/* className="bg-body-tertiary" */}
        <Container>
          <Navbar.Brand href="#home" className="fs-3 text-white"><b>Blogger</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"className='bg-white' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id='navlist' >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Blogs</Nav.Link>
              <Nav.Link href="#link">Feedback</Nav.Link>
              <Nav.Link href="#link">Know More</Nav.Link>
    
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
