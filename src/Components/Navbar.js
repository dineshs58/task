import React from "react";
import {Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Asserts/logo.png'
import './Navbar.css'


function Navbars() {
    return (
        <>

            <Navbar expand="lg" className="nav-bar">
                <Container fluid>
                    <Navbar.Brand className="logo" href="#home"><img src={Logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/" className="home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="about">About</Nav.Link>
                                <Nav.Link as={Link} to="/ourcycles" className="our">Our Cycle</Nav.Link>
                                <Nav.Link as={Link} to="/shop"    className="shop">Shop</Nav.Link>
                                <Nav.Link as={Link} to="/new"   className="newcycle">New Cycles</Nav.Link>
                                <Nav.Link as={Link} to="/cotacts"   className="contact">Contact</Nav.Link>
                                <Nav.Link as={Link} to="login"   className="login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default Navbars