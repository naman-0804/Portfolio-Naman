// BlogSection.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import dl from '../Images/Filetransfer.png';
import db from '../Images/Diabetes.png';
const blogs = [
  {
    id: 'blog-1',
    title: 'Secure, Login-Free File Transfers with File_Storage',
    description: 'Learn how I built a secure file transfer service using File_Storage, enabling users to send files without login hassles.',
    date: 'August 2025',
    readTime: '3 min read',
    link: 'https://dev.to/naman_2004/secure-login-free-file-transfers-with-filestorage-1j99',
    image: dl,
  },
  {
    id: 'blog-2',
    title: 'Diabetes Prediction with ML on AWS',
    description: 'Explore how I made a diabetes prediction model using AWS services',
    date: 'August 2025',
    readTime: '20 min read',
    link: 'https://dev.to/naman_2004/diabetes-detection-on-aws-4fll',
    image: db,
  },
];

function BlogSection() {
  return (
    <div className="blog-section">
      <div className="project-header">
        <h1>Blogs</h1>
        <p>Case studies, technical breakdowns & behind-the-scenes of my projects</p>
      </div>

      <div className="project-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="project-item">
            <div className="project-image-container">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="project-info">
              <div>
                <h3>{blog.title}</h3>
                <p className="blog-meta">
                  {blog.date} {blog.readTime && `• ${blog.readTime}`}
                </p>
              </div>
              {blog.link && (
                <button
                  className="icon-button github-btn"
                  onClick={() => window.open(blog.link, '_blank')}
                  aria-label="Read Blog"
                >
                  <FaExternalLinkAlt />
                </button>
              )}
            </div>
            <div className="project-description">
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
