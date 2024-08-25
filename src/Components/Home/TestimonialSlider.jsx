import React, { useState, useEffect } from 'react';
import './CSS/TestimonialSlider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import pic from "../../assets/Testimonals/img.JPG";

// Dummy testimonials
const testimonials = [
  {
    name: 'Alice Johnson',
    comment: '“Plant Palace has transformed my home with their beautiful selection of plants! Highly recommend.”',
    stars: 5
  },
  {
    name: 'Bob Smith',
    comment: '“Excellent service and quality plants. The customer support was very helpful.”',
    stars: 4
  },
  {
    name: 'Charlie Davis',
    comment: '“Amazing variety and great prices. I will definitely shop here again.”',
    stars: 5
  },
  {
    name: 'Diana Lee',
    comment: '“The plants arrived in perfect condition and are thriving beautifully. Thank you, Plant Palace!”',
    stars: 5
  },
  {
    name: 'Evan Brown',
    comment: '“Fast delivery and healthy plants. A great experience from start to finish.”',
    stars: 4
  },
  {
    name: 'Bob Smith',
    comment: '“Excellent service and quality plants. The customer support was very helpful.”',
    stars: 4
  },
  {
    name: 'Charlie Davis',
    comment: '“Amazing variety and great prices. I will definitely shop here again.”',
    stars: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <h2 className="slider-heading">Our Happy Customers</h2>
      <div className="flex">
        <img src={pic} alt="Succulents" />
        <div className="slider-wrapper">
          <div
            className="slider-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="comment">{testimonial.comment}</p>
                <p className="name">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
