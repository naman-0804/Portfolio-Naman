import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { FiBriefcase } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      <div className="glass-card" style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1>My Interview Journey</h1>
        <p style={{fontSize: '1.2rem', color: 'var(--text-light)', opacity: 0.8}}>
          I have documented my interview experiences across various top companies. 
          Use these insights to prepare for your own technical interviews!
        </p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {experiences.map((exp) => (
          <div className="glass-card" key={exp.id} style={{padding: '1.5rem'}}>
            <h2 style={{fontSize: '1.4rem', marginTop: 0}}><FiBriefcase /> {exp.company}</h2>
            <h3 style={{fontSize: '1rem', color: '#0ea5e9', marginBottom: '1rem'}}>{exp.role}</h3>
            <p style={{fontSize: '0.95rem', marginBottom: '1.5rem', opacity: 0.9}}>
              {exp.overview.substring(0, 100)}...
            </p>
            <Link 
              to={`/experience/${exp.id}`}
              style={{
                display: 'inline-block',
                background: 'var(--primary-gradient)',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Read Full Experience
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
