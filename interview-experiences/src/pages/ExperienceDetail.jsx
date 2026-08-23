import { useParams, Navigate, Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import {
  FiArrowLeft, FiClock, FiMapPin, FiTarget, FiInfo,
  FiExternalLink, FiBookOpen, FiCheckCircle, FiTrendingUp,
  FiAlertCircle, FiZap, FiAward
} from 'react-icons/fi';

const statusConfig = {
  'Selected': { icon: <FiCheckCircle />, className: 'status-selected' },
  'In Progress': { icon: <FiTrendingUp />, className: 'status-in-progress' },
};

const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <Navigate to="/" />;
  }

  const status = statusConfig[experience.status] || { icon: <FiAlertCircle />, className: '' };

  return (
    <div className="page-content">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Back to all experiences
      </Link>

      <div className="detail-card">
        {/* Hero Section */}
        <div className="hero-box">
          <div className="hero-top-row">
            <span className="detail-eyebrow">// Interview Experience</span>
            {experience.status && (
              <span className={`detail-status-badge ${status.className}`}>
                {status.icon}
                {experience.status}
              </span>
            )}
          </div>
          <h1 className="company-name">{experience.company}</h1>
          <span className="highlight-role">{experience.role}</span>
        </div>

        {/* Stats Strip */}
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
          {experience.details?.appliedVia && (
            <div className="stat-item">
              <FiExternalLink /> <span>{experience.details.appliedVia}</span>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="overview-box">
          <p className="experience-overview">{experience.overview}</p>
        </div>

        {/* Detailed Rounds */}
        <div className="detail-section-block">
          <div className="detail-section-label">
            <FiZap className="section-label-icon" />
            <h2 className="section-heading">Detailed Interview Process</h2>
          </div>
          <div className="detailed-rounds">
            {(experience.details?.roundsBreakdown || []).map((round, index) => (
              <div
                className="round-detail-card"
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="round-header">
                  <div className="round-badge">{index + 1}</div>
                  <div className="round-title-group">
                    <h3 className="round-name">{round.name}</h3>
                    <div className="round-meta">
                      <span className="round-type-badge">{round.type}</span>
                      <span className="round-difficulty-badge" data-diff={round.difficulty?.toLowerCase()}>
                        {round.difficulty}
                      </span>
                      <span className="round-time">
                        <FiClock /> {round.duration} mins
                      </span>
                      {round.mode && (
                        <span className="round-mode">
                          <FiMapPin /> {round.mode}
                        </span>
                      )}
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
        </div>

        {/* Tips & Focus Areas */}
        <div className="extra-sections">
          <div className="prep-section">
            <div className="detail-section-label">
              <FiInfo className="section-label-icon" />
              <h2 className="section-heading">Preparation Tips</h2>
            </div>
            <ul className="tips-list">
              {experience.preparationTips.map((tip, index) => (
                <li key={index}>
                  <span className="tip-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="focus-section">
            <div className="detail-section-label">
              <FiTarget className="section-label-icon" />
              <h2 className="section-heading">Key Focus Areas</h2>
            </div>
            <div className="tags-container">
              {experience.focusAreas.map((focus, index) => (
                <span className="tag" key={index}>{focus}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Candidate Advice */}
        {experience.additionalFeedback && experience.additionalFeedback.length > 0 && (
          <div className="advice-card">
            <div className="advice-header">
              <div className="advice-icon-wrap">
                <FiAward />
              </div>
              <h2 className="advice-title">Insights and takeaways from my experience</h2>
            </div>
            <div className="advice-body">
              {experience.additionalFeedback.map((feedback, index) => (
                <div className="advice-item" key={index}>
                  <span className="advice-marker">{String(index + 1).padStart(2, '0')}</span>
                  <p>{feedback}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer Note */}
        {experience.disclaimerNote && (
          <div className="mandatory-note" style={{ marginTop: '0', marginBottom: '2rem' }}>
            <div className="mandatory-note-icon"><FiAlertCircle /></div>
            <div className="mandatory-note-content">
              <strong>Note: </strong>{experience.disclaimerNote}
            </div>
          </div>
        )}

        {/* Support Materials */}
        {experience.supportMaterials && experience.supportMaterials.length > 0 && (
          <div className="support-materials">
            <div className="detail-section-label">
              <FiBookOpen className="section-label-icon" />
              <h2 className="section-heading">Support Material</h2>
            </div>
            <div className="resource-links">
              {experience.supportMaterials.map((material, index) => (
                <a
                  key={index}
                  href={material.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <FiExternalLink />
                  <span>{material.label}</span>
                  <span className="resource-badge">{material.type}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetail;
