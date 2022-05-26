import React from 'react'
import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
export const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  {/* <Navbar.Brand href="/">
  <Image src="favicon-32x32.png" alt="logo" width={'25px'}/>&nbsp;&nbsp;TastyFood
  </Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    
    <LinkContainer to='/login' exact>
    <Nav.Link>Login</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/cart' exact>
    <Nav.Link>Cart</Nav.Link>
    </LinkContainer>
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
