import React from 'react';
import './navbar.css';
import logo from '../../assets/icon.svg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
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
        </nav>
    )
}

export default Navbar;