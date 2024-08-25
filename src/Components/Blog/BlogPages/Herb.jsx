
import './Herbstyle.css';

import garden1 from '../../../assets/Blog/Garden1.png';
import garden2 from '../../../assets/Blog/Garden2.png';
import garden3 from '../../../assets/Blog/Garden3.png';
import Navbar from '../../Includes/Navbar';
import Footer from '../../Includes/Footer';

const blogPosts = [
  {
    id: 1,
    imgSrc: garden1,
    heading: 'Benefits of Mint for Health and Wellness',
    content: `
      Mint is a versatile herb with numerous health benefits. 
      Its soothing properties can aid in digestion and alleviate symptoms 
      of indigestion and nausea. The menthol in mint provides a cooling
       sensation and can help relieve headaches and respiratory issues.
        Additionally, mint's antimicrobial properties make it effective in 
        oral care, helping to freshen breath and reduce oral bacteria. 
        It also has antioxidant benefits, which contribute to overall
         wellness and help combat oxidative stress.
    `,
  },
  {
    id: 2,
    imgSrc: garden2,
    heading: 'Benefits of Parsley for Health',
    content: `
      Parsley is more than just a garnish it's packed with health benefits. 
      Rich in vitamins A, C, and K, parsley supports immune function and promotes
       healthy skin. Its high antioxidant content helps combat free radicals and 
       reduce inflammation. Parsley also aids in digestion by acting as a natural
        diuretic and can help freshen breath. Additionally, the herb contains essential nutrients 
      like iron and folate, which are beneficial for overall health and well-being.
    `,
  },
  {
    id: 3,
    imgSrc: garden3,
    heading: 'Benefits of Dill Herb for Health',
    content: `
     Dill is a flavorful herb with a range of health benefits. It is rich in antioxidants,
      which help protect cells from oxidative damage and support overall health. Dill has
       antimicrobial properties that can aid in digestion and promote a healthy gut. Its
        compounds may also help alleviate symptoms of indigestion and bloating. Additionally,
         dill is a good source of essential nutrients like vitamins A and C, and minerals such as
      calcium and magnesium, contributing to overall wellness and supporting bone health.
    `,
  },
];

const Herb = () => {
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

export default Herb;
