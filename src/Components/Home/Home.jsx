import React from 'react';
import Navbar from '../Includes/Navbar';
import Filter from './Filter';
import Hero from './Hero';
import Mission from './Mission';
import Gallery from './Gallery';
import FeaturesSection from './FeaturesSection';
import TestimonialSlider from './TestimonialSlider';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/> 
      <Filter/>
      <Gallery/>
      <TestimonialSlider/>
      <Mission/>
      <FeaturesSection  
      />
    </>
  )
}

export default Home;
