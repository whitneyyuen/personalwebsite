import React from 'react';
import './navbar.css';
import logo from '../../assets/icon.svg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar2 = () => {
    return (
        <nav className="navbarClass">
            <div className="desktopMenu">
                <img src={logo} alt="Logo" className='logo' />
                <Link activeClass="active" className="desktopMenuListItem" to="intro" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faHouse} />Home
                </Link>
                <Link activeClass="active" className="desktopMenuListItem" to="intro" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faUser} />About Me
                </Link>
                <Link activeClass="active" className="desktopMenuListItem" to="exp" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faBriefcase} />Experience
                </Link>
                {/* 
                <Link activeClass="active" className="desktopMenuListItem" to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faUser} />Skills
                </Link>
                */}
                <Link activeClass="active" className="desktopMenuListItem" to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faEnvelope} />Contact Me
                </Link>
            </div>
            <div className="mobileMenu">
                <Navbar collapseOnSelect key="sm" expand="sm">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                    <img src={logo} alt="Logo" className='logo' />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#intro" className="mobileMenuListItem" >
                                        <FontAwesomeIcon className="iconClass" icon={faHouse} />Home
                                    </Nav.Link>
                                    <Nav.Link href="#intro" className="mobileMenuListItem" >
                                        <FontAwesomeIcon className="iconClass" icon={faUser} />About Me
                                    </Nav.Link>
                                    <Nav.Link href="#exp" className="mobileMenuListItem" >
                                        <FontAwesomeIcon className="iconClass" icon={faBriefcase} />Experience
                                    </Nav.Link>
                                    {/*
                                            <Nav.Link href="#exp" className="mobileMenuListItem" >
                                                <FontAwesomeIcon className="iconClass" icon={faUser} />Skills
                                            </Nav.Link>
                                            */}
                                    <Nav.Link href="#contact" className="mobileMenuListItem" >
                                        <FontAwesomeIcon className="iconClass" icon={faEnvelope} />Contact Me
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </nav>
    )
}

export default Navbar2;