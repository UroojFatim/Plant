import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/Navbar.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar container">
            <div className="navbar-left">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to = "/checkout">Check</Link>
            </div>
            <div className="navbar-center">
                <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link>
            </div>
            <div className="navbar-right">
                <input type="text" placeholder="Search..." className="search-bar" />
                <button className="btn btn-green btn-hover-effect">
                    <span className="btn-text">Cart</span>
                    <span className="btn-count">{0}</span>
                </button>
            </div>
            {/* Toggle Button for Mobile */}
            <div className={`navbar-toggler ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                &#9776; {/* Hamburger menu icon */}
            </div>
        </nav>
    );
};

export default Navbar;
