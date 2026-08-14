import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { FiBriefcase, FiArrowRight, FiBookOpen, FiCloud, FiCpu, FiFileText, FiPlay, FiExternalLink, FiCode, FiLayers } from 'react-icons/fi';

const prepSections = [
  {
    icon: <FiBookOpen />,
    title: 'DSA — A to Z',
    description: 'A structured roadmap covering arrays, strings, graphs, trees, DP, and interview-level problem solving.',
    accent: 'web',
    resources: [
      {
        label: "Striver's A to Z DSA Sheet",
        url: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z',
        type: 'Sheet'
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
        type: 'Video'
      },
      {
        label: 'Mongoose — MongoDB with API',
        url: 'https://www.youtube.com/watch?v=wgwo5hbY7SY',
        type: 'Video'
      }
    ]
  },
  {
    icon: <FiLayers />,
    title: 'OOPs + Data Engineering',
    description: 'TUF+ (Striver) resources I referred for object-oriented programming and core data engineering fundamentals.',
    accent: 'ml',
    resources: [
      {
        label: 'TUF+ (Striver) — OOPs & Data Engineering',
        url: 'https://takeuforward.org/',
        type: 'TUF+'
      },
      {
        label: 'TakeUForward — Data Engineering Basics',
        url: 'https://takeuforward.org/data-engineering/',
        type: 'Roadmap'
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
        type: 'Video'
      },
      {
        label: 'AWS Lambda — Serverless Concepts',
        url: 'https://youtu.be/43tIX7901Gs?si=tY-scJhPQJed6eTr',
        type: 'Video'
      },
      {
        label: 'AWS EC2 — Compute Basics',
        url: 'https://youtu.be/NWzfgAw_DYA?si=3UFkDhZ_SCQAhzpG',
        type: 'Video'
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

      <div className="placement-prep-section">
        <div className="prep-section-header">
          <h2>Interview Prep</h2>
          <p>
            Curated resources for DSA, AI, cloud, OOPs, and the study material I actually leaned on while preparing.
          </p>
        </div>

        <div className="prep-categories">
          {prepSections.map((section) => (
            <div className="prep-category-card" key={section.title}>
              <div className={`prep-category-icon ${section.accent}`}>
                {section.icon}
              </div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <ul className="prep-resource-list">
                {section.resources.map((item, idx) => (
                  <li key={`${section.title}-${idx}`}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                      {item.type === 'Video' || item.type === 'Playlist' || item.type === 'Sheet' || item.type === 'Udemy' ? <FiPlay /> : <FiExternalLink />}
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

      <div className="placement-prep-section" style={{ marginTop: '2.5rem' }}>
        <div className="prep-section-header">
          <h2>Interview Experiences</h2>
          <p>
            Real interview stories and round-by-round breakdowns from companies I applied to and interviewed with.
          </p>
        </div>
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
