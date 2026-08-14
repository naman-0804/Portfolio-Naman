import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import {
  FiBriefcase, FiArrowRight, FiBookOpen, FiCloud, FiCpu,
  FiFileText, FiPlay, FiExternalLink, FiCode, FiLayers,
  FiTarget, FiClock, FiMapPin, FiCheckCircle, FiTrendingUp
} from 'react-icons/fi';

const prepSections = [
  {
    icon: <FiLayers />,
    title: 'Striver (TUF+)',
    description: 'Grouped Striver / TUF+ resources I referenced: DSA A2Z, OOPs, and Data Engineering.',
    accent: 'web',
    resources: [
      {
        label: "Striver's A to Z DSA Sheet",
        url: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z',
        type: 'Sheet'
      },
      {
        label: 'TUF+ OOPs — Java Basics (Python approach)',
        url: 'https://takeuforward.org/plus/oops/introduction-to-oops/java-basics?subject=oops&approach=python',
        type: 'TUF+'
      },
      {
        label: 'TUF+ — SQL & Data Engineering Foundations (Getting Started)',
        url: 'https://takeuforward.org/plus/sql-data-engineering-foundations/getting-started/introduction-to-sql?subject=sql-data-engineering-foundations',
        type: 'TUF+'
      },
      {
        label: 'TUF+ — Computer Networks (Why Networks Exist)',
        url: 'https://takeuforward.org/plus/computer-networks-by-striver/module-1-cn-foundations/why-networks-exists?subject=computer-networks-by-striver&sidebar=open',
        type: 'TUF+'
      }
    ]
  },
  {
    icon: <FiCpu />,
    title: 'Complete AI',
    description: 'ML, deep learning, NLP, MLOps, and deployment fundamentals from one comprehensive course.',
    accent: 'ml',
    resources: [
      {
        label: 'Complete Machine Learning, NLP & MLOps Bootcamp (Krish Naik)',
        url: 'https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/',
        type: 'Udemy'
      },
      {
        label: 'Machine Learning — Part 1',
        url: 'https://youtu.be/ie4oGI85SAE?si=PIMhjLQg3aXU4jnS',
        type: 'YouTube'
      },
      {
        label: 'Machine Learning — Part 2',
        url: 'https://youtu.be/Eky8CZXapBQ?si=Z4uhlZMb3Y7y1EIU',
        type: 'YouTube'
      },
      {
        label: 'Deep Learning (Krish Naik)',
        url: 'https://youtu.be/d2kxUVwWWwU?si=VlHiFHHz_0cbnAqr',
        type: 'YouTube'
      },
      {
        label: 'NLP — Natural Language Processing (Krish Naik)',
        url: 'https://youtu.be/ENLEjGozrio?si=PJgYlMmDpVsP3QJz',
        type: 'YouTube'
      }
    ]
  },
  {
    icon: <FiCode />,
    title: 'Full-Stack Web Development',
    description: 'JavaScript, React, Express.js, and MongoDB — the MERN stack essentials.',
    accent: 'web',
    resources: [
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
        type: 'YouTube'
      },
      {
        label: 'Mongoose — MongoDB with API',
        url: 'https://www.youtube.com/watch?v=wgwo5hbY7SY',
        type: 'YouTube'
      }
    ]
  },
  {
    icon: <FiCloud />,
    title: 'AWS',
    description: 'Core cloud concepts for interviews: VPC, EC2, Lambda, and networking fundamentals.',
    accent: 'cloud',
    resources: [
      {
        label: 'AWS VPC — Virtual Private Cloud Explained',
        url: 'https://youtu.be/fZuxp_pOzgI?si=dEkza_6-X6g2LYSd',
        type: 'YouTube'
      },
      {
        label: 'AWS Lambda — Serverless Concepts',
        url: 'https://youtu.be/43tIX7901Gs?si=tY-scJhPQJed6eTr',
        type: 'YouTube'
      },
      {
        label: 'AWS EC2 — Compute Basics',
        url: 'https://youtu.be/NWzfgAw_DYA?si=3UFkDhZ_SCQAhzpG',
        type: 'YouTube'
      }
    ]
  },
  {
    icon: <FiFileText />,
    title: 'My Blogs',
    description: 'Notes, tutorials, and project write-ups covering cloud, AI, and dev workflows.',
    accent: 'cloud',
    resources: [
      {
        label: 'Dev.to — Naman Srivastava',
        url: 'https://dev.to/naman_2004',
        type: 'Blog'
      }
    ]
  }
];

const statusIcon = {
  'Selected': <FiCheckCircle />,
  'In Progress': <FiTrendingUp />,
};

const Home = () => {
  return (
    <div className="page-content">
      {/* Editorial Hero */}
      <header className="premium-section-header">
        <span className="eyebrow">// Interview Journey</span>
        <h1 className="premium-heading">My Interview<br />Experiences and Preparation</h1>
      </header>

      {/* Interview Prep Section — ON TOP */}
      <div className="prep-section-block" id="prep-section">
        <div className="prep-section-header">
          <h2>Interview Prep</h2>
          <p>
            Curated resources for DSA, AI, cloud, OOPs, and the study material I actually leaned on while preparing.
          </p>
        </div>

        <div className="prep-stack">
          {prepSections.map((section) => (
            <div className="prep-row-card" key={section.title}>
              <div className="prep-row-top">
                <div className={`prep-category-icon ${section.accent}`}>
                  {section.icon}
                </div>
                <div className="prep-row-info">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
              </div>
              <ul className="prep-resource-list">
                {section.resources.map((item, idx) => (
                  <li key={`${section.title}-${idx}`}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                      {item.type === 'YouTube' || item.type === 'Playlist' || item.type === 'Sheet' || item.type === 'Udemy' ? <FiPlay /> : <FiExternalLink />}
                      <span className="prep-item-text">{item.label}</span>
                      <span className="prep-item-badge">{item.type}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Interview Experiences Timeline — BELOW */}
      <div className="prep-section-block" id="experiences-section">
        <div className="prep-section-header">
          <h2>Interview Experiences</h2>
          <p>
            Real interview stories and round-by-round breakdowns from companies I applied to and interviewed with.
          </p>
        </div>

        <div className="interview-timeline">
          {experiences.map((exp) => (
            <Link
              to={`/experience/${exp.id}`}
              className="timeline-entry"
              key={exp.id}
            >
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h2 className="timeline-company">{exp.company}</h2>
                <span className="timeline-role-badge">{exp.role}</span>

                <div className="timeline-meta">
                  {exp.status && (
                    <span className={`meta-tag status-${exp.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {statusIcon[exp.status] || <FiBriefcase />}
                      {exp.status}
                    </span>
                  )}
                  <span className="meta-tag">
                    <FiTarget />
                    {exp.details?.difficulty || 'Medium'}
                  </span>
                  <span className="meta-tag">
                    <FiClock />
                    {exp.details?.timeline || '1-2 Weeks'}
                  </span>
                  <span className="meta-tag">
                    <FiMapPin />
                    {exp.details?.mode || 'On-site'}
                  </span>
                </div>

                <p className="timeline-overview">
                  {exp.overview.substring(0, 180)}…
                </p>

                <span className="timeline-read-more">
                  Read full experience <FiArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
