
import './Aloverastyle.css';

import Alo1 from '../../../assets/Blog/alo1.jpg';
import Alo2 from '../../../assets/Blog//alo1.jpg';
import Alo3 from '../../../assets/Blog/alo1.jpg';
import Navbar from '../../Includes/Navbar';
import Footer from '../../Includes/Footer';

const blogPosts = [
  {
    id: 1,
    imgSrc: Alo1,
    heading: 'Aloe Vera Care',
    content: `
    Aloe Vera is a succulent plant species from the genus Aloe, renowned for its
     versatility and benefits. It naturally grows in tropical climates worldwide
      and is valued for both its agricultural and medicinal uses. The plant’s gel
       is commonly used in skincare products due to its soothing properties. Additionally,
        Aloe Vera's striking appearance makes it a popular choice for indoor decoration. 
        Its ease of care and adaptability make it an ideal potted plant for home environments.
    `,
  },
  {
    id: 2,
    imgSrc: Alo2,
    heading: 'Proper Watering Techniques',
    content: `
    Watering Aloe Vera correctly is crucial for its health. As a succulent,
     Aloe Vera stores water in its leaves and requires less frequent watering 
     than other plants. Water the plant deeply, ensuring that the soil is thoroughly 
     moistened. After watering, allow the soil to dry out completely before watering again.
      Overwatering can lead to root rot, so it’s essential to let the soil dry between waterings.
     During the winter months, reduce watering as the plant’s growth slows down.
    `,
  },
  {
    id: 3,
    imgSrc: Alo3,
    heading: 'Aloe Vera for Skincare',
    content: `
  Aloe Vera is renowned for its soothing and healing properties, making
   it a popular choice in skincare. Its gel, rich in vitamins and antioxidants, 
   helps to hydrate and calm irritated skin. It can be applied directly to minor
    burns, cuts, or sunburns for relief and accelerated healing. Additionally,
     Aloe Vera gel is often used to moisturize and reduce the appearance of acne.
      For best results, apply the gel to clean skin and allow it to absorb fully before
       applying other products.
    `,
  },
];

const Alovera = () => {
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

export default Alovera;
