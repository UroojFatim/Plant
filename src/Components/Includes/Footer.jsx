import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Plant Palace</h2>
        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#agent">Agent</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#listing">Listing</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
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
