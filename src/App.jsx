import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Feedback from './Components/Feedback/Feedback';
// import About from './Components/';
import Catalog from './Components/Catalog/Catalog';
import Blog from './Components/Blog/Blog';
import Contact from './Components/ContactUs/ContactUs';
import Checkout from './Components/CheckOut/CheckOut';
import ProductDetail from './Components/Catalog/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
