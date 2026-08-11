import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Import Images
import dl from '../Images/Filetransfer.webp';
import db from '../Images/Diabetes.webp';
import chat from '../Images/auth.webp';
import ecommerece from '../Images/ecommerce.webp';
import stat from '../Images/stat.webp';
const blogs = [
  {
    id: 'blog-1',
    title: 'Combining Total DSA + Github Stats across Platforms',
    link: 'https://dev.to/naman_2004/extracting-dsa-question-statistics-from-codolio-and-takeuforward-tuf-5g7o',
    date: 'January 2026',
    readTime: '7 min read',
    readMinutes: 7,
    description: 'A guide to aggregating DSA problem-solving stats from multiple platforms and GitHub contributions using APIs and web scraping.',
    image: stat,
  },
  {
    id: 'blog-5',
    title: 'Login-Free File Transfers (Depreceated)',
    date: 'August 2025',
    readTime: '3 min read',
    readMinutes: 3,
    description: 'Upload Files without login to google drive ',
    link: 'https://dev.to/naman_2004/secure-login-free-file-transfers-with-filestorage-1j99',
    image: dl,
  },
  {
    id: 'blog-2',
    title: 'Diabetes Prediction with ML on AWS',
    date: 'August 2025',
    readTime: '20 min read',
    readMinutes: 20,
    description: 'Predict Diabetes using ML models and deploy them on AWS',
    link: 'https://dev.to/naman_2004/diabetes-detection-on-aws-4fll',
    image: db,
  },
  {
    id: 'blog-4',
    title: 'E-Commerce Customer Segmentation',
    date: 'June 2025',
    readTime: '10 min read',
    readMinutes: 10,
    description: 'Analyzing customer behavior and creating segmentation clusters using Python, Scikit-learn, and Streamlit.',
    link: 'https://dev.to/naman_2004/-mall-customer-segmentation-streamlit-app-a-step-by-step-tutorial-4pm2',
    image: ecommerece,
  },
  {
    id: 'blog-3',
    title: 'Building a Real-Time Chat App',
    date: 'July 2025',
    readTime: '15 min read',
    readMinutes: 15,
    description: 'Learn how to construct a robust real-time chat application ',
    link: 'https://dev.to/naman_2004/build-a-secure-real-time-chat-app-in-minutes-with-react-clerk-and-stream-4a45',
    image: chat,
  }

];

function BlogSection() {
  return (
    <div id="blog-section">
      <div className="blog-container">

        {/* Premium Typography Header */}
        <div className="premium-section-header">
          <h2 className="premium-heading">Blog</h2>
        </div>

        {/* Blog List */}
        <div className="blog-list">
          {blogs.map((blog, index) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-list-item"
              style={{ '--i': index }}
            >
              <div className="blog-list-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="blog-list-info">
                <h3 className="blog-list-title">{blog.title}</h3>
                <p className="blog-list-desc">{blog.description}</p>
              </div>
              <div className="blog-list-meta">
                <span className="blog-list-date">{blog.date}</span>
                <span className="blog-list-read">{blog.readTime}</span>
              </div>
              <div className="blog-list-arrow">
                <FaExternalLinkAlt />
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BlogSection;