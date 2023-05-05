import React, { useContext,useEffect } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../assets/petuk2.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log(user)
  const handleLogout=()=>{
    logOut()
    .then (result => {})
    .catch (error => console.error(error));
}
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
            <Nav.Link Link as={Link} to="/login">Login</Nav.Link>

            <Nav.Link Link as={Link} to="/registration">Registration</Nav.Link>
             
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Profile</Nav.Link> */}
            <Nav.Link eventKey={2} href="#memes">
                <Button variant="warning"> <Link className='text-decoration-none' to={'/login'}>Login</Link> </Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogout}>LoG out</button> </span>}

      </Container>
    </Navbar>
    </div>

    </Container>
    
  );
};

export default Header;
