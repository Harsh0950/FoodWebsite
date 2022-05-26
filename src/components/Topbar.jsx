import React from 'react'
import {Nav,Navbar,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
export const Topbar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <Image src="favicon-32x32.png" alt="logo" width={'25px'}/>&nbsp;&nbsp;TastyFood
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to='/' activeClassName>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about' activeClassName>
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact' activeClassName>
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/policy' activeClassName>
                    <Nav.Link>Terms and policy</Nav.Link>
                </LinkContainer> 
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>


    </>
  )
}
