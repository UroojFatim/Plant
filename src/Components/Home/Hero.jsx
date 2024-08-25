import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import './CSS/Hero.css';
import slider1 from '../../assets/Hero/slider1.jpg';
import slider2 from '../../assets/Hero/slider2.jpg';
import slider3 from '../../assets/Hero/slider3.jpg';

const slides = [
  {
    image: slider1,
    heading: 'Discover Beautiful Plants',
    paragraph: 'Shop a wide variety of plants to bring life to your home.',
  },
  {
    image: slider2,
    heading: 'Elevate Your Space',
    paragraph: 'Find the perfect plants to enhance your living space.',
  },
  {
    image: slider3,
    heading: 'Easy Plant Care',
    paragraph: 'Get tips and advice for keeping your plants healthy and happy.',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero-container">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>{slide.heading}</h1>
              <p>{slide.paragraph}</p>
              <button className="btn btn-green btn-hover-effect">
               <Link to = "/catalog"><span className="btn-text">Shop Now</span></Link> 
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-arrows">
        <div className="arrow left" onClick={goToPreviousSlide}>
          &#10094;
        </div>
        <div className="arrow right" onClick={goToNextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Hero;