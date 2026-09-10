import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import {
  FiBriefcase, FiArrowRight, FiBookOpen, FiCloud, FiCpu,
  FiFileText, FiPlay, FiExternalLink, FiCode, FiLayers,
  FiTarget, FiClock, FiMapPin, FiCheckCircle, FiTrendingUp, FiTerminal,
  FiMap, FiDatabase, FiServer, FiGitBranch, FiBox, FiZap, FiRepeat
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
        label: 'TUF+ OOPs — Java Basics ',
        url: 'https://takeuforward.org/plus/oops/introduction-to-oops/java-basics?subject=oops&approach=python',
        type: 'TUF+'
      },
      {
        label: 'TUF+ — SQL & Data Engineering Foundations',
        url: 'https://takeuforward.org/plus/sql-data-engineering-foundations/getting-started/introduction-to-sql?subject=sql-data-engineering-foundations',
        type: 'TUF+'
      },
      {
        label: 'TUF+ — Computer Networks',
        url: 'https://takeuforward.org/plus/computer-networks-by-striver/module-1-cn-foundations/why-networks-exists?subject=computer-networks-by-striver&sidebar=open',
        type: 'TUF+'
      }
    ]
  },
  {
    icon: <FiCpu />,
    title: 'Complete AI',
    description: 'Either do that Udemy course for complete ML DL NLP or the same playlist on youtube same on both',
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
    description: 'Try to build end to end projects on your own',
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
    description: 'Prefer Documentation + GPT for understanding , look at videos while doing practically',
    accent: 'cloud',
    resources: [
      {
        label: 'AWS VPC — Virtual Private Cloud Explained (I didn\'t refer to this)',
        url: 'https://www.youtube.com/watch?v=43tIX7901Gs',
        type: 'YouTube'
      },
      {
        label: 'AWS Lambda — Serverless Concepts (I didn\'t refer to this)',
        url: 'https://www.youtube.com/watch?v=NWzfgAw_DYA',
        type: 'YouTube'
      },
      {
        label: 'AWS EC2 — Compute Basics (I didn\'t refer to this)',
        url: 'https://www.youtube.com/watch?v=Ens8asZLomk',
        type: 'YouTube'
      },
      {
        label: 'AWS Load Balancer and Auto Scalers (I didn\'t refer to this)',
        url: 'https://www.youtube.com/watch?v=fZuxp_pOzgI',
        type: 'YouTube'
      },
      {
        label: 'AWS S3 (I didn\'t refer to this)',
        url: 'https://www.youtube.com/watch?v=kFeplA2bubM',
        type: 'YouTube'
      }
    ]
  },
  {
    icon: <FiBookOpen />,
    title: 'Core Subjects',
    description: 'One shot videos for OS, DBMS, and Computer Networks.',
    accent: 'ml',
    resources: [
      {
        label: 'Operating System (OS)',
        url: 'https://youtu.be/KlwNyagHWuk?si=xnMYfcBW0l45KyQb',
        type: 'YouTube'
      },
      {
        label: 'Database Management System (DBMS)',
        url: 'https://youtu.be/KWkm1Gip4j4?si=LbgknswAoZHP22nD',
        type: 'YouTube'
      },
      {
        label: 'Computer Networks (CN)',
        url: 'https://youtu.be/skvCwFPZ7zM?si=EJI2c1t-_Si-BAKZ',
        type: 'YouTube'
      },
      {
        label: 'Object-Oriented Programming (OOPs) (I didn\'t refer to this)',
        url: 'https://youtu.be/mlIUKyZIUUU?si=stAqNtmxBPHBG_kq',
        type: 'YouTube'
      }
    ]
  },
  {
    icon: <FiTerminal />,
    title: 'Others',
    description: 'Essential dev tools and workflows — Linux commands, Git version control, and more.',
    accent: 'web',
    resources: [
      {
        label: 'Linux Codes',
        url: 'https://youtu.be/ldgl9Bd3lLg',
        type: 'YouTube'
      },
      {
        label: 'Git & GitHub',
        url: 'https://youtu.be/AB3J8ufDYHQ?si=0ldKYt-D_6mQsk9Y',
        type: 'YouTube'
      },
      {
        label: 'GitHub Actions CI/CD',
        url: 'https://youtu.be/YLtlz88zrLg?si=POnQxP609013RAHs',
        type: 'YouTube'
      },
      {
        label: 'Dockerfile',
        url: 'https://www.youtube.com/watch?v=DQdB7wFEygo',
        type: 'YouTube'
      }
    ]
  }
];

const roadmapPhases = [
  {
    id: 'fundamentals',
    phase: 'Phase 0',
    title: 'Before everything',
    subtitle: 'Core programming and CS fundamentals',
    accent: 'web',
    icon: <FiBookOpen />,
    steps: [
      { label: 'Java', desc: 'Many companies use it for interviews and backend', icon: <FiCode /> },
      { label: 'OOP', desc: 'Object-Oriented Programming concepts and design', icon: <FiLayers /> },
      { label: 'Core Subjects', desc: 'Computer Networks (CN), Operating Systems (OS), DBMS', icon: <FiServer /> },
      { label: 'Python', desc: 'Must for AI, Pandas, Numpy', icon: <FiTerminal /> },
    ]
  },
  {
    id: 'fullstack',
    phase: 'Phase 1',
    title: 'Full-Stack Web Development',
    subtitle: 'Build the core web development muscle',
    accent: 'web',
    icon: <FiCode />,
    steps: [
      { label: 'JavaScript', desc: 'Core language, ES6+, DOM manipulation, async/await', icon: <FiFileText /> },
      { label: 'React.js', desc: 'Component architecture, hooks, state management, routing', icon: <FiLayers /> },
      { label: 'Express.js', desc: 'RESTful APIs, middleware, routing, error handling', icon: <FiServer /> },
      { label: 'Linking React + Express', desc: 'Connect frontend to backend, proxy setup, CORS, API calls', icon: <FiZap /> },
      { label: 'MongoDB + Mongoose', desc: 'NoSQL database, schemas, CRUD operations, aggregation', icon: <FiDatabase /> },
    ]
  },
  {
    id: 'cloud',
    phase: 'Phase 2',
    title: 'Cloud & DevOps',
    subtitle: 'Deploy, automate, and scale your projects',
    accent: 'cloud',
    icon: <FiCloud />,
    steps: [
      { label: 'AWS', desc: 'EC2, S3, Lambda, VPC, SNS, API Gateway — deploy a full-stack project on AWS', icon: <FiCloud /> },
      { label: 'Docker', desc: 'Containerization, Dockerfiles, images, multi-stage builds', icon: <FiBox /> },
      { label: 'Git', desc: 'Version control, branching strategies, merge vs rebase', icon: <FiGitBranch /> },
      { label: 'GitHub Actions', desc: 'CI/CD pipelines, automated testing, deployment workflows', icon: <FiRepeat /> },
    ]
  },
  {
    id: 'ai',
    phase: 'Phase 3',
    title: 'AI',
    subtitle: 'From classical ML to cutting-edge GenAI',
    accent: 'ml',
    icon: <FiCpu />,
    steps: [
      { label: 'Machine Learning', desc: 'Supervised & unsupervised learning, feature engineering, model evaluation', icon: <FiTrendingUp /> },
      { label: 'Deep Learning', desc: 'Neural networks, CNNs, RNNs, PyTorch / TensorFlow', icon: <FiCpu /> },
      { label: 'NLP', desc: 'Text processing, embeddings, transformers, sentiment analysis', icon: <FiFileText /> },
      { label: 'Generative AI', desc: 'LLMs, prompt engineering, RAG, fine-tuning, LangChain, LangGraph', icon: <FiZap /> },
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
            Curated resources for DSA, AI, Cloud, Core and the study material I actually leaned on while preparing.
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

      {/* Mandatory Note */}
      <div className="mandatory-note">
        <div className="mandatory-note-icon">⚠️</div>
        <div className="mandatory-note-content">
          <strong>Make short notes while learning.</strong> Trust me — if you don't write things down as you go, you'll forget most of it by the time your interview comes. A quick revision from your own notes is far far more effective than re-watching one-shot videos.
        </div>
      </div>

      {/* ============================================================
          ROADMAP SECTION
          ============================================================ */}
      <div className="prep-section-block" id="roadmap-section">
        <div className="prep-section-header">
          <h2>Learning Roadmap</h2>
          <p>
            A structured path from web development to AI — follow these phases sequentially while keeping DSA & SQL as a constant practice alongside.
          </p>
        </div>

        {/* Persistent DSA + SQL Banner */}
        <div className="roadmap-persistent-track">
          <div className="roadmap-persistent-icon">
            <FiRepeat />
          </div>
          <div className="roadmap-persistent-info">
            <h4>🔁 Running Throughout — DSA & SQL</h4>
            <p>
              Practice <strong>Striver's A to Z DSA Sheet</strong> and <strong>SQL problems</strong> consistently alongside every phase. These are not optional — they form the backbone of every technical interview.
            </p>
          </div>
        </div>

        {/* Phase Cards */}
        <div className="roadmap-phases">
          {roadmapPhases.map((phase, phaseIdx) => (
            <div className="roadmap-phase-card" key={phase.id}>
              <div className="roadmap-phase-header">
                <div className={`roadmap-phase-badge ${phase.accent}`}>
                  {phase.icon}
                  <span>{phase.phase}</span>
                </div>
                <div className="roadmap-phase-title-group">
                  <h3>{phase.title}</h3>
                  <p>{phase.subtitle}</p>
                </div>
              </div>

              <div className="roadmap-steps">
                {phase.steps.map((step, stepIdx) => (
                  <div className="roadmap-step" key={stepIdx}>
                    <div className="roadmap-step-connector">
                      <div className={`roadmap-step-dot ${phase.accent}`}>
                        {step.icon}
                      </div>
                      {stepIdx < phase.steps.length - 1 && (
                        <div className={`roadmap-step-line ${phase.accent}`} />
                      )}
                    </div>
                    <div className="roadmap-step-content">
                      <h4>{step.label}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow connector between phase cards */}
              {phaseIdx < roadmapPhases.length - 1 && (
                <div className="roadmap-phase-arrow">
                  <FiArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="roadmap-tips">
          <h4>💡 Pro Tips</h4>
          <ul>
            <li>Build at least <strong>one end-to-end project per phase</strong> — learning without building is forgetting.</li>
            <li>After Phase 1, deploy your full-stack project on AWS (Phase 2) — this ties everything together.</li>
            <li>Use <strong>ChatGPT / Gemini</strong> to understand concepts faster, but always implement yourself.</li>
            <li>Maintain a <strong>GitHub profile</strong> with clean READMEs — recruiters check this.</li>
            <li>Start applying by Phase 2 — don't wait until you feel "ready." You'll never feel ready.</li>
          </ul>
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

                <span className="timeline-cta-btn">
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
