import { useParams, Navigate, Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { FiArrowLeft, FiClock, FiMapPin, FiTarget, FiInfo } from 'react-icons/fi';

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

      <div className="glass-card detail-card">
        <div className="hero-box">
          <h1 className="company-name">{experience.company}</h1>
          <span className="card-role highlight-role">{experience.role}</span>
        </div>

        <div className="stats-strip">
          <div className="stat-item">
            <FiTarget /> <span>{experience.details?.difficulty || 'Medium'}</span>
          </div>
          <div className="stat-item">
            <FiClock /> <span>{experience.details?.timeline || '1-2 Weeks'}</span>
          </div>
          <div className="stat-item">
            <FiMapPin /> <span>{experience.details?.mode || 'On-site'}</span>
          </div>
        </div>

        <div className="overview-box">
          <p className="experience-overview">{experience.overview}</p>
        </div>

        <h2 className="section-heading">Detailed Interview Process</h2>
        <div className="detailed-rounds">
          {(experience.details?.roundsBreakdown || []).map((round, index) => (
            <div className="round-detail-card" key={index}>
              <div className="round-header">
                <div className="round-badge">{index + 1}</div>
                <div className="round-title-group">
                  <h3 className="round-name">{round.name}</h3>
                  <div className="round-meta">
                    <span className="round-type">{round.type}</span>
                    <span className="round-dot">•</span>
                    <span className="round-time">{round.duration} mins</span>
                  </div>
                </div>
              </div>
              <div className="round-content">
                {Array.isArray(round.summary) ? (
                  <ul className="round-summary-list">
                    {round.summary.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="round-summary-text">{round.summary}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="extra-sections">
          <div className="prep-section">
            <h2 className="section-heading">Preparation Tips</h2>
            <ul className="tips-list">
              {experience.preparationTips.map((tip, index) => (
                <li key={index}><FiInfo className="tip-icon" /> {tip}</li>
              ))}
            </ul>
          </div>

          <div className="focus-section">
            <h2 className="section-heading">Key Focus Areas</h2>
            <div className="tags-container">
              {experience.focusAreas.map((focus, index) => (
                <span className="tag" key={index}>{focus}</span>
              ))}
            </div>
          </div>
        </div>

        {experience.additionalFeedback && experience.additionalFeedback.length > 0 && (
          <div className="feedback-section glass-card inner-card">
            <h2 className="section-heading">Candidate Advice</h2>
            <ul className="feedback-list">
              {experience.additionalFeedback.map((feedback, index) => (
                <li key={index}>{feedback}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetail;
