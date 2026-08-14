import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { FiBriefcase, FiArrowRight } from 'react-icons/fi';

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

    </div>
  );
};

export default Home;
