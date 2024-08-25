
import './Indoorstyle.css';

import Indoor1 from '../../../assets/Blog/Indoor1.png';
import Indoor2 from '../../../assets/Blog/Indoor2.png';
import Indoor3 from '../../../assets/Blog/Indoor3.png';
import Navbar from '../../Includes/Navbar';
import Footer from '../../Includes/Footer';

const blogPosts = [
  {
    id: 1,
    imgSrc: Indoor1,
    heading: 'Fiddle Leaf',
    content: `
    The Fiddle Leaf Fig (Ficus lyrata) is a popular indoor plant known for its
     large, glossy leaves and striking appearance. It thrives in bright, indirect
      light and adds a touch of elegance to any room. Regular watering and occasionaldusting of its leaves will keep the
     plant healthy and vibrant. Its dramatic foliage makes it a standout choice for enhancing indoor decor.
    `,
  },
  {
    id: 2,
    imgSrc: Indoor2,
    heading: 'ZZ Plant: A Low-Maintenance Indoor Favorite',
    content: `
     The ZZ Plant (Zamioculcas zamiifolia) is a hardy, low-maintenance indoor plant known for its glossy, dark green leaves and resilience. It thrives in a variety of light conditions, from low light to bright, indirect sunlight, and requires infrequent watering, making it ideal for busy or beginner gardeners. Its ability to tolerate drought and neglect, along with
     its air-purifying qualities, makes the ZZ Plant a popular choice for adding greenery to any indoor space.
    `,
  },
  {
    id: 3,
    imgSrc: Indoor3,
    heading: 'Benefits of Indoor Plants for Your Home',
    content: `
      Indoor plants enhance your living space by improving air quality and adding a touch of nature to your decor. They can boost mood and productivity by creating a calming environment and reducing stress. Additionally, indoor plants help maintain humidity levels and can even absorb harmful toxins from the air. 
      With minimal maintenance, they bring vibrant greenery and a sense of tranquility to any room.
    `,
  },
];

const Indoor = () => {
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

export default Indoor;
