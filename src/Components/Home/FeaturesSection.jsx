import React from 'react';
import { FaHome, FaUndo, FaCreditCard, FaHeadset } from 'react-icons/fa'; // Example icons, replace as needed
import "./CSS/featuresSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-heading">Our Key Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <FaHome size={40} color="#67a148" />
          <h3>Home Delivery</h3>
          <p>Delivery service in all cities</p>
        </div>
        <div className="feature-card">
          <FaUndo size={40} color="#67a148" />
          <h3>Immediate Return</h3>
          <p>If plants have problem</p>
        </div>
        <div className="feature-card">
          <FaCreditCard size={40} color="#67a148" />
          <h3>Easy Payment</h3>
          <p>COD or online payment</p>
        </div>
        <div className="feature-card">
          <FaHeadset size={40} color="#67a148" />
          <h3>24/7 Support</h3>
          <p>Expert assistance anytime</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
