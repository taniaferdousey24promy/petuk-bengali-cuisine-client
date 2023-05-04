import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../assets/petuk2.jpg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container  >
        <div className="mt-5 text-center ">
      
      <img   src={logo} width="300" height="200" className="d-inline-block align-text-top" alt="" />

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
      <Navbar.Brand href="#home">Petuk Banglai</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/chefDetails">chefDetails</Nav.Link>

            <Nav.Link Link as={Link} to="/registration">Registration</Nav.Link>
             
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Profile</Nav.Link> */}
            <Nav.Link eventKey={2} href="#memes">
                <Button variant="warning">Login </Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    </Container>
    
  );
};

export default Header;
