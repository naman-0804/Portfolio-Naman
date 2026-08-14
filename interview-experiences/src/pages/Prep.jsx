import { FiBookOpen, FiCloud, FiCpu, FiFileText, FiPlay, FiExternalLink } from 'react-icons/fi';

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

const Prep = () => {
  return (
    <div className="page-content">
      <div className="glass-card home-hero">
        <h1>General Interview Prep</h1>
        <p>
          A focused collection of resources covering DSA, cloud, AI, and practical learning paths to strengthen your interview readiness.
        </p>
      </div>

      <div className="placement-prep-section">
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
                      {item.type === 'Video' ? <FiPlay /> : <FiExternalLink />}
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
    </div>
  );
};

export default Prep;
