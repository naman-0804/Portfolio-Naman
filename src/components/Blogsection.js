import React from 'react';

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
    title: 'Secure, Login-Free File Transfers with File_Storage',
    date: 'August 2025',
    readTime: '3 min read',
    readMinutes: 3,
    description: 'A deep dive into building a secure, anonymous file transfer tool using Google Cloud Platform and Flask.',
    link: 'https://dev.to/naman_2004/secure-login-free-file-transfers-with-filestorage-1j99',
    image: dl,
  },
  {
    id: 'blog-2',
    title: 'Diabetes Prediction with ML on AWS',
    date: 'August 2025',
    readTime: '20 min read',
    readMinutes: 20,
    description: 'Step-by-step guide to deploying a machine learning model for healthcare prediction on AWS infrastructure.',
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
    description: 'Learn how to construct a robust real-time chat application using React, Clerk authentication, and GetStream.',
    link: 'https://dev.to/naman_2004/build-a-secure-real-time-chat-app-in-minutes-with-react-clerk-and-stream-4a45',
    image: chat,
  }

];

// Max read time for progress bar scaling
const maxReadMinutes = Math.max(...blogs.map(b => b.readMinutes));

function BlogSection() {
  return (
    <div id="blog-section">
      <div className="blog-container">

        {/* Premium Typography Header */}
        <div className="premium-section-header">
          <h2 className="premium-heading">Blog</h2>

        </div>

        {/* Editorial Grid */}
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              style={{
                '--i': index,
                '--read-progress': `${(blog.readMinutes / maxReadMinutes) * 100}%`,
              }}
              data-number={String(index + 1).padStart(2, '0')}
            >
              {/* Image section */}
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} loading="lazy" />
                <span className="blog-number">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Card Content */}
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{blog.date}</span>
                  {blog.readTime && <span>• {blog.readTime}</span>}
                </div>

                <h3 className="blog-title">{blog.title}</h3>

                <p className="blog-description">
                  {blog.description || "Combining DSA problem-solving stats from multiple platforms and GitHub contributions using APIs and web scraping."}
                </p>

                <span className="blog-read-link">
                  Read article →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BlogSection;