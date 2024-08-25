
import './Succlentstyle.css';

import succ1 from '../../../assets/Blog/suuc1.jpeg';
import succ2 from '../../../assets/Blog/succ2.jpg';
import succ3 from '../../../assets/Blog/succ3.png';
import Navbar from '../../Includes/Navbar';
import Footer from '../../Includes/Footer';

const blogPosts = [
  {
    id: 1,
    imgSrc: succ1,
    heading: 'Benefits of Succulent Plants',
    content: `
      Succulent plants offer a range of benefits beyond their unique and attractive appearance. Their ability to store water in their leaves makes them low-maintenance and drought-tolerant, ideal for busy or novice gardeners. Succulents also improve indoor air quality by filtering out toxins and releasing oxygen. Their diverse shapes and colors 
      make them versatile for home decor, adding a touch of greenery to any space while requiring minimal care.
    `,
  },
  {
    id: 2,
    imgSrc: succ2,
    heading: 'Proper Watering Techniques',
    content: `
   Succulent plants offer exceptional visual appeal with their diverse range of colors, shapes, and textures. Their unique geometric forms and vibrant hues can serve as focal points in any room. From the rosette shapes of Echeveria to the trailing
    vines of String of Pearls, succulents provide a variety of visual elements that enhance interior design.
    `,
  },
  {
    id: 3,
    imgSrc: succ3,
    heading: 'Succulent Plants for Home Decoration',
    content: `
    Succulent plants are a stylish choice for home decoration due to their unique shapes and vibrant colors. Their compact size and diverse forms make them perfect for various settings, from small tabletop arrangements to larger, eye-catching displays. Succulents can be used in creative ways, such as terrariums, hanging planters, or decorative pots, enhancing the aesthetic appeal of any room. Their low-maintenance nature adds a touch of greenery 
    without the need for frequent care, making them a practical and attractive option for interior design.
    `,
  },
];

const Succulent = () => {
  return (
    <>
    <Navbar/>
    <div className="blog-section">
      <h1>Tips for Keeping Your Succulents Healthy</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-container">
          <div className="image-container">
            <img src={post.imgSrc} alt={post.heading} />
          </div>
          <div className="text-container">
            <h2>About {post.heading}</h2>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
      <div className="reply-box">
        <h2>Leave a Comment</h2>
        <textarea placeholder="Write your reply here..."></textarea>
        <button type="submit">Submit</button>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Succulent;
