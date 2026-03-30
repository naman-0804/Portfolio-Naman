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
    <div className="page-content">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Back to all experiences
      </Link>

      <div className="glass-card">
        <div className="hero-box">
          <h1>{experience.company}</h1>
          <span className="card-role" style={{ fontSize: '1rem', padding: '0.4rem 1rem' }}>{experience.role}</span>
        </div>

        <div className="overview-box">
          <p style={{ margin: 0 }}>{experience.overview}</p>
        </div>

        <h2 className="section-heading">Interview Process</h2>
        <ul className="timeline">
          {experience.rounds.map((round, index) => {
            const splitIndex = round.indexOf(':');
            let roundTitle = round;
            let roundDesc = '';
            
            if (splitIndex !== -1) {
              roundTitle = round.substring(0, splitIndex).trim();
              roundDesc = round.substring(splitIndex + 1).trim();
            }

            return (
              <li className="timeline-item" key={index}>
                <strong>{roundTitle}</strong>
                {roundDesc}
              </li>
            );
          })}
        </ul>

        <h2 className="section-heading" style={{ marginTop: '4rem' }}>What to Focus On</h2>
        <ul className="tags-container">
          {experience.focusAreas.map((focus, index) => (
            <li className="tag" key={index}>{focus}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDetail;
