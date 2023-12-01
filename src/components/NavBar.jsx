
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget.jsx';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    ASPEN GROWSHOP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="NavBar" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Genéticas   <i className="bi bi-flower3"></i>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Orgánicos   <i className="bi bi-recycle"></i>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Químicos    <i className="bi bi-eyedropper"></i>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Consultas   <i className="bi bi-envelope-at-fill"></i>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;