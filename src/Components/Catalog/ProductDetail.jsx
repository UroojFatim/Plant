import React from 'react';
import { useParams } from 'react-router-dom';
import plantsData from '../../Data/PlantData.json';
import './CSS/ProductDetail.css'; // Ensure CSS file exists
import Navbar from "../Includes/Navbar";
import Footer from '../Includes/Footer';

const ProductDetail = () => {
  const { id } = useParams(); // Get the id from the URL
  const plant = plantsData.find(p => p.id === parseInt(id, 10)); // Find the plant with the matching id

  if (!plant) {
    return <div>Product not found</div>; // Show a message if the product is not found
  }

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-images">
          <img src={plant.image} alt={plant.name} className="main-product-image" />
          <div className="additional-images">
            {plant.additionalImages && plant.additionalImages.map((img, index) => (
              <img key={index} src={img} alt={`Additional view ${index + 1}`} className="additional-image" />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h1>{plant.name}</h1>
          <p><strong>Category:</strong> {plant.category}</p>
          <p><strong>Price:</strong> ₨ {plant.price}</p>
          <p><strong>Origin Country:</strong> {plant.originCountry || 'Unknown'}</p>
          <p><strong>Water Cycle:</strong> {plant.waterCycle || 'Unknown'}</p>
          <p><strong>Scientific Name:</strong> {plant.scientificName || 'Unknown'}</p>
          <p><strong>Description:</strong> {plant.description || 'No description available'}</p>
          <p><strong>Tags:</strong> {plant.tags ? plant.tags.join(', ') : 'No tags available'}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
