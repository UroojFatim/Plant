import React from 'react';
import { useParams } from 'react-router-dom';
import plantsData from '../../Data/PlantData.json';
import './CSS/ProductDetail.css'; // Ensure you have created this CSS file

const ProductDetail = () => {
    const { id } = useParams();
    const plant = plantsData.find(p => p.id === parseInt(id, 10));

    if (!plant) {
        return <div className="product-detail">Product not found</div>;
    }

    return (
        <div className="product-detail">
            <h1>{plant.name}</h1>
            <img src={plant.image} alt={plant.name} className="product-image" />
            <p><strong>Category:</strong> {plant.category}</p>
            <p><strong>Price:</strong> ₨ {plant.price}</p>
            <p><strong>Origin Country:</strong> {plant.originCountry || 'Unknown'}</p>
            <p><strong>Water Cycle:</strong> {plant.waterCycle || 'Unknown'}</p>
            <p><strong>Scientific Name:</strong> {plant.scientificName || 'Unknown'}</p>
            <p><strong>Description:</strong> {plant.description || 'No description available'}</p>
            <p><strong>Tags:</strong> {plant.tags ? plant.tags.join(', ') : 'No tags available'}</p>
            {/* Display additional images if available */}
            <div className="additional-images">
                {plant.additionalImages && plant.additionalImages.map((img, index) => (
                    <img key={index} src={img} alt={`Additional view ${index + 1}`} className="additional-image" />
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;
