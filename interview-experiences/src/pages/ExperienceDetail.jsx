import { useParams, Navigate, Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { FiArrowLeft } from 'react-icons/fi';

const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <Navigate to="/" />;
  }

  return (
    <div className="experience-detail">
      <Link to="/" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0ea5e9', textDecoration: 'none', marginBottom: '1.5rem', fontWeight: '500'}}>
        <FiArrowLeft /> Back to all experiences
      </Link>

      <div className="glass-card">
        <h1 style={{marginTop: 0, marginBottom: '0.5rem'}}>{experience.company}</h1>
        <h3 style={{color: 'var(--text-light)', opacity: 0.7, marginTop: 0, marginBottom: '2rem', fontSize: '1.2rem'}}>Role: {experience.role}</h3>

        <div style={{background: 'rgba(14, 165, 233, 0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9', marginBottom: '2.5rem'}}>
          <p style={{margin: 0, fontSize: '1.1rem'}}>{experience.overview}</p>
        </div>

        <h2 style={{fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border-light)', paddingBottom: '0.5rem'}}>Interview Process</h2>
        <ul className="rounds-list">
          {experience.rounds.map((round, index) => (
            <li key={index}><strong>{round.split(':')[0]}:</strong> {round.split(':')[1] || round}</li>
          ))}
        </ul>

        <h2 style={{fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border-light)', paddingBottom: '0.5rem', marginTop: '2.5rem'}}>What to Focus On</h2>
        <ul className="focus-list">
          {experience.focusAreas.map((focus, index) => (
            <li key={index}>{focus}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDetail;
