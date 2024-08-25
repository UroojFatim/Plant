import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Includes/Navbar';
import './CSS/Catalog.css';
import plantsData from '../../Data/PlantData.json';
import Footer from '../Includes/Footer';

const Catalog = () => {
    const [filter, setFilter] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Extract filter from URL query parameters
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        if (category) {
            setFilter(category);
        }
    }, [location.search]);

    const handleFilterChange = (category) => {
        navigate(`/catalog?category=${category}`);
    };

    const handleClearFilter = () => {
        navigate('/catalog');
        setFilter('');
        setMinPrice('');
        setMaxPrice('');
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const handlePriceRangeChange = (event) => {
        const { name, value } = event.target;
        if (name === 'minPrice') {
            setMinPrice(value);
        } else if (name === 'maxPrice') {
            setMaxPrice(value);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    const sortedAndFilteredPlants = plantsData
        .filter(plant => {
            const price = plant.price;
            const min = minPrice ? parseFloat(minPrice) : 0;
            const max = maxPrice ? parseFloat(maxPrice) : Infinity;
            return (
                (!filter || plant.category.toLowerCase() === filter.toLowerCase()) &&
                price >= min &&
                price <= max
            );
        })
        .sort((a, b) => {
            if (sortOption === 'priceAsc') {
                return a.price - b.price;
            } else if (sortOption === 'priceDesc') {
                return b.price - a.price;
            } else if (sortOption === 'alphabetical') {
                return a.name.localeCompare(b.name);
            } else if (sortOption === 'popular') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

    return (
        <>
            <Navbar />

            {/* Shop Section  */}
            <div className="shop-section">
                <div className="flex-column">
                <h1 className="shop-title">Shop{filter && ` / ${filter.charAt(0).toUpperCase() + filter.slice(1)} Plants`}</h1>
                <div className="shop-categories">
                    {/* Category circles */}
                    <div className="shop-category-circle" onClick={() => handleFilterChange('indoor')}>
                        <img src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-10.jpg" alt="Indoor" />
                        <span>Indoor</span>
                    </div>
                    <div className="shop-category-circle" onClick={() => handleFilterChange('outdoor')}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCekc-VnIvJUGsjNBxBoJ1CMBRoxNfVL4CwQ&s" alt="Outdoor" />
                        <span>Outdoor</span>
                    </div>
                    <div className="shop-category-circle" onClick={() => handleFilterChange('succulents')}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8CEfwvRlwJIfleo3rEVAww2M6AJacjFpTRo_9Hqr2D2ckg2bxwMgFS3X55Tt7vLHNmU&usqp=CAU" alt="Succulents" />
                        <span>Succulents</span>
                    </div>
                    <div className="shop-category-circle" onClick={() => handleFilterChange('flowering shrubs')}>
                        <img src="https://www.marthastewart.com/thmb/oGRSxlyzX_UQG3pLRa6PlgQGWcY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/15-flowering-shrubs-make-garden-look-like-painting-Camellia-hero-getty-1223-93e5d9c905994b23ab690f41f1972a02.jpg" alt="Flowering Shrubs" />
                        <span>Flowering Shrubs</span>
                    </div>
                    <div className="shop-category-circle" onClick={() => handleFilterChange('herbs')}>
                        <img src="https://www.southernliving.com/thmb/meAHVDAwG4ArHdPbRcMPrDrg0Eg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1317766855-141c13b245d142e1bfd5f41d5ddd79a7.jpg" alt="Herbs" />
                        <span>Herbs</span>
                    </div>
                </div>
                <button className="btn btn-green btn-hover-effect" onClick={handleClearFilter}><span className='btn-text'>← Back</span></button>
                </div>
            </div>

            {/* Other Sections  */}
            <div className="catalog-container">
                {/* Sorting  */}
                <div className="sorting-section">
                    <h2>Sort</h2>
                    <div className="sort-buttons">
                        <button onClick={() => handleSortChange('priceAsc')} className='btn btn-green btn-hover-effect'><span className='btn-text'>Price: Low to High</span></button>
                        <button onClick={() => handleSortChange('priceDesc')} className='btn btn-green btn-hover-effect'><span className='btn-text'>Price: High to Low</span></button>
                        <button onClick={() => handleSortChange('alphabetical')} className='btn btn-green btn-hover-effect'><span className='btn-text'>Alphabetical</span></button>
                        <button onClick={() => handleSortChange('popular')} className='btn btn-green btn-hover-effect'><span className='btn-text'>Most Popular</span></button>
                    </div>
                    <div className="price-range">
                        <label htmlFor="minPrice">Min Price:</label>
                        <input 
                            type="number" 
                            id="minPrice" 
                            name="minPrice" 
                            value={minPrice} 
                            onChange={handlePriceRangeChange} 
                            placeholder="200" 
                        />
                        <label htmlFor="maxPrice">Max Price:</label>
                        <input 
                            type="number" 
                            id="maxPrice" 
                            name="maxPrice" 
                            value={maxPrice} 
                            onChange={handlePriceRangeChange} 
                            placeholder="300" 
                        />
                    </div>
                </div>

                {/* Products  */}
                <div className="catalog-items-section">
                    <div className="catalog-grid">
                        {sortedAndFilteredPlants.map((plant) => (
                            <div 
                                key={plant.id} 
                                className="catalog-item"
                                onClick={() => handleProductClick(plant.id)}
                            >
                                <img src={plant.image} alt={plant.name} className="catalog-image" />
                                <h3>{plant.name}</h3>
                                <p>{plant.category}</p>
                                <p>₨ {plant.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Catalog;
