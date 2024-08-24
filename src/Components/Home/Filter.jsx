import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Filter.css';
import Indoor from "../../assets/Filter Section/indoor.jpg"
import Outdoor from "../../assets/Filter Section/outdoor.jpg"
import Succulents from "../../assets/Filter Section/succulents.jpg"
import Herbs from "../../assets/Filter Section/herbs.jpg"
import FloweringShrubs from "../../assets/Filter Section/floweringShrubs.jpg"

const Filter = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/catalog?category=${category}`);
    };

    return (
        <div className="filter-section">
            <div className="category-circle" onClick={() => handleCategoryClick('indoor')}>
                <img src={Indoor} alt="Indoor" />
                <span>Indoor</span>
            </div>
            <div className="category-circle" onClick={() => handleCategoryClick('outdoor')}>
                <img src={Outdoor} alt="Outdoor" />
                <span>Outdoor</span>
            </div>
            <div className="category-circle" onClick={() => handleCategoryClick('succulents')}>
                <img src={Succulents} alt="Succulents" />
                <span>Succulents</span>
            </div>
            <div className="category-circle" onClick={() => handleCategoryClick('flowering shrubs')}>
                <img src= {FloweringShrubs} alt="Flowering Shrubs" />
                <span>Flowering Shrubs</span>
            </div>
            <div className="category-circle" onClick={() => handleCategoryClick('herbs')}>
                <img src= {Herbs} alt="Herbs" />
                <span>Herbs</span>
            </div>
        </div>
    );
};

export default Filter;
