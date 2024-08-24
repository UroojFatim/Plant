import React from 'react';
import './CSS/Mission.css';
import img from '../../assets/Mission.jpg';

const Mission = () => {
    return (
        <div className="mission-container">
            <div className="mission-content">
                <h1 className="mission-heading">Our Mission</h1>
                <p className="mission-text">
                    We are dedicated to providing the highest quality plants and gardening products to help you create your perfect green space. Our mission is to inspire and support your passion for gardening with exceptional service and expertise.
                </p>
                <button className="btn btn-green btn-hover-effect"><span className='btn-text'>Learn More</span></button>
            </div>
        </div>
    );
}

export default Mission;
