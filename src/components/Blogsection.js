import React from 'react';

// Import Images
import dl from '../Images/Filetransfer.png';
import db from '../Images/Diabetes.png';
import chat from '../Images/auth.png';
import ecommerece from '../Images/ecommerce.png';

const blogs = [
  {
    id: 'blog-1',
    title: 'Secure, Login-Free File Transfers with File_Storage',
    date: 'August 2025',
    readTime: '3 min read',
    description: 'A deep dive into building a secure, anonymous file transfer tool using Google Cloud Platform and Flask.',
    link: 'https://dev.to/naman_2004/secure-login-free-file-transfers-with-filestorage-1j99',
    image: dl,
  },
  {
    id: 'blog-2',
    title: 'Diabetes Prediction with ML on AWS',
    date: 'August 2025',
    readTime: '20 min read',
    description: 'Step-by-step guide to deploying a machine learning model for healthcare prediction on AWS infrastructure.',
    link: 'https://dev.to/naman_2004/diabetes-detection-on-aws-4fll',
    image: db,
  },
  {
    id: 'blog-3',
    title: 'Building a Real-Time Chat App',
    date: 'July 2025',
    readTime: '15 min read',
    description: 'Learn how to construct a robust real-time chat application using React, Clerk authentication, and GetStream.',
    link: 'https://dev.to/naman_2004/build-a-secure-real-time-chat-app-in-minutes-with-react-clerk-and-stream-4a45',
    image: chat,
  },
  {
    id: 'blog-4',
    title: 'E-Commerce Customer Segmentation',
    date: 'June 2025',
    readTime: '10 min read',
    description: 'Analyzing customer behavior and creating segmentation clusters using Python, Scikit-learn, and Streamlit.',
    link: 'https://dev.to/naman_2004/-mall-customer-segmentation-streamlit-app-a-step-by-step-tutorial-4pm2',
    image: ecommerece,
  }
];

function BlogSection() {
  return (
    <div id="blog-section">
      <div className="blog-container">
        
        {/* Header Section */}
        <h1 className="section-title">Blogs</h1>
        <p className="section-subtitle">
          Case studies, technical breakdowns & behind-the-scenes of my projects
        </p>

        {/* Grid Section */}
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              
              {/* Image Thumbnail */}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-image-container"
              >
                <img src={blog.image} alt={blog.title} />
              </a>

              {/* Card Content */}
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{blog.date}</span>
                  {blog.readTime && <span>• {blog.readTime}</span>}
                </div>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-title"
                >
                  <h3>{blog.title}</h3>
                </a>

                <p className="blog-description">
                  {blog.description || "Read more about this project on my Dev.to profile."}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BlogSection;