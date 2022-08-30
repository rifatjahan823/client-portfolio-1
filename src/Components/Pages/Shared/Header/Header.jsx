import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaBehanceSquare,FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin} from "react-icons/bs";
import './Header.css'

const Header = () => {


  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className='bg navbar-dark bg-dark'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1>logo</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='/#hero' >Home</Nav.Link>
            {/* //jodi user thake
             {
               user && <> */}
            <Nav.Link href='/#about'>About</Nav.Link>
            <Nav.Link href='/#portfolio'>portfolio</Nav.Link>
            <Nav.Link href='/#client'>client</Nav.Link>
            <Nav.Link href='/#contact'>contact</Nav.Link>
            {/* </>
             } */}

          </Nav>
          <Nav className="ms-auto">
            <a href="#"> <FaFacebookSquare className='header_icon' /></a>
            <a href="#"><BsLinkedin className='header_icon' /></a>
            <a href="#"><FaBehanceSquare className='header_icon' /></a>
            <a href="#"><FaTwitterSquare className='header_icon' /></a>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;