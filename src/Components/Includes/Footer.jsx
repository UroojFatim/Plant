import React from "react";
import { Link } from 'react-router-dom';
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Plant Palace</h2>
        <ul className="footer-nav">
          <Link to = "/"><li>Home</li></Link>
          <Link to = "/catalog"><li>Shop</li></Link>
          <Link to = "/"><li>About</li></Link>
          <Link to = "/checkout"><li>CheckOut</li></Link>
          <Link to = "/blog"><li>Blog</li></Link>
          <Link to = "contact"><li>Contact</li></Link>
        </ul>
        <div className="social-icons">
          <a href="#twitter"><i className="fa fa-twitter"></i></a>
          <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="#dribbble"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2023 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
