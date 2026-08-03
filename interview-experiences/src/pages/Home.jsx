import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { FiBriefcase, FiArrowRight, FiCode, FiCpu, FiCloud, FiAlertTriangle, FiExternalLink, FiPlay } from 'react-icons/fi';

const placementResources = {
  web: [
    {
      label: 'JavaScript — Full Course',
      url: 'https://www.youtube.com/playlist?list=PLrdDvCsCDu0GG0_qgNTcR7R6R95ad8x1X',
      type: 'Playlist'
    },
    {
      label: 'React JS — Complete Guide',
      url: 'https://www.youtube.com/playlist?list=PLrdDvCsCDu0Gdr-E7NlcFYaNPw29t7xmq',
      type: 'Playlist'
    },
    {
      label: 'Linking Express.js (API) to React',
      url: 'https://www.youtube.com/watch?v=PeuFbuzoseE',
      type: 'Video'
    },
    {
      label: 'Mongoose — MongoDB with API',
      url: 'https://www.youtube.com/watch?v=wgwo5hbY7SY',
      type: 'Video'
    }
  ],
  ml: [
    {
      label: 'Machine Learning — Part 1',
      url: 'https://youtu.be/ie4oGI85SAE?si=PIMhjLQg3aXU4jnS',
      type: 'Video'
    },
    {
      label: 'Machine Learning — Part 2',
      url: 'https://youtu.be/Eky8CZXapBQ?si=Z4uhlZMb3Y7y1EIU',
      type: 'Video'
    },
    {
      label: 'Deep Learning (Krish Naik)',
      url: 'https://youtu.be/d2kxUVwWWwU?si=VlHiFHHz_0cbnAqr',
      type: 'Video'
    },
    {
      label: 'NLP — Natural Language Processing (Krish Naik)',
      url: 'https://youtu.be/ENLEjGozrio?si=PJgYlMmDpVsP3QJz',
      type: 'Video'
    }
  ]
};

const Home = () => {
  return (
    <div className="page-content">
      {/* Hero */}
      <div className="glass-card home-hero">
        <h1>My Interview Journey</h1>
        <p>
          I have documented my interview experiences across various top companies. 
          Use these insights to prepare for your own technical interviews!
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="experiences-grid">
        {experiences.map((exp) => (
          <Link 
            to={`/experience/${exp.id}`} 
            className="glass-card" 
            key={exp.id} 
            style={{ display: 'flex', flexDirection: 'column', padding: '2rem', textDecoration: 'none', color: 'inherit' }}
          >
            <h2 className="card-title">
              <FiBriefcase style={{ color: 'var(--accent)', fontSize: '1.2rem' }} /> {exp.company}
            </h2>
            <span className="card-role">{exp.role}</span>
            <p className="card-text">
              {exp.overview.substring(0, 110)}...
            </p>
            <div className="read-more-link">
              Read Full Experience <FiArrowRight />
            </div>
          </Link>
        ))}
      </div>

      {/* General Placement Preparation Section */}
      <div className="placement-prep-section">
        <div className="prep-section-header">
          <h2>General Placement Preparation</h2>
          <p>
            Curated resources for full-stack development, machine learning, and cloud — 
            the skills most companies are actively looking for.
          </p>
        </div>

        <div className="prep-categories">
          {/* Web Development */}
          <div className="prep-category-card">
            <div className="prep-category-icon web">
              <FiCode />
            </div>
            <h3>Full-Stack Web Development</h3>
            <p>JavaScript, React, Express.js, and MongoDB — the MERN stack essentials.</p>
            <ul className="prep-resource-list">
              {placementResources.web.map((item, idx) => (
                <li key={idx}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                    <FiPlay />
                    <span className="prep-item-text">{item.label}</span>
                    <span className="prep-item-badge">{item.type}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ML / AI */}
          <div className="prep-category-card">
            <div className="prep-category-icon ml">
              <FiCpu />
            </div>
            <h3>Machine Learning & AI</h3>
            <p>ML fundamentals, deep learning, and NLP — high-demand skills across industries.</p>
            <ul className="prep-resource-list">
              {placementResources.ml.map((item, idx) => (
                <li key={idx}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                    <FiPlay />
                    <span className="prep-item-text">{item.label}</span>
                    <span className="prep-item-badge">{item.type}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud — AWS */}
          <div className="prep-category-card">
            <div className="prep-category-icon cloud">
              <FiCloud />
            </div>
            <h3>Cloud Computing (AWS)</h3>
            <p>AWS is asked by almost every company. Build a solid foundation in cloud services.</p>
            <ul className="prep-resource-list">
              <li>
                <a href="https://aws.amazon.com/training/digital/" target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                  <FiExternalLink />
                  <span className="prep-item-text">AWS Skill Builder — Official Free Training</span>
                  <span className="prep-item-badge">Free</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=k1RI5locZE4" target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                  <FiPlay />
                  <span className="prep-item-text">AWS Full Course — FreeCodeCamp</span>
                  <span className="prep-item-badge">Video</span>
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                  <FiExternalLink />
                  <span className="prep-item-text">AWS Certification Paths</span>
                  <span className="prep-item-badge">Cert</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* AWS Emphasis Banner */}
        <div className="aws-highlight">
          <FiAlertTriangle />
          <div className="aws-highlight-content">
            <h4>AWS is a Must-Have Skill</h4>
            <p>
              Almost every company asks about AWS in interviews — services like EC2, S3, Lambda, SNS, and IAM. 
              Focus extra time here. It's one of the highest-ROI skills for placement preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
