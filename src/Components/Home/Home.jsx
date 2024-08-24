import React from 'react';
import Navbar from '../Includes/Navbar';
import Filter from './Filter';
import Hero from './Hero';
import Mission from './Mission';
// Add other components like Hero, Footer if needed

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/> 
      <Filter/>
      <Mission/>
    </>
  )
}

export default Home;
