import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

// Import Images
import okrapic from '../Images/okra-website.webp';
import vitalized from '../Images/vitalized-website.webp';
import medhub from '../Images/medhub360-website.webp';
import sl from '../Images/SL-website.webp';
import dl from '../Images/Filetransfer.webp';
import sahyogi from '../Images/sahyogi.webp';
import aws from '../Images/AWS.webp';
import db from '../Images/Diabetes.webp';
import wcs from '../Images/th.webp';
import lex from '../Images/lex.webp';
import Portfolio from '../Images/portfolio.webp';
import devops from '../Images/devops.webp';
import auth from '../Images/auth.webp';
import route from '../Images/route.webp';
import wecalm from '../Images/wecalm.webp';
import contextImg from '../Images/contxt.webp';
import vpc from '../Images/vpc-aws.webp';
import cityAssist from '../Images/city-assist.webp';
import aiCombined from '../Images/ai-combined.png';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 'routeguard',
      title: 'RouteGuard: Real-Time Detection',
      category: 'Fullstack',
      description: 'Real-Time Loitering Detection and safe Navigation using OpenCV and OSM.',
      image: route,
      technologies: ['React', 'Python', 'OpenCV', 'OSM API'],
      github: 'https://github.com/naman-0804/RouteGuard',
      youtube: 'https://www.youtube.com/watch?v=LGjBXVr_ZvM'
    },
    {
      id: 'vpc-aws-button',
      category: 'Cloud',
      title: 'Advanced Secure VPC Architecture on AWS',
      description: 'Made an AWS Virtual Private Cloud and demonstrated the connection with private EC2 instance using SSH inside NAT instance',
      image: vpc,
      technologies: ['AWS', 'VPC', 'EC2', 'NAT'],
      github: 'https://github.com/naman-0804/Cloud-AWS/tree/main/Virtual%20Private%20Cloud%20Setup',
      youtube: ''
    },
    {
      id: 'sahyogi-button',
      category: 'Fullstack',
      title: 'Real Time SL Translation over WebRTC',
      description: 'Community helper platform built for SIH with real-time database.',
      image: sahyogi,
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/naman-0804/sih-site',
      youtube: 'https://youtu.be/eXR-V_Ck7VA?si=OxYaDhNPUAbsYDEK'
    },
    {
      id: 'context-ai',
      category: 'Machine Learning',
      title: 'Multi level retrieval pipeline',
      description: 'Intelligent document assistant using RAG and LLMs to interact with documents through natural language.',
      image: contextImg,
      technologies: ['Flask', 'Pinecone', 'Groq API', 'spaCy'],
      github: 'https://github.com/Context-Driven-Legal-Text-Analysis/Context_Driven_Text_Analysis',
      demo: 'https://contextai.tiiny.site/'
    },
    {
      id: 'auth-button',
      category: 'Fullstack',
      title: 'Multi user chatting application',
      description: 'Real-time chat application using Next.js, Clerk Auth and GetStream.',
      image: auth,
      technologies: ['Next.js', 'Clerk', 'GetStream'],
      github: 'https://github.com/naman-0804/Chat-App',
      youtube: 'https://www.youtube.com/watch?v=OOlXkIn3GucY'
    },
    {
      id: 'ml-mini-projects',
      category: 'Machine Learning',
      title: 'AI Projects: ML, DL & NLP',
      description: 'A comprehensive collection of artificial intelligence applications featuring Machine Learning (Customer Segmentation), Deep Learning (Vehicle Classifier CNN), and Natural Language Processing (Kindle Review Sentiment Analyzer).',
      image: aiCombined,
      technologies: ['CNN', 'NLP', 'Scikit-learn', 'Streamlit', 'Pandas'],
      github: 'https://github.com/naman-0804/learning/tree/deep-learning',
      githubText: 'CNN Source',
      demo: 'https://vehicleclassifiercnn.streamlit.app/',
      demoText: 'CNN Demo',
      github2: 'https://github.com/naman-0804/learning/tree/natural-language-processing',
      github2Text: 'NLP Source',
      demo2: 'https://nlp-learning-naman.streamlit.app/',
      demo2Text: 'NLP Demo',
      github3: 'https://github.com/naman-0804/E-Commerce-Customer-Segmentation-Purchase-Prediction',
      github3Text: 'E-Comm Source'
    },
    {
      id: 'dl-button',
      category: 'Cloud',
      title: 'Anonymous File Share',
      description: 'Upload and download files securely without requiring user login.',
      image: dl,
      technologies: ['GCP', 'Google API', 'Flask'],
      github: 'https://github.com/naman-0804/File_Storage',
      youtube: 'https://www.youtube.com/watch?v=5xgZ00DH89w'
    },
    {
      id: 'city-assist-button',
      category: 'Machine Learning',
      title: 'City Assist',
      description: 'Platform for household help, combines identity verification with semantic search to help users find workers',
      image: cityAssist,
      technologies: ['ML', 'Semantic Search', 'Identity Verification'],
      github: 'https://github.com/naman-0804/cityassist',
      youtube: ''
    },
    {
      id: 'AWS-button',
      category: 'Cloud',
      title: 'Serverless Web App',
      description: 'Fully serverless architecture using AWS Lambda and DynamoDB.',
      image: aws,
      technologies: ['AWS Lambda', 'DynamoDB', 'JS'],
      github: 'https://github.com/naman-0804/Cloud-AWS',
      youtube: 'https://youtu.be/bld7EkDXFR4?si=4ccr0Le0AUv6gtfL'
    },
    {
      id: 'ml-button',
      category: 'Cloud',
      title: 'AWS Diabetes Prediction',
      description: 'Machine Learning model deployed on AWS for predicting diabetes.',
      image: db,
      technologies: ['Python', 'AWS', 'Flask', 'ML'],
      github: 'https://github.com/naman-0804/Diabetes_Prediction_onAWS',
      youtube: 'https://youtu.be/OqBdSu4jDhs?si=s80-z3eRVexeqTu1'
    },
    {
      id: 'devops-button',
      category: 'DevOps',
      title: 'DevOps CI/CD Pipeline',
      description: 'React app with Docker containerization and GitHub Actions workflow.',
      image: devops,
      technologies: ['Docker', 'React', 'GitHub Actions'],
      github: 'https://github.com/naman-0804/to-do_devops_',
      youtube: 'https://www.youtube.com/watch?v=NSN33CLi0M8'
    },
    {
      id: 'pulse-tracker',
      category: 'Fullstack',
      title: 'Critical mental health support system',
      description: 'Privacy-preserving mental health tracking system for students with automated SOS triggers and SHA-256 anonymization.',
      image: wecalm,
      technologies: ['React', 'Flask', 'MongoDB', 'Recharts'],
      github: 'https://github.com/naman-0804/Counselling-Management-',
      youtube: ''
    },
    {
      id: 'wcs-button',
      category: 'Machine Learning',
      title: 'AI Content Summarizer',
      description: 'NLP-based tool to summarize long web articles automatically.',
      image: wcs,
      technologies: ['Python', 'NLP', 'Flask'],
      github: 'https://github.com/naman-0804/Ai_content_summarizer',
      youtube: 'https://www.youtube.com/watch?v=X9xr08p2mtk'
    },
    {
      id: 'medhub-button',
      category: 'Fullstack',
      title: 'Medhub360',
      description: 'Medical resource aggregator and appointment booking system.',
      image: medhub,
      technologies: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/naman-0804/Healthcare',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'okra-button',
      category: 'Machine Learning',
      title: 'Okra Maturity Analysis',
      description: 'Agricultural tech solution for analyzing crop maturity via images.',
      image: okrapic,
      technologies: ['Python', 'Image Processing'],
      github: 'https://github.com/naman-0804/Okra-Maturity-Analysis',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'vitalized-button',
      category: 'Fullstack',
      title: 'Vitalized Healthcare',
      description: 'Comprehensive healthcare platform for connecting patients and doctors.',
      image: vitalized,
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/naman-0804/vitalized-vit',
      youtube: 'https://youtu.be/PPTDtrzJOT8?si=e32v89AZyyjjZ0av'
    },
    {
      id: 'portfolio-button',
      category: 'Fullstack',
      title: 'Portfolio Website',
      description: 'The website you are currently looking at!',
      image: Portfolio,
      technologies: ['React', 'EmailJs', 'CSS3'],
      github: 'https://github.com/naman-0804/Portfolio-Naman',
      youtube: 'https://www.youtube.com/watch?v=u4lYKwQs48s'
    },
    {
      id: 'asl-button',
      category: 'Machine Learning',
      title: 'Sign Language Translator',
      description: 'Real-time ASL/ISL translation using computer vision and deep learning.',
      image: sl,
      technologies: ['TensorFlow', 'OpenCV', 'Python'],
      github: 'https://github.com/naman-0804/Sign-Language-Translator',
      youtube: 'https://youtu.be/qMkM-zELXGI?si=hYzMO1V07OooRW-y'
    },
    {
      id: 'lex-button',
      category: 'Cloud',
      title: 'Lex ChatBot',
      description: 'Intelligent conversational bot powered by Amazon Lex.',
      image: lex,
      technologies: ['AWS Lex', 'AI', 'Cloud'],
      github: 'https://github.com/naman-0804?tab=repositories',
      youtube: 'https://www.youtube.com/watch?v=lU9DK8GRS1k'
    }
  ];

  const categories = ['All', 'Fullstack', 'Machine Learning', 'DevOps', 'Cloud'];

  const categoryColors = {
    'Fullstack': 'var(--accent)',
    'Machine Learning': 'var(--violet)',
    'DevOps': 'var(--amber)',
    'Cloud': 'var(--blue)',
  };

  const otherProjectIds = ['pulse-tracker', 'wcs-button', 'medhub-button', 'okra-button', 'vitalized-button', 'portfolio-button', 'asl-button', 'lex-button', 'AWS-button'];

  const mainProjects = projects.filter(p => !otherProjectIds.includes(p.id));
  const modalProjects = projects.filter(p => otherProjectIds.includes(p.id));

  const displayedProjects = activeFilter === 'All'
    ? mainProjects
    : mainProjects.filter(p => p.category === activeFilter);

  const redirectToProject = (url) => {
    if (url) window.open(url, '_blank');
  };

  const renderProject = (project, index) => (
    <div
      key={project.id}
      className="proj-row"
      style={{
        '--i': index,
        '--cat-color': categoryColors[project.category] || 'var(--accent)',
        flexShrink: 0
      }}
    >
      <div className="proj-row-header">
        <h3 className="proj-row-title">{project.title}</h3>
        <span className="proj-row-category">{project.category}</span>
      </div>
      <div className="proj-row-body">
        <div className="proj-row-details">
          <p className="proj-row-desc">{project.description}</p>
          <div className="proj-row-tech">
            {project.technologies.map((tech, i) => (
              <span key={i} className="proj-tech-pill">{tech}</span>
            ))}
          </div>
          <div className="proj-row-actions">
            {project.github && (
              <button
                className="proj-action-btn"
                onClick={(e) => { e.stopPropagation(); redirectToProject(project.github); }}
              >
                <FaGithub /> <span>{project.githubText || 'Source Code'}</span>
              </button>
            )}
            {project.github2 && (
              <button
                className="proj-action-btn"
                onClick={(e) => { e.stopPropagation(); redirectToProject(project.github2); }}
              >
                <FaGithub /> <span>{project.github2Text || 'Source Code 2'}</span>
              </button>
            )}
            {project.github3 && (
              <button
                className="proj-action-btn"
                onClick={(e) => { e.stopPropagation(); redirectToProject(project.github3); }}
              >
                <FaGithub /> <span>{project.github3Text || 'Source Code 3'}</span>
              </button>
            )}
            {project.youtube && (
              <button
                className="proj-action-btn proj-action-yt"
                onClick={(e) => { e.stopPropagation(); redirectToProject(project.youtube); }}
              >
                <FaYoutube /> <span>Watch Demo</span>
              </button>
            )}
            {project.demo && (
              <button
                className="proj-action-btn proj-action-demo"
                onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo); }}
              >
                <FaExternalLinkAlt /> <span>{project.demoText || 'Live Demo'}</span>
              </button>
            )}
            {project.demo2 && (
              <button
                className="proj-action-btn proj-action-demo"
                onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo2); }}
              >
                <FaExternalLinkAlt /> <span>{project.demo2Text || 'Live Demo 2'}</span>
              </button>
            )}
          </div>
        </div>
        {project.image && (
          <div className="proj-row-image">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div id="project-section" className="project">
      {/* Premium Typography Header */}
      <div className="premium-section-header" style={{ marginBottom: "2rem" }}>
        <h2 className="premium-heading">Showcase &<br />Works.</h2>

      </div>

      {/* Filter tabs */}
      <div className="proj-filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`proj-filter-tab${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
            style={{ '--cat-color': categoryColors[cat] || 'var(--text-primary)' }}
          >
            {cat}
            {activeFilter === cat && <span className="proj-filter-dot" />}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div className="proj-list">
        {displayedProjects.map(renderProject)}
      </div>

      {!isModalOpen && (
        <div className="see-all-container">
          <button className="see-all-btn" onClick={() => setIsModalOpen(true)}>
            See Other Projects
          </button>
        </div>
      )}

      {isModalOpen && createPortal(
        <div className="project-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h2 className="premium-heading" style={{ fontSize: '2.5rem', marginTop: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Other Projects</h2>
            <div className="proj-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto', maxHeight: '70vh', paddingRight: '10px' }}>
              {modalProjects.map(renderProject)}
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}

export default Projects;