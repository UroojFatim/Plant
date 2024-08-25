import { useState } from 'react';
import './Feedback.css';
import Navbar from '../Includes/Navbar'
import logo from '../../assets/Logo.png';

function FeedbackForm() {
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        ratingInfo: 0,
        ratingDesign: 0,
        improvement: '',
        comment: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        setFormVisible(false);  // Close the form after submission
    };

    return (
        <div className='Possition'>
            <Navbar/>
            <button 
                className="feedbackhome "
                style={{
                    position: 'fixed',
                    top: '50%',
                    right: '0',
                    transform: 'translateY(-50%)',
                    padding: '10px 20px',
                    backgroundColor: 'green',
                    color: '#fff',
                    border: 'none',
                    borderRadius:'20px 0px 0px 20px',
                    cursor: 'pointer'
                  }}
                onClick={() => setFormVisible(true)}
            >
                Feedback
            </button>

            {formVisible && (
                <div className="form-overlay" onClick={() => setFormVisible(false)}>
                    <div className="feedback-form" onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', marginTop: '10px', paddingTop: '10px' }}>
                                <img src={logo} alt="Plant Palace Logo" className="feedback_logo" />
                                <h2 style={{ fontSize: '15px', margin: '20px 70px' }}>We Value Your Thoughts</h2>
                            </div>
                            <p>Thanks for helping us grow!</p>
                            
                            <label>Rate our plant care tips:</label>
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => handleRatingChange('ratingInfo', star)}
                                        className={formData.ratingInfo >= star ? 'active' : ''}
                                        style={{ color: formData.ratingInfo >= star ? '#32CD32' : '#ccc' }} // Green star when active
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            <label>Rate our blog section:</label>
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => handleRatingChange('ratingDesign', star)}
                                        className={formData.ratingDesign >= star ? 'active' : ''}
                                        style={{ color: formData.ratingDesign >= star ? '#32CD32' : '#ccc' }} // Green star when active
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            <label>What would you like to see more of?</label>
                            <div className="improvement-options">
                                {['video', 'images', 'infographic', 'summary', 'other'].map((option) => (
                                    <label key={option}>
                                        <input
                                            type="radio"
                                            name="improvement"
                                            value={option}
                                            onChange={handleInputChange}
                                        />{' '}
                                        {option === 'video' && 'Videos'}
                                        {option === 'images' && 'Images'}
                                        {option === 'infographic' && 'Infographics'}
                                        {option === 'summary' && 'Summaries'}
                                        {option === 'other' && 'Other'}
                                    </label>
                                ))}
                            </div>

                            <label>Share your thoughts:</label>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                                placeholder="Type your comment..."
                            ></textarea>
                            
                            <button type="submit" className='feedback_btn'> Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeedbackForm;
