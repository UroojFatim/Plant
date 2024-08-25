
import { Link } from 'react-router-dom';
import './Blogstyle.css';

// Import images
import plant1 from '../../assets/Blog/plant1.jpg';
import plant2 from '../../assets/Blog/Plant2 .jpg';
import plant3 from '../../assets/Blog/Plant3 .jpg';
import plant4 from '../../assets/Blog/plant4.jpg';
import Navbar from '../Includes/Navbar';
import Footer from '../Includes/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: plant1,
      heading: 'Aloe Vera Care',
      text: 'Learn how to care for Aloe Vera plants.',
      date: 'August 24, 2024',
    },
    {
      id: 2,
      imgSrc: plant2,
      heading: 'Succulent Tips',
      text: 'Tips for keeping your succulents healthy.',
      date: 'August 20, 2024',
    },
    {
      id: 3,
      imgSrc: plant3,
      heading: 'Indoor Plants',
      text: 'Best indoor plants for beginners.',
      date: 'August 18, 2024',
    },
    {
      id: 4,
      imgSrc: plant4,
      heading: 'Herb Gardening',
      text: 'Grow your own herbs at home.',
      date: 'August 15, 2024',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="cards-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.imgSrc} alt={post.heading} />
            <h2>{post.heading}</h2>
            <p>{post.text}</p>
            <p className="date">{post.date}</p>
            <Link to={`/blog/${post.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default BlogPage;
