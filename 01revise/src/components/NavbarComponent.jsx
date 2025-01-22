import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent(props) {
  return (
    <Navbar className="bg-black">
      <Container className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        <Navbar.Brand href="#home" className="text-white font-semibold text-xl hover:text-blue-500 transition-colors duration-200">
          {props.title}
        </Navbar.Brand>
        <Nav className="flex items-center space-x-6 ml-8">
          <Nav.Link href="#home" className="text-blue-500 hover:text-white transition-colors duration-200">
            {props.home}
          </Nav.Link>
          <Nav.Link href="#features" className="text-blue-500 hover:text-white transition-colors duration-200">
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-blue-500 hover:text-white transition-colors duration-200">
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;