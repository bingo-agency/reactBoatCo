import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">Boat Co</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default AppNavbar;