import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { FiBriefcase, FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="page-content">
      <div className="glass-card" style={{ textAlign: 'center', marginBottom: '3rem', padding: '3.5rem 2rem' }}>
        <h1 style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>My Interview Journey</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          I have documented my interview experiences across various top companies. 
          Use these insights to prepare for your own technical interviews!
        </p>
      </div>

      <div className="experiences-grid">
        {experiences.map((exp) => (
          <div className="glass-card" key={exp.id} style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <h2 className="card-title">
              <FiBriefcase style={{ color: 'var(--accent)', fontSize: '1.2rem' }} /> {exp.company}
            </h2>
            <span className="card-role">{exp.role}</span>
            <p className="card-text">
              {exp.overview.substring(0, 110)}...
            </p>
            <Link to={`/experience/${exp.id}`} className="read-more-link">
              Read Full Experience <FiArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
