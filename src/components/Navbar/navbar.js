import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Nav_Links } from '../../constants';
import logo from '../../assets/icon.svg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gradient tracking-tight" onClick={closeMenu}>WY.</a>
                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8">
                    {Nav_Links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full glass border-t border-white/5 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {Nav_Links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="text-lg font-medium text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            {/* 
            <div className="desktopMenu">
                <img src={logo} alt="Logo" className='logo' />
                <Link activeClass="active" className="desktopMenuListItem" to="intro" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faHouse} />Home
                </Link>
                <Link activeClass="active" className="desktopMenuListItem" to="intro" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faUser} />About Me
                </Link>
                <Link activeClass="active" className="desktopMenuListItem" to="experiences" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faBriefcase} />Experience
                </Link>
                <Link activeClass="active" className="desktopMenuListItem" to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                    <FontAwesomeIcon className="iconClass" icon={faUser} />Skills
                </Link>
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
                                    <Nav.Link href="#experiences" className="mobileMenuListItem" >
                                        <FontAwesomeIcon className="iconClass" icon={faUser} />Skills
                                    </Nav.Link>
                                    <Nav.Link href="#contact" className="mobileMenuListItem" >
                                        <FontAwesomeIcon className="iconClass" icon={faEnvelope} />Contact Me
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
*/}
        </nav>
    )
}

export default Navbar2;