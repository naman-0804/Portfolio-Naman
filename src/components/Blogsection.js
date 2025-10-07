  // BlogSection.jsx
  import React from 'react';
  import dl from '../Images/Filetransfer.png';
  import db from '../Images/Diabetes.png';
  import chat from '../Images/auth.png';

  const blogs = [
    {
      id: 'blog-1',
      title: 'Secure, Login-Free File Transfers with File_Storage',
      date: 'August 2025',
      readTime: '3 min read',
      link: 'https://dev.to/naman_2004/secure-login-free-file-transfers-with-filestorage-1j99',
      image: dl,
    },
    {
      id: 'blog-2',
      title: 'Diabetes Prediction with ML on AWS',
      date: 'August 2025',
      readTime: '20 min read',
      link: 'https://dev.to/naman_2004/diabetes-detection-on-aws-4fll',
      image: db,
    },
    {
      id: 'blog-3',
      title: 'Building a Real-Time Chat App with React , Clerk & GetStream',
      date: 'July 2025',
      readTime: '15 min read',
      link: 'https://dev.to/naman_2004/build-a-secure-real-time-chat-app-in-minutes-with-react-clerk-and-stream-4a45',
      image: chat,
    },
  ];

  function BlogSection() {
    return (
      <div className="blog-section">
        <div className="project-header">
          <h1>Blogs</h1>
          <div className="section-underline"></div>
          <br></br>
          <p>Case studies, technical breakdowns & behind-the-scenes of my projects</p>
        </div>

        <div className="project-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="project-item">
              {/* Thumbnail clickable */}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-container"
              >
                <img src={blog.image} alt={blog.title} />
              </a>

              <div className="project-info">
                <div>
                  {/* Title clickable */}
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-title-link"
                  >
                    <h3>{blog.title}</h3>
                  </a>
                  <p className="blog-meta">
                    {blog.date} {blog.readTime && `• ${blog.readTime}`}
                  </p>
                </div>
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
